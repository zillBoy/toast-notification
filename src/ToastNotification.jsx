import React from 'react'

function ToastNotification({name, duration, timingFunction, top, bottom, left, right, center}) {
    return <ToastMessage 
        name={name} 
        duration={duration} 
        timingFunction={timingFunction} 
        top={top} 
        bottom={bottom} 
        left={left} 
        right={right}
        center={center} />
}

const ToastMessage = ({name, duration, timingFunction, top, bottom, left, right, center}) => {
    return(
        <div 
            style={{animation: `${name} ${duration} ${timingFunction}`,
                top: top, bottom: bottom, left: left, right: right, marginLeft: center}} 
            className="toast-notification-component ">

            <div className="toast-notification-div">
                <p className="toast-message">Success</p>
            </div>
        </div>        
    );
}

export default ToastNotification
