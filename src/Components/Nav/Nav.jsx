import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {

render() {
    return (<>
<nav className="nav navbar navbar-expand-lg navbar-dark shadow-lg">
                    <div className="container">
                        <Link className="navbar-brand fs-1 fw-bolder" to="home">START REACT</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navSub" aria-controls="navSub" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navSub">
                            <ul className="navbar-nav ms-auto mb-2 gap-3 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="link position-relative nav-link text-white fw-bolder" to="Portfolio" >PORTFOLIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="link position-relative nav-link text-white fw-bolder" to="About">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="link position-relative nav-link text-white fw-bolder" to="contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>




    </>
    )
  }
}
