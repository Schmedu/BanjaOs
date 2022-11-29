import Layout from "../components/layout";
import { HeroHeaderText } from "../components/heroHeaderText";
import Gallery from "../components/gallery";
import Slider from "../components/slider";

export default function UeberUnsPage() {
    return (
        <Layout title={"Über uns"}>
            <HeroHeaderText heading={"Über Uns"} />
            {/*<section className={"max-w-prose mx-auto text-justify"}>*/}
            <section className={"flex flex-col-reverse lg:flex-none md:grid md:grid-cols-5 md:gap-4 md:items-center"}>
                <div className={"col-span-2"}>
                    {/*<Gallery />*/}
                    <Slider />
                </div>
                <div id={"ueber-uns"} className={"col-span-3 max-w-prose mx-auto"}>
                    <h2 className={"text-left"}>Familienbetrieb seit 2002</h2>
                    <p className={""}>
                        Seit über 20 Jahren bieten wir unsere Sauna gewerblich für Liebhaber von Holzsaunen mit einem Faible für die finnische Praxis des Birkenquasts an. Bei uns kann man mit seinen Liebsten das pure Saunaerlebnis haben ohne sich an ungeschriebene Regeln von öffentlichen Saunen halten zu müssen.
                    </p>
                    <br />
                    <h3 >Gezwungene Stille in der Sauna?</h3>
                    <p>
                        Sprich so viel oder so wenig mit deinen Liebsten wie du magst. Du kannst auch gerne deine Lieblingsmusik hören in unserer Sauna.
                    </p>
                    <br />
                    <h3 >Aufguss gibt's nur ein Mal in der Stunde?</h3>
                    <p>
                        Oder war's zu viel? Zu wenig? Nicht dein Lieblingsaroma? Nicht mit uns, du hast die volle Kontrolle.
                    </p>
                    <br />
                    <h3 >Hunger oder Durst?</h3>
                    <p>
                        Nimm mit was du brauchst und halt dich nicht zurück. Du kannst alle Getränke und Speisen deiner Wahl mitbringen.
                    </p>
                    <br />
                    <h3 >Familiensauna für Kinder nur zu bestimmten Zeiten?</h3>
                    <p>
                        Miete unsere Sauna wann immer es dir und deiner Familie am besten passt.
                    </p>
                    <br />
                    <h3 >Blicke von Fremden?</h3>
                    <p>
                        Du entscheidest mit wem du dir die Sauna teilst und kannst so eine entspannte Zeit ganz nach deinen Vorstellungen haben.
                    </p>
                    <br />
                    <p>
                        Schau gerne bei uns in der Sauna vorbei und überzeuge dich selbst. Wir freuen uns auf dich!
                    </p>
                </div>

            </section>
        </Layout>
    )
}