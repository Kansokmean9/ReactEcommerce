import React from 'react'
import { Link } from 'react-router-dom';

export default function Cardpro({product= []}) {
    return (
        <div>
            <div className="row isotope-grid">

                {
                    product.map((producta) => {
                        console.log(producta, 'product');
                        const { id, title, price, description, category, image } = producta;

                        return (
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women ">
                                {/* <!-- Block2 --> */}
                                <div className="block2 h-75 hover:shadow-md">
                                    <div className="block2-pic hov-img0 h-full">
                                        <img src={image} alt="IMG-PRODUCT" className='object-contain object-center w-full h-full block'/>
                                        <Link to={`/detail/${id}`} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                {title}
                                            </a>

                                            <span className="stext-105 cl3 h1">
                                                ${price}
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
