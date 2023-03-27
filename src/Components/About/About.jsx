import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (<>
     <section id='about' className='header py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h2 className='fa-4x text-light fw-bolder text-center'>About</h2>
                        <div className='textblue d-flex justify-content-center align-items-center gap-3 my-2'>
                            <div className='line bg-light'></div>
                            <div className='fa-2x text-light'><i className="fa-solid fa-star"></i></div>
                            <div className='line bg-light'></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='d-flex w-75 mx-auto justify-content-center align-items-center mt-4'>
                                <div className='fs-5 text-light'><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex w-75 mx-auto justify-content-center align-items-center mt-4'>
                                <div className='fs-5 text-light'><p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </>
    )
  }
}
