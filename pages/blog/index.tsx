import Layout from "../../components/layout";
import { HeroHeaderText } from "../../components/hero-header-text";
import { getArticles } from "../bloggo";

export default function BlogIndexPage() {
    return (
        <Layout>
            <HeroHeaderText heading={"Blog"} />
            <h1>Zur Zeit noch im Aufbau!</h1>
            {/*{getArticles()}*/}
        </Layout>
    )
}