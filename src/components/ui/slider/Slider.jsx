import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './slider.css'
// Import Swiper styles
import 'swiper/css';

const Slider = () => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={1}
			speed={800}
			loop={true}
			pagination={{ el: ".swiper-pagination", clickable: true }}
			autoplay={{
				delay: 8000,
				stopOnLastSlide: true,
				disableOnInteraction: false
			}}
			modules={[Pagination, Autoplay]}>
			<SwiperSlide><img src="https://www.ariashimi.ir/templates/yootheme/cache/slide-12-223b8171.jpeg" alt="" /></SwiperSlide>
			<SwiperSlide><img src="https://www.ariashimi.ir/templates/yootheme/cache/slide-10-bb398eec.jpeg" alt="" /></SwiperSlide>
			<div className="slider-controler">
				<div className="swiper-button-prev slider-arrow">
					<ion-icon name="arrow-back-outline"></ion-icon>
				</div>
				<div className="swiper-button-next slider-arrow">
					<ion-icon name="arrow-forward-outline"></ion-icon>
				</div>
				<div className="swiper-pagination">
				</div>
			</div>
		</Swiper>

	);
};

export default Slider
