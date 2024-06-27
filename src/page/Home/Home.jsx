import Banner from "../../components/home/Banner";
import Faq from "../../components/home/Faq";
import Gallery from "../../components/home/Gallery";
import History from "../../components/home/History";
import Offer from "../../components/home/Offer";
import OfferProducts from "../../components/home/OfferProducts";
import Testimonial from "../../components/home/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="text-center mt-[100px] mb-[20px] max-w-[1280] mx-auto px-[10px]">
                <h2 className="lg:text-[38px] text-[28px] text-[#404040] font-extrabold">WOODEN & JUTE CRAFTS</h2>
                <p className="text-[16px]">Choice your Wooden or Jute product.Every product is for yours.</p>
              
            </div>
            <OfferProducts />
            <Offer />
            <div className="text-center mt-[100px] mb-[30px] max-w-[1280] mx-auto px-[10px]">
                <h2 className="lg:text-[38px] text-[28px] text-[#404040] font-extrabold">WHICH TYPES OF PRODUCTS HERE?</h2>
                <p className="text-[16px]">In this site available just wooden & jute Products.</p>

            </div>
            <History />
            <div className="text-center mt-[100px] mb-[30px] max-w-[1280] mx-auto px-[10px]">
                <h2 className="lg:text-[38px] text-[28px] text-[#404040] font-extrabold">Gallery Section</h2>
                <p className="text-[16px]">Many craft pictures here...</p>
                <h2 className="text-2xl font-semibold sm:text-4xl"></h2>
                <p className="mt-4 mb-8 dark:text-gray-600"></p>

            </div>
            <Gallery />
            <div className="text-center mt-[100px] mb-[30px] max-w-[1280] mx-auto px-[10px]">
                <h2 className="lg:text-[38px] text-[28px] text-[#404040] font-extrabold">FREQUENTLY ASKED QUESTIONS</h2>
                <p className="text-[16px]">Here some questions and answer tak us so get your questions answer</p>
                <h2 className="text-2xl font-semibold sm:text-4xl"></h2>
                <p className="mt-4 mb-8 dark:text-gray-600"></p>

            </div>
            <Faq />
           
            <div className="text-center mt-[100px] mb-[30px] max-w-[1280] mx-auto px-[10px]">
                <h2 className="lg:text-[38px] text-[28px] text-[#404040] font-extrabold">TESTIMONIAL</h2>
                <p className="text-[16px]">In this section for our client gives us feedback .</p>
                <h2 className="text-2xl font-semibold sm:text-4xl"></h2>
                <p className="mt-4 mb-8 dark:text-gray-600"></p>

            </div>
            <Testimonial/>
           
           
            
        </div>
    );
};

export default Home;