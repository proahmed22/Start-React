import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
        <footer className='nav py-5' >
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 col-lg-4 my-5">
                        <div className='text-light'>
                            <h3 className='my-3'>LOCATION</h3>
                            <p>2215 John Daniel Drive
                                Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 my-5">
                        <div className='text-light'>
                            <h3 className='my-3'>AROUND THE WEB</h3>
                            <div className='d-flex justify-content-center text-center fa-2x gap-3'>
                                <span className='circle border border-white p-2 rounded-circle'><i className="fa-brands fa-facebook"></i></span>
                                <span className='circle border border-white p-2 rounded-circle'><i className="fa-brands fa-twitter"></i></span>
                                <span className='circle border border-white p-2 rounded-circle'><i className="fa-brands fa-linkedin-in"></i></span>
                                <span className='circle border border-white p-2 rounded-circle'><i className="fa-solid fa-basketball"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 my-5">
                        <div className='text-light'>
                            <h3 className='my-3'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className='footbg  text-center py-3'>
            <p className='mt-3 text-light'>Copyright A7md Ashraf © Your Website 2021</p>
        </div>
    </>
    )
  }
}
