import Layout from "../components/layout";
import { HeroHeaderText } from "../components/hero-header-text";
import Gallery from "../components/gallery";
import Slider from "../components/slider";
import ContactForm2 from "../components/contact-form2";

export default function UeberUnsPage() {
    return (
        <Layout>
            <HeroHeaderText heading={"Über Uns"} />
            {/*<section className={"max-w-prose mx-auto text-justify"}>*/}
            <section className={"max-w-prose mx-auto"}>
                <h2>Familienbetrieb seit 2002</h2>
                <p className={""}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur. Duo Reges: constructio interrete. Rapior illuc, revocat autem Antiochus, nec est praeterea, quem audiamus. Tum Triarius: Posthac quidem, inquit, audacius. Quam tu ponis in verbis, ego positam in re putabam.
                </p>
                <p className={""}>
                    Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus; Summus dolor plures dies manere non potest? Sed ego in hoc resisto; Nihil opus est exemplis hoc facere longius.
                </p>
            </section>
            {/*{getArticles()}*/}
            <Gallery />
            {/*<ContactForm2 />*/}
        </Layout>
    )
}