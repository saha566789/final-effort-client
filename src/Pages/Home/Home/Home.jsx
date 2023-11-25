import About from "../../About/About";
import Faq from "../../FAQ/Faq";
import NewsLetter from "../../Newsletter/NewsLetter";
import Category from "../Category/Category";
import Banner from "../banner/Banner";


const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Faq></Faq>
            <NewsLetter></NewsLetter>
            <About></About>
        </div>
    );
};

export default Home;