import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Categories(props) {
    let cate=props.cate;

    
    return (
        <>
        <div className='Main_content'>
            <div className='left_side'>
                <h4 className='mb-2'>Categories</h4>
                <ul>
                    {
                        cate.map((ele, ind) => {
                            return ( 
                                <Link to={`/catagories/${ele}`} className='a'><li key={ind}>{ele}</li></Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Categories;
