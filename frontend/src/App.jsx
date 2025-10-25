import React from 'react'
import Products from './components/Products'
import PaymentSuccess from './components/PaymentSuccess'
import data from './components/data.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Products data={data} />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />}   />
      </Routes>
    </Router>
      
  )
}
