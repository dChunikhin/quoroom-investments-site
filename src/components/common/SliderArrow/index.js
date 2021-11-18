import React from 'react'




const SliderArrow = ({className, to, onClick}) => {
    return (
        <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
            <div className="icon" icon={to}></div>
        </button>
    )
}


export default SliderArrow