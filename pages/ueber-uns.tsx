import Layout from "../components/layout";
import { HeroHeaderText } from "../components/heroHeaderText";
import Gallery from "../components/gallery";

export default function UeberUnsPage() {
    return (
        <Layout title={"Über uns"}>
            <HeroHeaderText heading={"Über Uns"} />
            {/*<section className={"max-w-prose mx-auto text-justify"}>*/}
            <section className={"grid grid-cols-1 md:grid-cols-5 gap-4"}>
                <div className={"col-span-2"}>
                    <Gallery />
                </div>
                <div className={"col-span-3 max-w-prose mx-auto"}>
                    <h2 className={"text-left"}>Familienbetrieb seit 2002</h2>
                    <p className={""}>
                        Seit über 20 Jahren bieten wir unsere Sauna gewerblich für Liebhaber von Holzsaunen mit einem faible für Birkenriesig-Behandlungen an. Wir sind Familie Uffelmann aus Osnabrück. Wir haben keine Angestellten und bieten die Sauna komplett auf eigenen Beinen an.
                    </p>
                    <p className={""}>
                        Bei uns können Sie in Ruhe den Saunagang genießen, was besonders angenehm für Familien oder Freunde sind, die lieber eine ungestörte Zeit miteinander verbringen wollen.
                    </p>
                    <p className={""}>
                        Im Gegensatz zu den meisten Saunen, verfügen wir einen Holzofen, was ein besonderes uriges Gefühl verschafft.
                    </p>
                </div>

                {/*{getArticles()}*/}
                {/*<ContactForm2 />*/}
            </section>
        </Layout>
    )
}