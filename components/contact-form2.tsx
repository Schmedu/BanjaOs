import React from "react";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';


const buttonText = "Senden";
const message = "Nachricht";
const phoneNumber = "Telefon";
const phoneLabel = "Telefon";
const emailPlaceholder = "Email";

const nameLabel = <>Name</>;
const namePlaceholder = "Name";

// const times = Array.from({ length: 12 }, (_, i) => {
//     const hour = 10 + i;
//     return [`${hour}:00`, `${hour}:30`];
// }).flat();
// console.log(times);

const ContactForm2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => console.log(data);

    return (
        <section className="">
            <h2 className="mt-0 mb-5 text-4xl font-medium tracking-wide text-center">
                Termin buchen
            </h2>
            <div className="mx-auto md:w-7/12">
                <div className="rounded-lg bg-br-l-blush-light dark:bg-br-black-400 dark:border-none dark:border-none p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                        <div>
                            <label className="sr-only" htmlFor="name">{nameLabel}</label>
                            <input
                                className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                placeholder={namePlaceholder}
                                type="text"
                                id="name"
                                {...register('name', { required: true })}
                            />
                            {errors.name && <span >Das ist ein Pflichtfeld.</span>}
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                    placeholder={emailPlaceholder}
                                    type="email"
                                    id="email"
                                    {...register('email', {
                                        required: true,
                                    })}
                                    {...register('email', {
                                        required: true,
                                    })}

                                />
                                {errors.email && <span >Das ist ein Pflichtfeld.</span>}
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="phone">{phoneLabel}</label>
                                <input
                                    className="w-full rounded-lg p-3 text-sm border dark:border-none"
                                    placeholder={phoneNumber}
                                    type="tel"
                                    id="phone"
                                    {...register('phone', {
                                        required: true,
                                    })}

                                />
                                {errors.phone && errors.phone.type === "required" && (
                                    <span role="alert" >Das ist ein Pflichtfeld.</span>
                                )}
                                {errors.phone && errors.phone.type === "validate" && (
                                    <span role="alert" >Es muss sich um eine valide Telefonnummer handeln.</span>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="date">Datum</label>
                                <input
                                    className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                    placeholder="Datum"
                                    type="date"
                                    id="datet"
                                    min={Date.now()}
                                    {...register('date', {
                                        required: true,
                                        validate: (value) => {
                                            // check if date is bigger equals than today
                                            const today = new Date();
                                            const date = new Date(value);
                                            return date >= today;
                                        }
                                    })}
                                />
                                {errors.date && errors.date.type === "required" && (
                                    <span role="alert">Das ist ein Pflichtfeld.</span>
                                )}
                                {errors.date && errors.date.type === "validate" && (
                                    <span role="alert">Das Datum muss heute oder in der Zukunft liegen.</span>
                                )}

                            </div>
                            <div>
                                <label className="sr-only" htmlFor="time"></label>
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
                                {errors.time && errors.time.type === "required" && (
                                    <span role="alert">Das ist ein Pflichtfeld.</span>
                                )}
                                {errors.time && errors.time.type === "validate" && (
                                    <span role="alert">Inkorrekte Uhrzeit</span>
                                )}
                                {errors.time && errors.time.type === "maxLength" && (
                                    <span role="alert">Max length exceeded</span>
                                )}

                                {/*<datalist id="times">*/}
                                {/*    {times.map((time) => (*/}
                                {/*        <option key={time} value={time} />*/}
                                {/*    ))}*/}
                                {/*</datalist>*/}
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="persons"></label>
                                <input
                                    className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                    placeholder="Anzahl Personen"
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
                                    <span role="alert">Das ist ein Pflichtfeld.</span>
                                )}
                                {errors.persons && errors.persons.type === "min" && (
                                    <span role="alert">Min. 1 Person</span>
                                )}
                                {errors.persons && errors.persons.type === "max" && (
                                    <span role="alert">Max. 6 Person</span>
                                )}
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="hour">"Stunden"</label>
                                <input
                                    className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                    placeholder="Stunden"
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
                                    <span role="alert">Das ist ein Pflichtfeld.</span>
                                )}
                                {errors.hours && errors.hours.type === "validate" && (
                                    <span role="alert">Falsche Uhrzeit</span>
                                )}
                                {errors.hours && errors.hours.type === "min" && (
                                    <span role="alert">Min. 1 Stunde</span>
                                )}
                                {errors.hours && errors.hours.type === "max" && (
                                    <span role="alert">Max. 3 Stunden</span>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="message">{message}</label>
                            <textarea
                                className="w-full rounded-lg p-3 text-sm border  dark:border-none"
                                placeholder="Nachricht (optional)"
                                rows={2}
                                id="message"
                                {...register('message')}
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <input
                                    {...register('dataProtection', { required: true })}
                                    name="dataProtection"
                                    type="checkbox"
                                />
                                <label htmlFor="dataProtection" className={"ml-2"}>
                                    Ich akzeptiere die <a href="/datenschutz" target="_blank">Datenschutzerklärung</a>
                                </label>
                                {errors.dataProtection && errors.dataProtection.type === "required" && (
                                    <span className={"block mb-2"} role="alert">Das ist ein Pflichtfeld.</span>
                                )}
                            </div>
                            <div className={""}>
                                <input
                                    {...register('newsletter',)}
                                    name="newsletter"
                                    type="checkbox"
                                />
                                <label htmlFor="newsletter" className={"ml-2"}>
                                    Informiere mich über Sauna Angebote.
                                </label>
                            </div>
                        </div>
                        <div className={"text-right"}>
                            <motion.button
                                type="submit"
                                //className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                className="px-5 py-2 text-xl rounded-lg bg-br-orange text-br-l-blush"
                                whileHover={{
                                    scale: [1.1, 1.15, 1.1],
                                    // transition: { duration: 0.5 },
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 17, repeat: Infinity, repeatDelay: 1 }}
                                whileTap={{ scale: 1.0 }}
                            >
                                <span className="font-medium"> {buttonText} </span>

                                {/*<svg*/}
                                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                {/*    className="ml-3 h-5 w-5"*/}
                                {/*    fill="none"*/}
                                {/*    viewBox="0 0 24 24"*/}
                                {/*    stroke="currentColor"*/}
                                {/*>*/}
                                {/*    <path*/}
                                {/*        stroke-linecap="round"*/}
                                {/*        stroke-linejoin="round"*/}
                                {/*        stroke-width="2"*/}
                                {/*        d="M14 5l7 7m0 0l-7 7m7-7H3"*/}
                                {/*    />*/}
                                {/*</svg>*/}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm2;