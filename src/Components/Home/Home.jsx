import React, { Component } from 'react'
import ava from "../Home/avataaars.svg"
export default class Home extends Component {
render() {
    return (<>
    <header id='header' className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className='col-sm-12'>
                            <div className='text-center my-5 w-75 mx-auto'>
                                <img src={ava} className="w-25" alt=" avaImage"/>
                                <h1>START REACT</h1>
                                <div className='d-flex justify-content-center align-items-center gap-3 my-2'>
                                    <div className='line bg-light'></div>
                                    <div className='text-light fa-2x'><i className="fa-solid fa-star"></i></div>
                                    <div className='line bg-light'></div>
                                </div>
                                <p className='fs-3 text-light my-3'>Graphic Artist - Web Designer - Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>    
    </>
    )
}
}
