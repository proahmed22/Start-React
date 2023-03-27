import React, { Component } from 'react'

export default class Contact extends Component {
render() {
    return (
    <>
    <section id='contact' className='py-5'>
        <div className="container">
            <div>
                <h2 className='textblue fa-4x fw-bolder text-center'>Contact Me</h2>
                <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                    <div className='line nav'></div>
                    <div className='fa-2x'><i className="fa-solid fa-star"></i></div>
                    <div className='line nav'></div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                        <form>
                            <div>
                                <div className="form-floating my-3 w-75 mx-auto px-2">
                                <input type="text" className="form-control form-border shadow" id="Phone" placeholder="Name" required/>
                                <ul className="signintext mt-3 invalid-feedback">
                                <li>Name Is Required</li>
                                </ul>
                                <label htmlFor="signAge">
                                    <div className="text-secondary">
                                        <h5 className="fs-6 mt-1 text-sec">Name</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-floating my-3 w-75 mx-auto px-2">
                                <input type="email" className="form-control form-border shadow" id="Phone" placeholder="email" required />
                                <ul className="signintext mt-3 invalid-feedback">
                                    <li>email Is Required</li>
                                </ul>
                                <label htmlFor="signAge">
                                    <div className="text-secondary">
                                        <h5 className="fs-6 mt-1 text-sec">Email Address</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-floating my-3 w-75 mx-auto px-2">
                                <input type="number" className="form-control form-border shadow" id="Phone" placeholder="Phone" required />
                                <ul className="signintext mt-3 invalid-feedback">
                                    <li>Phone Is Required</li>
                                </ul>
                                <label htmlFor="signAge">
                                    <div className="text-secondary">
                                        <h5 className="fs-6 mt-1 text-sec">Phone Number</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-floating my-3 w-75 mx-auto px-2 ">
                                <textarea placeholder='Message' className='textarea w-100 rounded-3 shadow' rows="10" required ></textarea>
                            </div>
                        </div>
                        <div className='w-75 mx-auto'><div><button className='headerbg btn btn-info text-light fa-2x px-4 py-2 shadow'>Send</button></div></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</>
    )
}
}
