import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Categories from './Categories';

function Items(props) {
    let cate = props.cate;
    let data,ser
    ser=props.ser;
    data=props.data;

    return (
        <div className='Main_content'>
            <Row>
                <Col lg={3} className='p-0'>
                    <Categories cate={cate}></Categories>
                </Col>
                <Col className='p-0'>
                    {
                        data.map((ele, ind) => {
                            return (
                                <Link to={`/product/${ele.id}`} className='a'>
                                    <div className='box d-flex align-items-center'>
                                        <div className='img'>
                                            <img src={ele.thumbnail} className='w-100 h-100'></img>
                                        </div>
                                        <div className='content p-3'>
                                            <h4>{ele.title}</h4>
                                            <div className='d-flex'>
                                                <div className='d-flex icons'>
                                                    <i><TiStarFullOutline /></i>
                                                    <i><TiStarFullOutline /></i>
                                                    <i><TiStarFullOutline /></i>
                                                    <i><TiStarFullOutline /></i>
                                                    <i><TiStarHalfOutline /></i>
                                                </div>
                                                <font className="ps-1">{ele.rating}</font>
                                            </div>
                                            <span className='price'><sup className='sup'>$</sup>{ele.price}</span>
                                            <p className='m-0 dis'>Discount: {ele.discountPercentage}%</p>
                                            <p style={{ color: "#F3A847", fontSize: "16px" }}>FREE delivery</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Items;
