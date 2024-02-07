import React, { useEffect, useState, } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux'
import { add } from './App/Shopping';
import Spinner from 'react-bootstrap/Spinner';

function Content() {
  let data=useDispatch();
  let handle=useParams();

  let[p,setp]=useState();
  
  let [con,setCon] = useState([]);
  let [img,setimg] = useState([]);
  let [load, setload] = useState(false);

  const Img=(ele)=>{
    setp(ele)
  }

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${handle.id}`)
            .then(function (response) {
                // handle success
                // console.log(response.data.products);
                setCon(response.data);
                setimg(response.data.images);
                setp(response.data.thumbnail);
                setload(true)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

  },[])
  return ( 
    <>

    {
      load?
      <>
      <Header></Header>
      <div className='item'>
        <Row>
          <Col className='align-items-center'>
            <div className='product_img'>
              <img src={p} className='w-100 h-100'></img>
            </div>
            <div className='imgs'>
            <ul className='d-flex m-0 p-0 justify-content-start'>
                {
                 img.map((ele)=>{
                    return(
                        <li className='ImgBtn'>
                           <img src={ele} className='w-100 h-100 ' onClick={()=>Img(ele)}/>
                        </li>
                    )
                 })   
                }
            </ul>
            </div> 
          </Col>
          <Col>
            <div className='cnt mt-4'>
              <h3 className='mb-0'>{con.description}</h3>
              <font>Visit the store</font>
              <div className='d-flex icons'>
                <font className="ps-1">{con.rating}</font>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarFullOutline /></i>
                <i><TiStarHalfOutline /></i>
              </div>
              <hr className='ms-0 mb-1'></hr>
              <div className='d-flex align-items-center'>
                <span className='price'><sup className='sup'>$</sup>{con.price}</span>
                <p className='ps-3 m-0 dis'>Discount: {con.discountPercentage}%</p>
              </div>
              <p>Inclusive of all taxes</p>
              <hr className='ms-0 mb-1'></hr>
              <div className='l_cnt'>
                <span className='span pe-2'>Product:</span><span>{con.title}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Category:</span><span>{con.category}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Brand:</span><span>{con.brand}</span>
              </div>
              <div className='l_cnt'>
                <span className='span pe-2'>Stock:</span><span>{con.stock}</span>
              </div>
              <div className='cart'>
                <button  onClick={() =>data(add(con))} className='add'>Add To Cart</button>
              </div>
            </div>
          </Col>
        </Row> 
      </div>
    </>
      :
      <div className='spinner'>
      <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
      </Spinner>
     </div>
    }
     
    </>
  )
}

export default Content;
