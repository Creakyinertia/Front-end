import { useSelector,useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Shopping_products from './Api' 
import { addToCart } from '../Redux/actions'
import { useState } from 'react'
import { getAllProducts } from '../Redux/ProductsSlice'
import { fetchProducts } from '../Redux/ProductsSlice'

const Home=()=>{
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    const dispatch=useDispatch()
    const products=useSelector(state=>state.products.items)
    console.log(products)
    // const products = Shopping_products
    const [total,settotal]=useState(0)
    // console.log(products)
    
    const handleAddToCart =(id) => {
        console.log(products[id-1])
        dispatch(addToCart(products[id-1]))
        settotal(products[id-1].price+total)
    }
  
  return (
    <>
    <Link to={{pathname:'/Checkout',
    state:{totally: total}}} totalp="total"><button className='checkout' >Checkout</button></Link>
  

    <div className='products-container'>
        {   
            products?.map((product,index)=>{
                return(
                    <div className='product-card' key={index}>
                        <img src={product.image}/>
                        <div className='info'>
                        <div className='title'>{product.title} </div>
                        <div className='price'>{product.price} $ </div>
                        </div>
                        <p className='desc'>{product.description} </p>
                        <button onClick={()=>handleAddToCart(product.id)}>Add</button>
                    </div>
                )})
        }
        
    </div>

    </>
  )
}

export default Home

