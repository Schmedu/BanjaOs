import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {motion} from 'framer-motion';
import GradientButton from "./gradientButton";
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';


const buttonText = "Senden";
const message = "Nachricht";
const phoneNumber = "";
const phoneLabel = "Telefon";
const emailPlaceholder = "";

const nameLabel = "Name";
const namePlaceholder = "";
const personsPlaceHolder = "";
const hoursPlaceHolder = "";
const messagePlaceHolder = "(optional)";

let required = 'Pflichtfeld';
export const newsletterSchema = z.object({
    name: z.string().min(2, {message: required}).max(50, {message: 'Der Name ist zu lang.'}),
    email: z.string().email({message: 'Invalide Emailadresse'}),
    dataProtection: z.boolean().refine(value => value === true, {message: required}),
    phone: z.string().min(6, {message: required}).refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Bitte geben Sie eine gültige Telefonnummer ein.",
    }),
    date: z.string().min(10, {message: 'Datum muss in der Zukunft sein.'}).refine((val) => {
        const date = new Date(val);
        return date > new Date((new Date()).setHours(0, 0, 0, 0));
    }, {message: 'Datum muss in der Zukunft sein.'}),
    time: z.string().min(4, {message: required}).max(5, {message: 'Gib eine valide Uhrzeit an.'}),
    persons: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Bitte geben Sie eine Zahl ein.",
    }).refine((val) => parseInt(val, 10) < 9 , {
        message: "Maximal 8 Personen.",
    }).refine((val) => parseInt(val, 10) > 0 , {
        message: "Mindestens 1 Person.",
    }),
    hours: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Bitte geben Sie eine Zahl ein.",
    }).refine((val) => parseInt(val, 10) < 7 , {
        message: "Maximal 6 Stunden.",
    }).refine((val) => parseInt(val, 10) > 0 , {
        message: "Mindestens 1 Stunde.",
    }),
    message: z.string().max(500, {message: 'Die Nachricht ist zu lang.'}),
    newsletter: z.boolean(),
});


// const times = Array.from({ length: 12 }, (_, i) => {
//     const hour = 10 + i;
//     return [`${hour}:00`, `${hour}:30`];
// }).flat();
// console.log(times);

interface ContactResponse {
    heading: string;
    paragraph: string;
}

const ContactForm = () => {
    const [contactResponse, setContactResponse] = useState({
        send: "false",
        heading: "",
        paragraph: "",
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(newsletterSchema),
    });
    // @ts-ignore
    const handleRegistration = async (data) => {
        // data.preventDefault();
        setContactResponse({send: "sending", heading: "Senden...", paragraph: "Bitte warten..."});
        const res = await fetch(`/api/booking`, {
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        });

        if (res.status === 200) {
            setContactResponse({
                send: "true",
                heading: "Dankeschön! 😊",
                paragraph: `Vielen Dank für deine Anfrage, ${data.name}! Wir melden uns bei dir innerhalb von 24 Stunden!`
            });
        } else {
            setContactResponse({
                send: "true",
                heading: "Unerwarteter Fehler 😢",
                paragraph: `Bitte sende uns eine Email an info@banja-os.de und berichte uns was schief gelaufen ist.`
            });
        }
    };

    return (
        <section id="termin">
            <h2 className="mt-0 mb-5 text-4xl font-medium tracking-wide text-center">
                Termin buchen
            </h2>
            <div className="mx-auto md:w-7/12 lg:w-1/2">
                <motion.div
                    className="rounded-lg bg-br-l-blush-light dark:bg-br-black-400 dark:border-none dark:border-none p-8 shadow-lg lg:col-span-3 lg:p-12"
                    initial={{opacity: 0.2, y: 50}}
                    whileInView={{opacity: 1, y: 0, transition: {duration: (0.3 * 1)}}}
                    viewport={{once: true}}
                >
                    {contactResponse.send === "false" ? (
                        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                            <div>
                                <label className="" htmlFor="name">{nameLabel}:</label>
                                <input
                                    className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                    placeholder={namePlaceholder}
                                    type="text"
                                    id="name"
                                    {...register('name', {
                                        required: true,
                                        validate: (value) => {
                                            return value.length > 3 && value.split(" ").length > 1 && value.split(" ")[1].length > 1;
                                        }
                                    })}
                                />
                                {errors.name && (
                                    <span className="pt-2 pl-2 block text-br-orange" role="alert">
                                        {/*@ts-ignore*/}
                                        {errors.name?.message}
                                    </span>
                                )}

                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="" htmlFor="email">Email:</label>
                                    <input
                                        className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                        placeholder={emailPlaceholder}
                                        type="text"
                                        id="email"
                                        {...register('email', {
                                            required: true,
                                            validate: (email) => {
                                                return (
                                                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                                ).test(email);
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <span className="pt-2 pl-2 block text-br-orange" role="alert">
                                            {/*@ts-ignore*/}
                                            {errors.email?.message}
                                        </span>
                                    )}

                                </div>

                                <div>
                                    <label className="" htmlFor="phone">{phoneLabel}:</label>
                                    <input
                                        className="w-full rounded-lg p-3 text-sm border dark:border-none"
                                        placeholder={phoneNumber}
                                        type="tel"
                                        id="phone"
                                        {...register('phone', {
                                            required: true,
                                            validate: (phone) => {
                                                return phone.length >= 6;
                                            }
                                        })}

                                    />
                                    {errors.phone && (
                                        <span className="pt-2 pl-2 block text-br-orange" role="alert">
                                            {/*@ts-ignore*/}
                                            {errors.phone?.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="" htmlFor="date">Datum:</label>
                                    <input
                                        className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                        placeholder="Datum"
                                        type="date"
                                        id="datet"
                                        {...register('date', {
                                            required: true,
                                            validate: (value) => {
                                                // check if value is a valid date and if it is in the future
                                                const today = new Date();
                                                today.setHours(0, 0, 0, 0);
                                                const date = new Date(value);
                                                return date >= today;
                                            }
                                        })}
                                    />
                                    {errors.date && (
                                        <span className="pt-2 pl-2 block text-br-orange" role="alert">
                                            {/*@ts-ignore*/}
                                            {errors.date?.message}
                                        </span>
                                    )}

                                </div>
                                <div>
                                    <label className="" htmlFor="time">Uhrzeit:</label>
                                    <input
                                        className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                        placeholder="Uhrzeit"
                                        id="time"
                                        list='times'
                                        type={'time'}
                                        {...register('time', {
                                            required: true,
                                            // validate: value => times.includes(value)
                                        })}
                                    />
                                    {errors.time && (
                                        <span className="pt-2 pl-2 block text-br-orange" role="alert">
                                            {/*@ts-ignore*/}
                                            {errors.time?.message}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label className="" htmlFor="persons">Personen:</label>
                                    <input
                                        className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                        placeholder={personsPlaceHolder}
                                        id="persons"
                                        type={'number'}
                                        // list='persons'
                                        {...register('persons', {
                                            required: true,
                                            min: 1,
                                            max: 6,
                                        })}
                                    />
                                    {errors.persons && (
                                        <span className="pt-2 pl-2 block text-br-orange" role="alert">
                                            {/*@ts-ignore*/}
                                            {errors.persons?.message}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label className="" htmlFor="hour">Stunden:</label>
                                    <input
                                        className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                        placeholder={hoursPlaceHolder}
                                        id="hour"
                                        // list={'hours'}
                                        type={'number'}
                                        {...register('hours', {
                                            required: true,
                                            min: 1,
                                            max: 4,
                                        })}
                                    />
                                    {/*<datalist id="hours">*/}
                                    {/*    <option key={1} value={"1"} />*/}
                                    {/*    <option key={2} value={"2"} />*/}
                                    {/*    <option key={3} value={"3"} />*/}
                                    {/*    <option key={4} value={"4"} />*/}
                                    {/*</datalist>*/}
                                    {errors.hours && (
                                        <span className="pt-2 pl-2 block text-br-orange" role="alert">
                                            {/*@ts-ignore*/}
                                            {errors.hours?.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="" htmlFor="message">{message}:</label>
                                <textarea
                                    className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                    placeholder={messagePlaceHolder}
                                    rows={2}
                                    id="message"
                                    {...register('message')}
                                ></textarea>
                            </div>

                            <div className="space-y-2">
                                <div>
                                    <input
                                        {...register('dataProtection', {required: true})}
                                        name="dataProtection"
                                        id="dataProtection"
                                        type="checkbox"
                                    />
                                    <label htmlFor="dataProtection" className={"ml-2"}>
                                        Ich akzeptiere die <a href="/datenschutz"
                                                              target="_blank">Datenschutzerklärung</a>
                                    </label>
                                    {errors.dataProtection && (
                                        <span className="block mb-2 text-br-orange" role="alert">
                                            {/*@ts-ignore*/}
                                            {errors.dataProtection?.message}
                                        </span>
                                    )}
                                </div>
                                <div className={""}>
                                    <input
                                        {...register('newsletter',)}
                                        id="newsletter"
                                        name="newsletter"
                                        type="checkbox"
                                    />
                                    <label htmlFor="newsletter" className={"ml-2"}>
                                        Informiere mich über Sauna Angebote.
                                    </label>
                                </div>
                            </div>
                            <div className={"text-right"}>
                                <GradientButton buttonText={buttonText} classNames={"px-5 py-2 text-xl"} delay={0}/>
                            </div>
                        </form>
                    ) : (
                        <div className={"text-center"}>
                            <h3 className={"text-2xl py-4"}>{contactResponse.heading}</h3>
                            <p className={""}>{contactResponse.paragraph}</p>
                        </div>
                    )}
                </motion.div>
            </div>

        </section>
    )
}

export default ContactForm;