import { Helmet } from "react-helmet-async";
import About from "../../About/About";
import Faq from "../../FAQ/Faq";
import NewsLetter from "../../Newsletter/NewsLetter";

import Banner from "../banner/Banner";
// import Contact from "../../Contact/Contact";


const Home = () => {
   
    return (
        <div>
            <Helmet>
                <title>CircuitFlow | Home</title>
            </Helmet>
            <Banner></Banner>
            {/* <Contact></Contact> */}
            <Faq></Faq>
            <NewsLetter></NewsLetter>
            <About></About>
        </div>
    );
};

export default Home;