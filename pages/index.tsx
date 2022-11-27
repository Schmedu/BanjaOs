import Layout from "../components/layout"
import Testimonials from "../components/testimonials";
import { HeroHeader } from "../components/heroHeader";
import ContactForm from "../components/contactForm";
import Faq from "../components/faq";
import getPrices from "../components/getPrices";
import rightSection from "../components/rightSection";
import leftSection from "../components/leftSection";
import PriceContactForm from "../components/getPriceContactForm";
import MultiStepContactForm from "../components/multiStepContactForm";


export default function IndexPage() {
    return (
        <Layout title={"Osnabrücks Sauna"}>
            <HeroHeader />
            <div>
                {/*<Slider />*/}
                {/*<Testimonials />*/}
                {/*<Faq />*/}
                {/*<ContactForm />*/}
                {/*<RegisterForm />*/}

                {/*{getNavigation()}*/}

                {/*New*/}
                {/*{getHero()}*/}
                {leftSection()}
                {rightSection()}
                {Faq()}
                <Testimonials />
                {getPrices()}
                <ContactForm />
                {/*<PriceContactForm />*/}
                {/*<MultiStepContactForm />*/}

            </div>
        </Layout>
    )
}
