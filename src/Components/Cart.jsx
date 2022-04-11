import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'

function Cart() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        var products = JSON.parse(window.localStorage.getItem("products"))
        if (!products)
        {
            products = []
        }
        setCount(products.length)

    },[])

    return (
        <>
        <Button variant="" className="navText m-2">Basket <b>{ count }</b></Button>
        </>
    )
}

export default Cart;
