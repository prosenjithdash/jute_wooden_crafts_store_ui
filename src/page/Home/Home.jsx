import Banner from "../../components/home/Banner";
import Faq from "../../components/home/Faq";
import History from "../../components/home/History";
import Offer from "../../components/home/Offer";
import OfferProducts from "../../components/home/OfferProducts";
import Testimonial from "../../components/home/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="text-center mt-[100px] mb-[20px]">
                <h2 className="text-[38px] text-black font-bold">OFFER PRODUCTS</h2>
                <p>Choice your offer product.Those product is unique.</p>
              
            </div>
            <OfferProducts />
            <Offer />
            <History/>
            <Faq />
            <Testimonial/>
           
           
            
        </div>
    );
};

export default Home;