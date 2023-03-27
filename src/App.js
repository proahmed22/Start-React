import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';



const router = createBrowserRouter([
  {
    path: "/", element: <Layout/>, children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "home", element: <Home />
      },
      {
        path: "portfolio", element: <Portfolio />
      },
      {
        path: "about", element: <About />
      },
      {
        path: "contact", element: <Contact />
      }
    ]
  }
])


export default class App extends Component {
  render() {
    return (<>
        <RouterProvider router={router} />
      </>
    )
  }
}