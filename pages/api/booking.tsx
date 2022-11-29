import { NextApiRequest, NextApiResponse } from "next";
import mjml2html from "mjml";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // try 5 times
    for (let i = 0; i < 5; i++) {
        try {
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
            let booking = ``
            // iterate through formData object
            for (let key in formData) {
                booking += `${key}: ${formData[key]}\n`
            }
            let internalMail = {
                // from: process.env.EMAIL_INFO,
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: "Buchungsanfrage für Banja Os",
                text: `
Name: ${formData["name"]}
Email: ${formData["email"]}
Telefon: ${formData["phone"]}
Datum: ${formData["date"]}
Uhrzeit: ${formData["time"]}
Anzahl Personen: ${formData["persons"]}
Anzahl Stunden: ${formData["hours"]}
Anmerkungen: ${formData["notes"] || "keine"}

JSON:
${booking}
`
            }
            await transporter.sendMail(internalMail)

            let customerMail = {
                // from: process.env.EMAIL_INFO,
                // to: process.env.EMAIL_USER,
                // replyTo: formData["email"],
                from: process.env.EMAIL_USER,
                to: formData["email"],
                subject: `Buchungsanfrage von ${formData["name"]}`,
                html: getBookingInqueryAnswer(formData["name"]),
                text: `Hi ${formData["name"]},
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
49078 Osnabrück`,
            }
            await transporter.sendMail(customerMail)
            console.log(`mail sent to ${formData["email"]}`)
            res.status(200)
            break;
        } catch (err) {
            console.log(err)
            if (i === 4) {
                res.status(500)
            }
        }
    }
    res.end()
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
<mj-image align="center" width="150px" padding-bottom="10px" href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/recast-ai-01.png"></mj-image>
				<mj-text align="center" color="#EA9937" font-size="33px" line-height="1%" font-family="Mr De Haviland" padding-bottom="20px" padding-top="0px">
                <p>Banja Os</p>
        </mj-text>
        <mj-text color="#FFFBFB" align="center">
          ${message}        
        </mj-text>

        <mj-divider border-width="0.1px" border-style="solid" border-color="#3f4a53" width="60%" />
      <mj-text align="center" color="#3f4a53" font-size="33px" line-height="1%" font-family="Mr De Haviland" padding-bottom="0px" padding-top="30px">
                <p>Banja Os</p>
        </mj-text>
        <mj-text align="center" color="#354049" font-size="13px" line-height="100%" padding-top="0px">
        <p padding="0px">
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