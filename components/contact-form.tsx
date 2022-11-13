import React from "react";
import { useForm } from "react-hook-form";


const buttonText = "Buchung Senden";
const message = "Nachricht";
const phoneNumber = "Telefon";
const phoneLabel = "Telefon";
const emailPlaceholder = "Email";

const nameLabel = <>Name</>;
const namePlaceholder = "Name";

const times = Array.from({ length: 12 }, (_, i) => {
    const hour = 10 + i;
    return [`${hour}:00`, `${hour}:30`];
}).flat();
console.log(times);

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => console.log(data);

    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            At the same time, the fact that we are wholly owned and totally
                            independent from manufacturer and other group control gives you
                            confidence that we will only recommend what is right for you.
                        </p>

                        <div className="mt-8">
                            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                <a href="tel:+49541441806" className="text-2xl font-bold text-primary">
                                    0541 441806
                                </a>
                            </button>
                            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                <address className="mt-2 not-italic text-black">
                                    <a href="https://www.google.com/maps/dir//Banja+OS,+Kleine+Schulstra%C3%9Fe,+Osnabr%C3%BCck/@52.2583174,7.9210062,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b9e94b802c3863:0xe8b1d692e333080e!2m2!1d7.9910457!2d52.2583381">
                                        Kleine Schulstr. 24a, 49078 Osnabrück
                                    </a>
                                </address>
                            </button>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">{nameLabel}</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                    placeholder={namePlaceholder}
                                    type="text"
                                    id="name"
                                    {...register('name')}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder={emailPlaceholder}
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">{phoneLabel}</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder={phoneNumber}
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="date">Datum</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
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
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder="Uhrzeit"
                                        id="time"
                                        list='times'
                                        type={'time'}
                                        {...register('time', {
                                            required: true,
                                            validate: value => times.includes(value)
                                        })}
                                    />
                                    {errors.time && errors.time.type === "required" && (
                                        <span role="alert">Das ist ein Pflichtfeld.</span>
                                    )}
                                    {errors.time && errors.time.type === "validate" && (
                                        <span role="alert">Falsche Uhrzeit</span>
                                    )}
                                    {errors.time && errors.time.type === "maxLength" && (
                                        <span role="alert">Max length exceeded</span>
                                    )}

                                    <datalist id="times">
                                        {times.map((time) => (
                                            <option key={time} value={time} />
                                        ))}
                                    </datalist>
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="persons"></label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
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
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
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
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                    placeholder="Nachricht (optional)"
                                    rows={8}
                                    id="message"
                                    {...register('message')}
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                >
                                    <span className="font-medium"> {buttonText} </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-3 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;