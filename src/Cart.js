import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import cart from "./images/cart.png"
import { increment, decrement,remove } from './App/Shopping';


function Cart() {
    let val = useSelector((state) => state.cart.value)
    let price = useSelector((state) => state.cart.price)
    let amt = useSelector((state) => state.cart.amt)
    let tdis = useSelector((state) => state.cart.tdis)
    tdis=tdis.toFixed(2)
    amt=amt.toFixed(2)


    let dispatch = useDispatch();
    return (

        <>
            <Header></Header>
            <div className='d-flex justify-content-between'>
                <div className='cart_box'>
                    <h3 className='mb-3'>Shopping Cart</h3>
                    <hr className='m-0'></hr>
                    {
                        val.map((ele, ind) => {
                            return (
                                <div className='d-flex  justify-content-between'>
                                    <div className='img_box me-4'>
                                        <img src={ele.thumbnail} className='h-100 w-100 object-fit-contain'></img>
                                    </div>
                                    <div className='content mt-3'>
                                        <p className='m-0' style={{ fontSize: "26px" }}>{ele.description}</p>
                                        <p className='m-0' style={{ fontWeight: "600", fontSize: "20px" }}><span>Price:</span> ${ele.price}<span className='ps-2' style={{ fontSize: "15px", color: "#067D62" }}>{ele.discountPercentage}% Off</span></p>
                                        <span style={{ color: "#067D62", fontSize: "15px" }}>In Stock</span><br></br>
                                        <span style={{ fontSize: "15px" }}>Eligible for FREE Shipping</span><br></br>
                                        <img src={cart} className='img'></img>
                                        <div className='l_cnt'>
                                            <span className='span pe-2' style={{ fontWeight: "600" }}>Product:</span><span>{ele.title}</span>
                                        </div>
                                        <div className='l_cnt'>
                                            <span className='span pe-2' style={{ fontWeight: "600" }}>Category:</span><span>{ele.category}</span>
                                        </div>
                                        <div className='l_cnt'>
                                            <span className='span pe-2' style={{ fontWeight: "600" }}>Brand:</span><span>{ele.brand}</span>
                                        </div>
                                        <div className='l_cnt'>
                                            <span className='span pe-2' style={{ fontWeight: "600" }}>Stock:</span><span>{ele.stock}</span>
                                        </div>
                                        <div className='mt-4 d-flex Qty_box'>
                                            <div className='Qty me-5'>
                                                <button onClick={() => dispatch(decrement({ ele, ind }))}>-</button>
                                                <button className='mx-1'>Qty:{ele.qty}</button>
                                                <button onClick={() => dispatch(increment({ ele, ind }))}>+</button>
                                            </div>
                                            <button style={{ fontSize: "17px" }} onClick={() => dispatch(remove({ ele}))}>Remove</button>
                                        </div>
                                        <hr></hr>
                                    </div>
                                    <div className="product_price p-4" style={{fontSize:"20px"}}>
                                        <p className='m-0'style={{ fontWeight: '600', color: '#888787' }}>Price ({ele.qty} Items)</p>
                                        <p className='m-0'>${ele.tprice}</p>     
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='price_detail mt-4'>
                    <p className='m-0 pb-2' style={{ fontWeight: '600', color: '#888787',fontSize:"22px" }}>PRICE DETAILS</p>
                    <hr className='mt-0'></hr>
                    <div className='d-flex justify-content-between mb-2' style={{ fontSize: "18px" }}>
                        <p className='m-0'>Price</p>
                        <p className='m-0'>${price}</p>
                    </div>
                    <div className='d-flex justify-content-between mb-2' style={{ fontSize: "18px" }}>
                        <p className='m-0'>Discount</p>
                        <p className='m-0' style={{ color: "#067D62" }}>-${tdis}</p>
                    </div>
                    <div className='d-flex justify-content-between mb-2' style={{ fontSize: "18px" }}>
                        <p className='m-0'>Delivery Charges</p>
                        <p className='m-0'><span style={{textDecoration:"line-through"}}className='me-2'>$0.5</span><span style={{ color: "#067D62" }}>Free</span></p>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between mb-2' style={{ fontSize: "18px",fontWeight:"600"}}>
                        <p className='m-0'>Total Amount</p>
                        <p className='m-0'>${amt}</p>
                    </div>
                    <hr></hr>
                    <p style={{fontSize:"18px",fontWeight:"600",color:"#067D62"}}>You will save ${tdis} on this order</p>
                </div>

        </>
    )
}

export default Cart;




