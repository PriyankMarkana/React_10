
import { useState, useEffect } from 'react';
import Items from './Items';
import Header from './Header';
import axios from 'axios';
import { Routes, Route, Link, useParams } from "react-router-dom"



function Home(props) {

    let [data, setdata] = useState([]);
    let [temp, settemp] = useState([]);
    let [cate, setcate] = useState([]);
    let [ser, setser] = useState([]);
     let[toggle,settoggle]=useState("")
    let handle=useParams()

    useEffect(() => {
        axios.get('https://dummyjson.com/products/')
            .then(function (response) {
                // handle success
                // console.log(response.data.products);
                setdata(response.data.products);
                settemp(response.data.products); 

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                // handle success
                setcate(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    if(handle.cate!=undefined)
    {
        let tmp=temp.filter((ele)=>{
            return ele.category==handle.cate;
        })
        data=tmp;
    }else if(ser!=""){
        data=ser;
    }
    return (
        <>
            <Link className='a'>
                <Header data={data} temp={temp} serdata={setser} toggle={settoggle}></Header>
                <Items data={data} cate={cate}></Items>
            </Link>
        </>
    )
}

export default Home;
