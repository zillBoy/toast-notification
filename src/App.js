import React, { useState } from 'react'
import ToastNotification from './ToastNotification'

function App() {
    
    const [topLeft, setTopLeft] = useState(false)
    const [topRight, setTopRight] = useState(false)
    const [topCenter, setTopCenter] = useState(false)

    const [bottomLeft, setBottomLeft] = useState(false)
    const [bottomRight, setBottomRight] = useState(false)
    const [bottomCenter, setBottomCenter] = useState(false)

    const topLeftAnimation = () => {
        setTopLeft(prevState => !prevState)
    }

    const topCenterAnimation = () => {
        setTopCenter(prevState => !prevState)
    }

    const topRightAnimation = () => {
        setTopRight(prevState => !prevState)
    }

    const bottomLeftAnimation = () => {
        setBottomLeft(prevState => !prevState)
    }

    const bottomCenterAnimation = () => {
        setBottomCenter(prevState => !prevState)
    }

    const bottomRightAnimation = () => {
        setBottomRight(prevState => !prevState)
    }

    return (
        <div>
            {topLeft ? 
            <ToastNotification 
                name="slide-top"
                duration="1s"
                timingFunction="ease"
                top="1%"
                left="1%"
            /> : null}

            {topCenter ? 
            <ToastNotification 
                name="slide-top"
                duration="1s"
                timingFunction="ease"
                top="1%"
                left="50%"
                center="-65px"
            /> : null}

            {topRight ? 
            <ToastNotification 
                name="slide-top"
                duration="1s"
                timingFunction="ease"
                top="1%"
                right="1%"
            /> : null}

                {/* BOTTOM */}

            {bottomLeft ? 
            <ToastNotification 
                name="slide-bottom"
                duration="1s"
                timingFunction="ease"
                bottom="3%"
            /> : null}

            {bottomCenter ? 
            <ToastNotification 
                name="slide-bottom"
                duration="1s"
                timingFunction="ease"
                bottom="1%"
                left="50%"
                center="-65px"
            /> : null}

            {bottomRight ? 
            <ToastNotification 
                name="slide-bottom"
                duration="1s"
                timingFunction="ease"
                bottom="3%"
                right="1%"
            /> : null}

            <div className="btn-main-div">
                <div className="btn-div">
                    <button onClick={topLeftAnimation} className="btn">Top Left</button>
                    <button onClick={topCenterAnimation} className="btn">Top Center</button>
                    <button onClick={topRightAnimation} className="btn">Top Right</button>
                </div>
                <div className="btn-div">
                    <button onClick={bottomLeftAnimation} className="btn">Bottom Left</button>
                    <button onClick={bottomCenterAnimation} className="btn">Bottom Center</button>
                    <button onClick={bottomRightAnimation} className="btn">Bottom Right</button>
                </div>
            </div>
        </div>
    )
}

export default App
