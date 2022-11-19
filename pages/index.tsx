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
import FaqNew from "../components/faqNew";
import getPrices from "../components/getPrices";
import rightSection from "../components/rightSection";
import leftSection from "../components/leftSection";


export default function IndexPage() {
    return (
        <Layout>
            <HeroHeader2 />
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
                {FaqNew()}
                <Testimonials />
                {getPrices()}
                <ContactForm2 />

            </div>
        </Layout>
    )
}
