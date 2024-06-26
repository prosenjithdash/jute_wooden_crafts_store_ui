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
            <div className="text-center mt-[100px] mb-[20px] max-w-[1280] mx-auto px-[10px]">
                <h2 className="lg:text-[38px] text-[28px] text-[#404040] font-extrabold">Wooden & Jute Crafts</h2>
                <p className="text-[16px]">Choice your Wooden or Jute product.Every product is for yours.</p>
              
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