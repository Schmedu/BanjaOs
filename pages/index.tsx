import Layout from "../components/layout"
import Faq from "../components/faq";
import ContactForm from "../components/contact-form";
import HeroHeader from "../components/hero-header";
import Gallery from "../components/gallery";
import Slider from "../components/slider";
import Testimonials from "../components/testimonials";
import { HeroHeader2 } from "../components/hero-header2";
import RegisterForm from "../components/form";
import ContactForm2 from "../components/contact-form2";
import { FaqNew, getHero, getNavigation, getPrices, leftSection, rightSection } from "./bloggo";


export default function IndexPage() {
    return (
        <Layout maxWidth={true}>
            <HeroHeader2 />
            <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 lg:pt-24">
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
                {FaqNew()}
                <Testimonials />
                {getPrices()}
                <ContactForm2 />

            </div>
        </Layout>
    )
}
