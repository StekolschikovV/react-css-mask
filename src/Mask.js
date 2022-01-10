import React from "react";

const Mask = (props) =>{

    const maskEl = props.maskEl.current
    const position = maskEl.getBoundingClientRect()


    const style = {
        x: `${position.left}px`,
        y: `${position.top}px`,
        width: `${maskEl.offsetWidth}px`,
        height: `${maskEl.offsetHeight}px`,
        fill: "black",
        rx: "0"
    }


    return <div className={"mask"}>
        <svg width="100vw" height="100vh">
            <mask id="mask__ipglqom18wm">
                <rect x="0" y="0" width={document.body.offsetWidth} height={document.body.offsetHeight} fill="white"></rect>
                <rect className="css-yjvsmj-Mask" style={{...style}}></rect>
            </mask>
            <rect className="rect"></rect>
        </svg>
    </div>

}

export default Mask