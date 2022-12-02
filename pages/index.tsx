import Layout from "../components/layout"
import Testimonials from "../components/testimonials";
import { HeroHeader } from "../components/heroHeader";
import ContactForm from "../components/contactForm";
import Faq from "../components/faq";
import rightSection from "../components/rightSection";
import leftSection from "../components/leftSection";
import Prices from "../components/getPrices";


export default function IndexPage() {
    return (
        <Layout title={"Osnabrücks Sauna"}>
            <HeroHeader />
            <div>
                {leftSection()}
                {rightSection()}
                {Faq()}
                <Testimonials />
                <Prices />
                <ContactForm />
            </div>
        </Layout>
    )
}
