import React,{useState} from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import image from './Logo.png';

const GifExpertApp = ({defaultCategories=[]}) =>{

    const[categories,setCategories] = useState(defaultCategories)

return (<div>
        <h2>Gif Search Engine <img src={image} className="logo"></img><h4>Developed by Cristian Gomez</h4></h2>
        
        <h3>Search whatever you want </h3>
        <AddCategory setCategories={setCategories}/><hr/>


    <ol>{categories.map((category) => <GifGrid key={category} category={category}/> )}</ol>
    </div>);
}

export default GifExpertApp;

