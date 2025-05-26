import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Product'
import Contact from './Contact'
import FeedSupplement from './FeedSupplement'
import WaterCare from './WaterCare'

const Routing = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/product' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/feedsupplement' element={<FeedSupplement />} />
                <Route path='/watercare' element={<WaterCare />} />
            </Routes>
        </>
    )
}

export default Routing