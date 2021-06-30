import React from 'react'
import './MainPage/section-1.css'
import Section1 from './MainPage/section-1.js'
import Section2 from './MainPage/section-2.js'
import Section3 from './MainPage/section-3.js'
import Section4 from './MainPage/section-4.js'
import Section5 from './MainPage/section-5.js'
const MainPage = () => {
    return (
        <div className="MainPage">
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
    </div>
    );
}
export default MainPage
