import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from './images/logo.png'
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Header(props) {
    let [sdata,setsdata]=useState([]);
    useEffect(()=>{

        setsdata(props.temp)
    })
    let [s,sets]=useState('');
    const ser=()=>{
        {
            setsdata(props.temp);
            let newarr=sdata.filter((ele)=>{
            return ele.title.toLowerCase().includes(s.toLowerCase())
        })
        props.serdata(newarr);
        props.toggle("ser")
    }

}

const all=()=>{
    let tmp=props.temp;
    props.serdata(tmp);
    props.toggle("ser")

}
    return (
        <nav>
            <Row className='align-items-center'>
                <Col lg={3} >
                    <div className='img'>
                        <img src={logo}></img>
                    </div>
                </Col>
                <Col className='text-center' lg={6}>
                    <div className='d-flex justify-content-center align-items-center ser'>
                        <Dropdown className='drop_main'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={all}>
                                All
                            </Dropdown.Toggle>
                        </Dropdown>
                       
                        <Link to="/"> 
                            <input type='text' placeholder='Search Amazon.in' onChange={(e)=>sets(e.target.value)}></input>
                            <button onClick={ser}><i><BsSearch /></i></button>     
                        </Link>
                        
                    </div>
                </Col>
                <Col className='text-end' lg={3}>
                    <div className='cart'>
                        <i><FaShoppingCart /></i>
                    </div>
                </Col>
            </Row>
        </nav>
    )
}
export default Header;
