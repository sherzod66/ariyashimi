import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './productSlider.css'
// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

const ProductSlider = ({ data }) => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={1}
			breakpoints={{
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				1000: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 40,
				}
			}}
			speed={800}
			loop={true}
			pagination={{ el: ".swiper-pagination", clickable: true }}
			autoplay={{
				delay: 4000,
				stopOnLastSlide: true,
				disableOnInteraction: false
			}}
			modules={[Pagination, Autoplay]} className='swiper_product'>
			{data.length > 0 ? data.slice(0, 8).map(el => (
				<SwiperSlide key={el.id}>
					<Link to={`/fertilizers-product/${el.id}`}>
						<img src={el.imageUrl} alt="d" />
					</Link>
				</SwiperSlide>
			)) : ''}

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

export default ProductSlider
