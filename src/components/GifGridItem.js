import React from "react";
import PropTypes from 'prop-types';
export const GifGridItem = ({id,title,url})=>{
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-0s"><img src={url} alt={title} key={id} ></img><p>{title}</p></div>)
}

GifGridItem.propTypes={
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
 }