import React from "react";
import { GifGridItem } from "./GifGridItem";
//import { PropTypes } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GifGrid = ({category})=>{
    const {data: images,loading} = useFetchGifs(category);

    return (<React.Fragment>
        <h3 className="animate__animated animate__fadeIn animate__delay-3s">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p> }
        { <div className="card-grid">
        
            {images.map(image => <GifGridItem key={image.id} id={image.id} title={image.title} url={image.url} />)}
        </div> }
        </React.Fragment>)
}
//GifGrid.propTypes = { category: PropTypes.string.isRequired}