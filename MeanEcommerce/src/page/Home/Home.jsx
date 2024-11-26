import React from "react";
import Header from "../../components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Import your images
import slide1 from "/assets/images/slide-01.jpg";
import slide2 from "/assets/images/slide-02.jpg";
import slide3 from "/assets/images/slide-03.jpg";

import banner1 from "../../../src/assets/images/banner-01.jpg";
import Productcard from "../../components/ProductcardSec";

export default function Home() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Header />
      <section className="section-slide">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div
            className="item-slick1"
            style={{
              backgroundImage: `url(${slide1})`,
            }}
          >
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  className="layer-slick1 animated"
                  dataAppear="fadeInDown"
                  dataDelay="0"
                >
                  <span className="ltext-101 cl2 respon2">
                    Women Collection 2018
                  </span>
                </div>
                <div
                  className="layer-slick1 animated"
                  dataAppear="fadeInUp"
                  dataDelay="800"
                >
                  <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                    NEW SEASON
                  </h2>
                </div>
                <div
                  className="layer-slick1 animated"
                  dataAppear="zoomIn"
                  dataDelay="1600"
                >
                  <a
                    href="product.html"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="item-slick1"
            style={{
              backgroundImage: `url(${slide2})`,
            }}
          >
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  className="layer-slick1 animated"
                  dataAppear="fadeInDown"
                  dataDelay="0"
                >
                  <span className="ltext-101 cl2 respon2">
                    Men Collection 2018
                  </span>
                </div>
                <div
                  className="layer-slick1 animated"
                  dataAppear="fadeInUp"
                  dataDelay="800"
                >
                  <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                    Jackets & Coats
                  </h2>
                </div>
                <div
                  className="layer-slick1 animated"
                  dataAppear="zoomIn"
                  dataDelay="1600"
                >
                  <a
                    href="product.html"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="item-slick1"
            style={{
              backgroundImage: `url(${slide3})`,
            }}
          >
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  className="layer-slick1 animated"
                  dataAppear="fadeInDown"
                  dataDelay="0"
                >
                  <span className="ltext-101 cl2 respon2">
                    Men Collection 2023
                  </span>
                </div>
                <div
                  className="layer-slick1 animated"
                  dataAppear="fadeInUp"
                  dataDelay="800"
                >
                  <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                    New Arrivals
                  </h2>
                </div>
                <div
                  className="layer-slick1 animated"
                  dataAppear="zoomIn"
                  dataDelay="1600"
                >
                  <a
                    href="product.html"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* <!-- Banner -->? */}
      <div className="sec-banner bg0 p-t-80 p-b-50">
        <div className="max-w-screen-xl m-auto">
          <div className="row">
            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* <!-- Block1 --> */}
              <div className="block1 wrap-pic-w">
                <img src={banner1} alt="IMG-BANNER" />

                <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Women
                    </span>

                    <span className="block1-info stext-102 trans-04">
                      Spring 2018
                    </span>
                  </div>

                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* <!-- Block1 --> */}
              <div className="block1 wrap-pic-w">
                <img src="../../../src/assets/images/banner-02.jpg" alt="IMG-BANNER" />

                <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Men
                    </span>

                    <span className="block1-info stext-102 trans-04">
                      Spring 2018
                    </span>
                  </div>

                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* <!-- Block1 --> */}
              <div className="block1 wrap-pic-w">
                <img src="../../../src/assets/images/banner-03.jpg" alt="IMG-BANNER" />

                <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Accessories
                    </span>

                    <span className="block1-info stext-102 trans-04">
                      New Trend
                    </span>
                  </div>

                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Productcard/>
    </div>
  );
}
