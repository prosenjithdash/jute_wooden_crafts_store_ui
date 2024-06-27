// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const Banner = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper my-[2px] z-50"
        >
            
            
{/* 
            <SwiperSlide>
                <img className='w-full h-[700px]'
                    src="https://i.ibb.co/rd6Yhhz/images-q-tbn-ANd9-Gc-R3q-A9-LP-VM9ch-JDn-Gj8-Grlu12io-XCIf-hr2-Q-s.jpg" alt="" />
            </SwiperSlide> */}

            <SwiperSlide>
                <img className='w-full lg:h-[700px] h-[350px]'
                    src="https://i.ibb.co/2WzB2C5/c2nj-DNM95n-Lxv-CYf8o4ngi.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full lg:h-[700px] h-[350px]'
                    src="https://i.ibb.co/CvDJgLh/colored-minimalis-living-room-design-simple-fictional-sophisticated-product-design-furniture-design.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full lg:h-[700px] h-[350px]'
                    src="https://i.ibb.co/0JGMjxp/maxresdefault.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full lg:h-[700px] h-[350px]'
                    src="https://i.ibb.co/0BrXDCx/maxresdefault.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full lg:h-[700px] h-[350px]'
                    src="https://i.ibb.co/C6PSVBn/handcrafted-wooden-decorative-vase-23-2151003070.jpg" alt="" />
            </SwiperSlide>
            
            
        </Swiper>
    );
};

export default Banner;