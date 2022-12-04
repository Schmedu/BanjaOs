import { NextApiRequest, NextApiResponse } from "next";
import mjml2html from "mjml";
import AWS from 'aws-sdk'

function getInternalEmailText(formData: any, booking: string) {
    return `Eingegangene Buchungsanfrage:
Name: ${formData["name"]}
Email: ${formData["email"]}
Telefon: ${formData["phone"]}
Datum: ${formData["date"]}
Uhrzeit: ${formData["time"]}
Anzahl Personen: ${formData["persons"]}
Anzahl Stunden: ${formData["hours"]}
Anmerkungen: ${formData["notes"] || "keine"}
`;
}

function getCustomerMailText(formData: any) {
    return `Hi ${formData["name"]},
das ist eine automatische Bestätigung deiner Buchungsanfrage für Banja Os. 
Wir melden uns bei dir innerhalb von 24 Stunden.

Hier deine gesendeten Daten:
Name: ${formData["name"]}
Email: ${formData["email"]}
Telefon: ${formData["phone"]}
Datum: ${formData["date"]}
Uhrzeit: ${formData["time"]}
Anzahl Personen: ${formData["persons"]}
Anzahl Stunden: ${formData["hours"]}
Anmerkungen: ${formData["notes"] || "keine"}

Liebe Grüße
Hilda


Banja Os
Hilda Uffelmann
Kleine Schulstr. 24a
49078 Osnabrück`;
}

function getBookingJson(formData: any) {
    let booking = ``
    // iterate through formData object
    for (let key in formData) {
        booking += `${key}: ${formData[key]}\n`
    }
    return booking;
}

async function saveInS3(formData: any) {
    const s3 = new AWS.S3({
        accessKeyId: process.env.BANJA_OS_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.BANJA_OS_AWS_SECRET_ACCESS_KEY,
    })
    // get current datetime as iso string
    const date = new Date().toISOString().split('.')[0]
    if (!process.env.AWS_BUCKET_NAME) {
        console.error("No bucket name set")
        return;
    }
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${formData['email']}-${date}.json`,
        Body: JSON.stringify(formData)
    }
    // @ts-ignore
    await s3.upload(params).promise()
}

function getBookingInqueryAnswer(name: string) {
    let answer = `
<h3 style="font-family: Lora;">
  Buchungsanfrage
</h3>
<p>Hi ${name},</p>
<p>deine Buchungsanfrage ist erfolgreich bei uns eingegangen.<br/>
Wir melden uns bei dir innerhalb von 24 Stunden!
<br/><br/>
Liebe Grüße<br/>Hilda</p>`
    return getEmailTemplate(answer);
}

function getEmailTemplate(message: string) {
    // TODO: adjust image url to production
    return mjml2html(`
<mjml>
  <mj-head>
    <mj-title>Hello world</mj-title>
    <mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=HindMadurai:300,500"></mj-font>
    <mj-font name="Lora" href="https://fonts.googleapis.com/css?family=Lora:300,500"></mj-font>
    <mj-font name="Mr De Haviland" href="https://fonts.googleapis.com/css?family=Mr+De+Haviland"></mj-font>
    <mj-attributes>
      <mj-all font-family="Roboto, Helvetica, sans-serif"></mj-all>
      <mj-text font-weight="300" font-size="16px" color="#616161" line-height="24px"></mj-text>
      <mj-section padding="0px"></mj-section>
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#0d1821">
      <mj-section padding-top="40px;"></mj-section>
    <mj-section padding-top="30px" background-color="#17222b" border-radius="0.5rem" padding="5%">
      <mj-column width="100%">
        <mj-image align="center" width="90px" padding-bottom="0px" href="https://www.banja-os.de" src="${process.env.NEXTAUTH_URL}/magick/banja-os-icon-250.png"></mj-image>
        <mj-text align="center" color="#EA9937" font-size="40px" line-height="1%" font-family="Mr De Haviland" padding-bottom="20px" padding-top="0px">
        <p>Banja Os</p>
        </mj-text>
        <mj-text color="#FFFBFB" align="center">
          ${message}        
        </mj-text>

        <mj-divider border-width="0.1px" border-style="solid" border-color="#3f4a53" width="60%" />
        <mj-image align="center" width="250px" padding-bottom="0px" href="https://www.banja-os.de" src="${process.env.NEXTAUTH_URL}/magick/Banja-Os-300.png"></mj-image>
        <mj-text align="center" color="#3f4a53" font-size="13px" line-height="100%" padding-top="0px">
        <p padding="0px">
          Banja Os<br/>
          Hilda Uffelmann<br/>
          Kleine Schulstr. 24a <br/>
          49078 Osnabrück</p>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`).html;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Received booking request")
    const formData = await req.body;
    const nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PW
        }
    })

    let booking = getBookingJson(formData);
    let internalMail = {
        // TODO: adjust email addresses after adding EMAIL_INFO
        // from: process.env.EMAIL_INFO,
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Buchungsanfrage für Banja Os",
        text: getInternalEmailText(formData, booking)
    }

    let customerMail = {
        // TODO: adjust email addresses after adding EMAIL_INFO
        // from: process.env.EMAIL_INFO,
        // to: process.env.EMAIL_USER,
        // replyTo: formData["email"],
        from: process.env.EMAIL_USER,
        to: formData["email"],
        subject: `Buchungsanfrage von ${formData["name"]}`,
        html: getBookingInqueryAnswer(formData["name"]),
        text: getCustomerMailText(formData),
    }
    // don't wait for the functions to finish because because of time limit on vercel
    // TODO: add previous error handling
    // TODO: setup Lambda function to handle the mail sending with an s3 trigger to overcome the time limit
    saveInS3(formData)
    transporter.sendMail(internalMail)
    transporter.sendMail(customerMail)
    res.status(200)
    res.end()
    console.log(`mail sent to ${formData["email"]}`)
}
