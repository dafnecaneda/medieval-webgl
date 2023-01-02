import './style.css'
import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Suspense fallback={null}>
            <App/>
        </Suspense>
    </>
)