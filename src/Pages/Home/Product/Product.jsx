import { useEffect, useState } from 'react';
import './Product.css'
import ProductCarousel from '../../../Components/ProductCarousel/ProductCarousel';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Product() {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        feachProduct();
    }, [])
    const feachProduct = async () => {
        if (id) {
            const product = await axios.get('https://dummyjson.com/products/' + id);
            setProduct(product.data);
        }
    }

    return (
        <>
            <div className='productPage d-flex'>
                <div className='productImageDiv halfDiv d-flex justify-content-center align-items-center'>
                    <ProductCarousel images={product.images} />
                </div>
                <div className='productInfoDiv halfDiv d-flex align-items-start'>
                    <div className=' d-flex flex-column row-gap-3 p-5'>
                        <h1>{product.title}</h1>
                        <h3>Price ${product.price}</h3>
                        <h5>{product.category}</h5>
                        <p>{product.description}</p>
                        <button className='btn btn-primary btn-sm w-25' onClick={() => {
                            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
                            existingCart.push(product);
                            localStorage.setItem("cart", JSON.stringify(existingCart));

                            alert("Product added to cart!");
                        }}>
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </>

    )
}
export default Product;