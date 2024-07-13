import React from "react";

const NotiBanner = React.forwardRef(({title}, ref) => {
    return (
        <div ref={ref} className="noti-banner green-bg fs-200 fw-bold">
            <div className="container flex">
               <p>{title}</p>
            </div>
        </div>
    )
})

export default NotiBanner;