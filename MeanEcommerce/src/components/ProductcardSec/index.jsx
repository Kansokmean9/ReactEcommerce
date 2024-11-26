import React, { useEffect, useState } from 'react'
import Cardpro from '../CardPro'
import Category from '../Category/Category'

export default function Productcard() {
	const [products, setProducts] = useState([])
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch('https://fakestoreapi.com/products')
			const data = await response.json()
			console.log(data);
			setProducts(data)
		}
		fetchProducts()
	}, [])
	const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategorys = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            console.log(data);
            setCategories(data)
        }
        fetchCategorys()
    }, [])
	return (
		<div>
			<section className="bg0 p-t-23 p-b-140">
				<div className="max-w-screen-xl m-auto">
					<div className="p-b-10">
						<h3 className="ltext-103 cl5">
							Product Overview
						</h3>
					</div>

					<div className="flex-w flex-sb-m p-b-52">
						<div className="flex-w flex-l-m filter-tope-group m-tb-10">
							<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
								All Products
							</button>
							
							<Category card={categories}></Category>

						</div>

						<div className="flex-w flex-c-m m-tb-10">
							<div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
								<i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
								<i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
								Filter
							</div>

							<div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
								<i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
								<i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
								Search
							</div>
						</div>

						
					</div>


					{
						products.length > 0 ?
							<Cardpro product={products} />
							:
							<div className='text-center text-6xl'>laoding...</div>

					}

					{/* <!-- Load more --> */}
					<div className="flex-c-m flex-w w-full p-t-45">
						<a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
							Load More
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}
