import Router  from "next/router"
import MainLayout from "../../components/MainLayout";

const About = () => {

    const handlerClickLink = () => {
        Router.push("/");
    }

    return (
        <MainLayout title="About ...">
            About Page
            <p>
                <button onClick={handlerClickLink}>go back</button>
            </p>
        </MainLayout>
    )
}

export default About
