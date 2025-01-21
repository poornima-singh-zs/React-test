import React from "react"
import Title from './Title'
import Description from './Description'
import "./Test.css"
import image from "../assets/download.jpeg"

const Test = (props) => {


    return (
        <div className="parent">
            <div className="image">
                <img style={{ width: 200, height: 200 }} src={image} alt=""></img>
            </div>
            <div className="container">
                <Title title={props.title}/>
                <Description description={props.description} />
            </div>
        </div>
    )
}
export default Test