import './style.css'
import ReactDOM from 'react-dom/client'
// Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App'
import React, { Suspense } from 'react'
import Header from './components/header/Header'
import AboutMe from './components/sections/Section'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
 <Suspense fallback={null}>
    <App/>

   
   <Header/>
   <AboutMe/>
   </Suspense>
    </>
)