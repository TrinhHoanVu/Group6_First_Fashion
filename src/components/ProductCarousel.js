import React from 'react';
import Slider from 'react-slick';
import ProductItem from './ProductItem';
import './ProductCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselButtons.css';
// Mũi tên tùy chỉnh cho Slick
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-next`}

      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-prev`}

      onClick={onClick}
    />
  );
}

// Cài đặt cho Slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // Dưới 1024px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600, // Dưới 600px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480, // Dưới 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const ProductCarousel = ({ products, brand, clicked, onAdd }) => {
  const brandPath = `/brand/${brand.toLowerCase()}`;

  // Đảm bảo rằng 'products' là một mảng sản phẩm
  return (
    <div className="product-carousel">
      <h2 className={`brand-title ${clicked ? 'clicked' : ''}`}>{brand}</h2>

      <div className="products-container"></div>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} clicked={clicked} onAdd={() => onAdd(product)} />
        ))}
      </Slider>
      {/* <div className="see-all-container">
        <Link to={brandPath} className="see-all-link">See All</Link>
      </div> */}
    </div>
  );
};

export default ProductCarousel;
