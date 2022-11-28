import { HeroHeaderText } from "../components/heroHeaderText";
import Layout from "../components/layout";

export default function Impressum() {
    return (
        <Layout title={"Impressum"}>
            <HeroHeaderText heading={"Impressum"} />
            <section id={"legal"} className={"text-left"}>
                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>Hilda Uffelmann<br />
                    Banja Os - Hilda Uffelmann<br />
                    Kleine Schulstr. 24a<br />
                    49078 Osnabr&uuml;ck</p>

                <h2>Kontakt</h2>
                <p>Telefon: 0541441806<br />
                    E-Mail: info@banja-os.de</p>

                <h2>Umsatzsteuer-ID</h2>
                <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
                    1234567890TODO</p>

                <h2>Redaktionell verantwortlich</h2>
                <p>Eduard Uffelmann</p>

                <h2>EU-Streitschlichtung</h2>
                <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                <p className={"hidden"}>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
            </section>
        </Layout>
    )
}