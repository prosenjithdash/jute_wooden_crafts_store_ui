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
            className="mySwiper my-[10px] rounded-xl"
        >
            <SwiperSlide>
                <img className='w-full h-[550px]'
                    src="https://i.ibb.co/CvDJgLh/colored-minimalis-living-room-design-simple-fictional-sophisticated-product-design-furniture-design.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full h-[550px]'
                    src="https://i.ibb.co/0JGMjxp/maxresdefault.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full h-[550px]'
                    src="https://i.ibb.co/0BrXDCx/maxresdefault.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full h-[550px]'
                    src="https://i.ibb.co/C6PSVBn/handcrafted-wooden-decorative-vase-23-2151003070.jpg" alt="" />
            </SwiperSlide>
            
            
        </Swiper>
    );
};

export default Banner;