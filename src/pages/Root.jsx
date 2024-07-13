import { Outlet } from "react-router-dom";
import ReactDom from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import NotiBanner from "../components/NotiBanner";
import axios from "axios";


const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || "[]");
const Root = () => {

    const [cart, setCart] = useState(cartFromLocalStorage);
    const [totalCart, setTotal] = useState(0);
    const [products, setProducts] = useState([]);
    const [sortedProduct, setSortedProduct] = useState(products);

    const getTotalCartPrice = () => {
        let sum = cart.reduce((sum, item) =>
            sum += (item.current_price * item.quantity), 0);
        setTotal(sum);
    }

   
    useEffect(()=> {
        getTotalCartPrice();
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    useEffect(()=> {
        axios.get("https://api.timbu.cloud/products?organization_id=bee68d4e8d4548a99e8ea7691639dfa0&reverse_sort=false&size=30&Appid=4125D7OZ0HVPQ8P&Apikey=8384d961337e4e548df90aa80a4ebe5f20240713064619234278")
            .then(res => {
                setProducts(res.data.items)
                setSortedProduct(res.data.items);
            })
            .catch(err => console.log(err))
    }, [])

    
    const bannerRef = useRef();

    const handleAddToCart = (item) => {
        let isPresent = false;
        cart.forEach((product, index) => {
            if ( product.id === item.id ) {
                 isPresent = true;
                 const newState = [...cart]
                 newState[index].quantity += 1;
                 setCart(newState);
            }
        })

        if (!isPresent) {
            setCart([...cart, {...item, current_price: item.current_price[0].USD[0], quantity: 1}])
        }
        
        bannerRef.current.classList.toggle('active');
        setTimeout(() => {
                bannerRef.current.classList.toggle('active');
        }, 1000);
     }

     const filter = (data) => {
        setSortedProduct(products.filter(item => item.name.toLowerCase().includes(data)));
     }
    return(
        <>
             {ReactDom.createPortal(
                <NotiBanner ref={bannerRef} title="Product added to cart successfully"/>, document.querySelector('#root')
            )}
            <Banner />
            <Outlet context={{products, cart, setCart, totalCart, setTotal, getTotalCartPrice, handleAddToCart, sortedProduct, filter}}/>
            <Footer />
        </>
    )
}

export default Root;