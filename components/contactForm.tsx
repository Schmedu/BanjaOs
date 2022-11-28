import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import GradientButton from "./gradientButton";


const buttonText = "Senden";
const message = "Nachricht";
const phoneNumber = "0171 1234567";
const phoneLabel = "Telefon";
const emailPlaceholder = "max@mustermann.com";

const nameLabel = "Name";
const namePlaceholder = "Max Mustermann";

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
        send: false,
        heading: "",
        paragraph: "",
    });
    const { register, handleSubmit, formState: { errors } } = useForm();
    // @ts-ignore TODO: fix this
    const handleRegistration = async (data) => {
        // data.preventDefault();
        console.log(data);
        const res = await fetch(`/api/booking`, {
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        });

        if (res.status === 200) {
            setContactResponse({ send: true, heading: "Dankeschön!", paragraph: `Vielen Dank für deine Anfrage, ${data.name}!Wir melden uns bei dir innerhalb von 24 Stunden!` });
        } else {
            setContactResponse({ send: true, heading: "Unerwarteter Fehler ☹", paragraph: `Bitte sende uns eine Email an info@banja-os.de und berichte uns was schief gelaufen ist.` });
        }
    };

    return (
        <section id="termin">
            <h2 className="mt-0 mb-5 text-4xl font-medium tracking-wide text-center">
                Termin buchen
            </h2>
            <div className="mx-auto md:w-7/12 lg:w-1/2">
                <div className="rounded-lg bg-br-l-blush-light dark:bg-br-black-400 dark:border-none dark:border-none p-8 shadow-lg lg:col-span-3 lg:p-12">
                    {contactResponse.send === false ? (
                        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                            <div>
                                <label className="" htmlFor="name">{nameLabel}:</label>
                                <motion.input
                                    initial={{ opacity: 0.2, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                    viewport={{ once: true }}
                                    className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                    placeholder={namePlaceholder}
                                    type="text"
                                    id="name"
                                    {...register('name', { required: true })}
                                />
                                {errors.name && <span className="pt-2 pl-2 block" role="alert">Das ist ein Pflichtfeld.</span>}
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="" htmlFor="email">Email:</label>
                                    <motion.input
                                        initial={{ opacity: 0.2, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                        viewport={{ once: true }}
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
                                    {errors.email && errors.email.type === "required" && (
                                        <span className="pt-2 pl-2 block" role="alert" >Das ist ein Pflichtfeld.</span>
                                    )}
                                    {errors.email && errors.email.type === "validate" && (
                                        <span className="pt-2 pl-2 block" role="alert" >Entspricht nicht dem Format einer Email-Adresse.</span>
                                    )}

                                </div>

                                <div>
                                    <label className="" htmlFor="phone">{phoneLabel}:</label>
                                    <motion.input
                                        initial={{ opacity: 0.2, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                        viewport={{ once: true }}
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
                                    {errors.phone && errors.phone.type === "required" && (
                                        <span className="pt-2 pl-2 block" role="alert" >Das ist ein Pflichtfeld.</span>
                                    )}
                                    {errors.phone && errors.phone.type === "validate" && (
                                        <span className="pt-2 pl-2 block" role="alert" >Es muss sich um eine valide Telefonnummer handeln.</span>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="" htmlFor="date">Datum:</label>
                                    <motion.input
                                        initial={{ opacity: 0.2, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                        viewport={{ once: true }}
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
                                    {errors.date && errors.date.type === "required" && (
                                        <span className="pt-2 pl-2 block" role="alert">Das ist ein Pflichtfeld.</span>
                                    )}
                                    {errors.date && errors.date.type === "validate" && (
                                        <span className="pt-2 pl-2 block" role="alert">Das Datum muss heute oder in der Zukunft liegen.</span>
                                    )}

                                </div>
                                <div>
                                    <label className="" htmlFor="time">Uhrzeit:</label>
                                    <motion.input
                                        initial={{ opacity: 0.2, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                        viewport={{ once: true }}
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
                                    {errors.time && errors.time.type === "required" && (
                                        <span className="pt-2 pl-2 block" role="alert">Das ist ein Pflichtfeld.</span>
                                    )}
                                    {errors.time && errors.time.type === "validate" && (
                                        <span className="pt-2 pl-2 block" role="alert">Inkorrekte Uhrzeit</span>
                                    )}
                                    {errors.time && errors.time.type === "maxLength" && (
                                        <span className="pt-2 pl-2 block" role="alert">Max length exceeded</span>
                                    )}
                                </div>
                                <div>
                                    <label className="" htmlFor="persons">Personen:</label>
                                    <motion.input
                                        initial={{ opacity: 0.2, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                        viewport={{ once: true }}
                                        className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                        placeholder="4 Personen"
                                        id="persons"
                                        type={'number'}
                                        // list='persons'
                                        {...register('persons', {
                                            required: true,
                                            min: 1,
                                            max: 6,
                                        })}
                                    />
                                    {errors.persons && errors.persons.type === "required" && (
                                        <span className="pt-2 pl-2 block" role="alert">Das ist ein Pflichtfeld.</span>
                                    )}
                                    {errors.persons && errors.persons.type === "min" && (
                                        <span className="pt-2 pl-2 block" role="alert">Min. 1 Person</span>
                                    )}
                                    {errors.persons && errors.persons.type === "max" && (
                                        <span className="pt-2 pl-2 block" role="alert">Max. 6 Person</span>
                                    )}
                                </div>
                                <div>
                                    <label className="" htmlFor="hour">Stunden:</label>
                                    <motion.input
                                        initial={{ opacity: 0.2, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                        viewport={{ once: true }}
                                        className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                        placeholder="2 Stunden"
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
                                    {errors.hours && errors.hours.type === "required" && (
                                        <span className="pt-2 pl-2 block" role="alert">Das ist ein Pflichtfeld.</span>
                                    )}
                                    {errors.hours && errors.hours.type === "validate" && (
                                        <span className="pt-2 pl-2 block" role="alert">Falsche Uhrzeit</span>
                                    )}
                                    {errors.hours && errors.hours.type === "min" && (
                                        <span className="pt-2 pl-2 block" role="alert">Min. 1 Stunde</span>
                                    )}
                                    {errors.hours && errors.hours.type === "max" && (
                                        <span className="pt-2 pl-2 block" role="alert">Max. 3 Stunden</span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="" htmlFor="message">{message}:</label>
                                <motion.textarea
                                    initial={{ opacity: 0.2, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                    viewport={{ once: true }}
                                    className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                    placeholder="Nachricht (optional)"
                                    rows={2}
                                    id="message"
                                    {...register('message')}
                                ></motion.textarea>
                            </div>

                            <div className="space-y-2">
                                <motion.div
                                    initial={{ opacity: 0.2, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                    viewport={{ once: true }}
                                >
                                    <input
                                        {...register('dataProtection', { required: true })}
                                        name="dataProtection"
                                        id="dataProtection"
                                        type="checkbox"
                                    />
                                    <label htmlFor="dataProtection" className={"ml-2"}>
                                        Ich akzeptiere die <a href="/datenschutz" target="_blank">Datenschutzerklärung</a>
                                    </label>
                                    {errors.dataProtection && errors.dataProtection.type === "required" && (
                                        <span className={"block mb-2"} role="alert">Das ist ein Pflichtfeld.</span>
                                    )}
                                </motion.div>
                                <motion.div className={""}
                                    initial={{ opacity: 0.2, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: (0.3 * 1) } }}
                                    viewport={{ once: true }}
                                >
                                    <input
                                        {...register('newsletter',)}
                                        id="newsletter"
                                        name="newsletter"
                                        type="checkbox"
                                    />
                                    <label htmlFor="newsletter" className={"ml-2"}>
                                        Informiere mich über Sauna Angebote.
                                    </label>
                                </motion.div>
                            </div>
                            <div className={"text-right"}>
                                <GradientButton buttonText={buttonText} classNames={"px-5 py-2 text-xl"} delay={0} />
                            </div>
                        </form>
                    ) : (
                        <div className={"text-center"}>
                            <h3 className={"text-2xl py-4"}>{contactResponse.heading}</h3>
                            <p className={""}>{contactResponse.paragraph}</p>
                        </div>
                    )}
                </div>
            </div >

        </section >
    )
}

export default ContactForm;