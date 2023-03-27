import React, { Component } from 'react'
import logo1 from  "../img/cabin.png"
import logo2 from '../img/cake.png'
import logo3 from '../img/circus.png'
import logo4 from '../img/game.png'
import logo5 from '../img/safe.png'
import logo6 from '../img/submarine.png'

export default class Portfolio extends Component {
  render() {
    return <>
    <section  id="portfolio" className='py-5'>
                <div className="container">
                    <div>
                        <h2 className=' fa-4x fw-bolder text-center'>PORTFOLIO</h2>
                        <div className=' d-flex justify-content-center align-items-center gap-3 my-2'>
                                    <div className='line bg-dark'></div>
                                    <div className='text-dark fa-2x'><i className="fa-solid fa-star"></i></div>
                                    <div className='line bg-dark'></div>
                        </div>
                    </div>
                    {/* 1 */}
                    <div className="row mt-5">
                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo1} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl ">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='  fa-3x fw-bolder text-center'>LOG CABIN</h2>
                                                <div className=' d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line bg-dark'></div>
                                                    <div className='text-dark fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line bg-dark'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo1} className="w-75 rounded-3 m-auto  d-flex justify-content-center align-items-center  " alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p className='text-center px-5 w-75  mx-auto text-dar'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? 
                                            Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger d-flex align-items-center m-auto btn-lg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////////////////// */}
                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModa2">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo2} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="exampleModa2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl ">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='fa-3x fw-bolder text-center'>TASTY CAKE</h2>
                                                <div className=' d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line bg-dark'></div>
                                                    <div className='text-dark fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line bg-dark'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo2} className="w-75 rounded-3 m-auto  d-flex justify-content-center align-items-center" alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p className='text-center px-5 w-75  mx-auto text-dar' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger d-flex align-items-center m-auto btn-lg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* /////// */}

                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo3} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl ">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='  fa-3x fw-bolder text-center'> CIRCUS TENT </h2>
                                                <div className=' d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line bg-dark'></div>
                                                    <div className='text-dark fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line bg-dark'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo3} className="w-75 rounded-3 m-auto  d-flex justify-content-center align-items-center  " alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p className='text-center px-5 w-75  mx-auto text-dar'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger d-flex align-items-center m-auto btn-lg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* /// */}


                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo4} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl ">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='  fa-3x fw-bolder text-center'>CONTROLLER </h2>
                                                <div className=' d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line bg-dark'></div>
                                                    <div className='text-dark fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line bg-dark'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo4} className="w-75 rounded-3 m-auto  d-flex justify-content-center align-items-center  " alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p className='text-center px-5 w-75  mx-auto text-dar' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger d-flex align-items-center m-auto btn-lg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* lll */}


                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo5} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl ">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='  fa-3x fw-bolder text-center'>LOCKED SAFE</h2>
                                                <div className=' d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line bg-dark'></div>
                                                    <div className='text-dark fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line bg-dark'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo5} className="w-75 rounded-3 m-auto  d-flex justify-content-center align-items-center  " alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p className='text-center px-5 w-75  mx-auto text-dar' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger d-flex align-items-center m-auto btn-lg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* /////// */}

                        <div className='col-md-6 col-lg-4 mt-5'>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                <div className='position-relative portimage'>
                                    <div className='w-100 h-100 rounded-3'><img src={logo6} className="w-100 rounded-3" alt="" /></div>
                                    <div className='w-100 portbg position-absolute top-0 h-100 rounded-3 d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus text-light fa-5x"></i></div>
                                </div>
                            </button>
                            <div className="modal fade" id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                <div className="modal-dialog modal-xl ">
                                    <div className="modal-content">
                                        <button type="button" className="btn-close ms-auto m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="modal-header d-flex justify-content-center align-items-center">
                                            <div>
                                                <h2 className='  fa-3x fw-bolder text-center'>SUBMARINE</h2>
                                                <div className=' d-flex justify-content-center align-items-center gap-3 my-2'>
                                                    <div className='line bg-dark'></div>
                                                    <div className='text-dark fa-2x'><i className="fa-solid fa-star"></i></div>
                                                    <div className='line bg-dark'></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className='w-100 h-100 rounded-3'><img src={logo6} className="w-75 rounded-3 m-auto  d-flex justify-content-center align-items-center  " alt="" /></div>
                                        </div>
                                        <div className='modal-body'>
                                            <p className='text-center px-5 w-75  mx-auto text-dar' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque amet vel! Ex, nemo! Quas eius dicta rem ea harum, unde sint illo alias? Ipsa earum similique reprehenderit corporis et?</p></div>
                                        <div className="modal-footer">
                                            <button type="button" className=" btn btn-danger d-flex align-items-center m-auto btn-lg" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </section>
        </>

  }
}
