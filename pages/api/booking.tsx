import {NextApiRequest, NextApiResponse} from "next";
import AWS from 'aws-sdk'
import {nanoid} from 'nanoid/async'
import {SendMessageBatchRequestEntryList} from "aws-sdk/clients/sqs";
import {newsletterSchema} from "../../components/contactForm";

interface FormData {
    name: string,
    email: string,
    phone: string,
    date: string,
    time: string,
    persons: string,
    hours: string,
    notes: string
    newsletter: boolean,
    dataProtection: boolean,
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Received booking request")
    try {
        const formData = await req.body;

        if (!newsletterSchema.parse(formData)) {
            res.status(400).json({ error: "Invalid request body" });
            res.end();
            return;
        }

        let internalMail = {
            to: process.env.EMAIL_USER,
            subject: `Buchungsanfrage`,
            templateFile: "template.mjml",
            messageHtml: getInternalEmailText(formData),
            messageText: getInternalEmailHtml(formData),
        }

        let customerEmail = {
            to: formData["email"],
            subject: "Buchungsanfrage für Banja Os",
            templateFile: "template.mjml",
            messageHtml: getBookingInqueryAnswer(formData["name"]),
            messageText: getCustomerMailText(formData),
        }

        let shadowEmail = {
            to: process.env.SHADOW_EMAIL,
            subject: `Buchungsanfrage`,
            templateFile: "template.mjml",
            messageHtml: getInternalEmailText(formData),
            messageText: getInternalEmailHtml(formData),
        }

        const sqs = new AWS.SQS({
            accessKeyId: process.env.BANJA_OS_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.BANJA_OS_AWS_SECRET_ACCESS_KEY,
            region: process.env.BANJA_OS_AWS_REGION
        });

        var params = {
            QueueUrl: process.env.SQS_QUEUE_URL,
            Entries: [
                {
                    Id: await nanoid(),
                    MessageBody: JSON.stringify(internalMail),
                },
                {
                    Id: await nanoid(),
                    MessageBody: JSON.stringify(customerEmail),
                },
                {
                    Id: await nanoid(),
                    MessageBody: JSON.stringify(shadowEmail),
                }
            ] as SendMessageBatchRequestEntryList
        } as AWS.SQS.SendMessageBatchRequest;

        await sqs.sendMessageBatch(params).promise();
        res.status(200)
        console.log(`Form successfully processed!`)
    } catch (err) {
        console.error(err, req.body);
        res.status(500)
    }
    res.end()
}


function getInternalEmailHtml(formData: FormData) {
    return `Eingegangene Buchungsanfrage:<br/>
Name: ${formData["name"]}<br/>
Email: ${formData["email"]}<br/>
Telefon: ${formData["phone"]}<br/>
Datum: ${formData["date"]}<br/>
Uhrzeit: ${formData["time"]}<br/>
Anzahl Personen: ${formData["persons"]}<br/>
Anzahl Stunden: ${formData["hours"]}<br/>
Anmerkungen: ${formData["notes"] || "keine"}<br/>
`;
}

function getInternalEmailText(formData: FormData) {
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

function getCustomerMailText(formData: FormData) {
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

function getBookingInqueryAnswer(name: string) {
    return `<p>Hi ${name},</p>
<p>deine Buchungsanfrage ist erfolgreich bei uns eingegangen.<br/>
Wir melden uns bei dir innerhalb von 24 Stunden!
<br/><br/>
Liebe Grüße<br/>Hilda</p>`;
}
