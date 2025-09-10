import React from 'react'
import './Home.css'
import Carousel from '../../Components/Carousel/Carousel'
import CategoryCard from '../../Components/CategoryCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from '../../Components/ProductCard'

export default function Home() {

  const [storeProducts, setStoreProducts] = useState([])
  useEffect(() => {
    feachApi();
  }, [])
  const feachApi = async () => {
    const responce = await axios.get('https://dummyjson.com/products');
    console.log(responce.data.products);
    setStoreProducts(responce.data.products);
  }

  return (
    <div>
      <Carousel />
      <div>
        <h1>Categories</h1>
        <div className='d-flex justify-content-start column-gap-3 mx-auto'>
          <CategoryCard fileName={'food.png'} categoryName={'Food'}/>
          <CategoryCard fileName={'Clothes.png'} categoryName={'Clothes'}/>
          <CategoryCard fileName={'furniture.png'} categoryName={'Furniture'}/>
          <CategoryCard fileName={'kitchen.png'} categoryName={'Kitchen Appliances'}/>
         
        </div>
      </div>
      <div>
        <h1>Products</h1>
        <div className='d-flex justify-content-start gap-3 flex-wrap'>
          {storeProducts && storeProducts.length > 1 && storeProducts.map(product => {
            return <Product product={product} />
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

    </div>

  )
}
