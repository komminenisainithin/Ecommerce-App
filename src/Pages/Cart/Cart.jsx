import React, { useEffect, useState } from 'react'
import './Cart.css';
import { Prev } from 'react-bootstrap/esm/PageItem';

export default function Cart() {
    const [total,setTotal]=useState(0);
    const [productsInCart, setproductsInCart] = useState([]);
    useEffect(()=>{
       
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setproductsInCart(cart);

        if(productsInCart&&productsInCart.length>0){
            productsInCart.map((product)=>{
                setTotal(Prev=>Prev+product.price)
            })
        }
    },[])

    const handleDelete = (index) => {
        const updatedCart = [...productsInCart];
        updatedCart.splice(index, 1); // remove 1 item at given index
        setproductsInCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // recalculate total
        let sum = 0;
        updatedCart.forEach(product => sum += product.price);
        setTotal(sum);
    };

    return (

        <div className='d-flex'>
            <div className='listOfProduts w-75 d-flex flex-column row-gap-3 py-3'>
                {
                    productsInCart && productsInCart.length > 0 && productsInCart.map((product,index) => {
                        return <div className='productInCart py-3'>
                            <img src={product.thumbnail} alt="" width={'250px'} />
                            <div className='productInCartDetils'>
                                <h1>{product.title}</h1>
                                <h6>Quantity 1</h6>
                                <p>{product.description}</p>

                                <button className='btn btn-danger btn-sm mt-2' onClick={()=>handleDelete(index)}>Delete Item</button>

                            </div>
                        </div>

                    })
                }

            </div>
            <div className='orderSummary w-25'>
                <h1>Order Summary</h1>
                <div className='productsInOrder ' >
                    {
                        productsInCart && productsInCart.length > 0 && productsInCart.map((product) => {
                            return <div className='d-flex'>
                                <img src={product.thumbnail} alt="" width={'150px'} />
                                <div className='productInCartDetils'>
                                    <h1>{product.title}</h1>
                                    <h6>Quantity 1</h6>
                                    <h6>price : ${product.price}</h6>

                                </div>
                            </div>

                        })
                    }
                    <h1>Total Price : $ {total}</h1>



                </div>
            </div>
        </div>
    )
}
