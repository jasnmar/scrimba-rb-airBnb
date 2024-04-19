import "./Card.css"
//import katie from "../../assets/katie-zaferes.png"
import star from "../../assets/star.png"


function Card(props) {
    console.log(props)
    const imgSrc = "/src/assets/" + props.img
    return (
        <div className="card">
            <img className="card--image" src={imgSrc}></img>
            <div className="card--rating">
                <img className="card--star" src={star}></img> 
                <p className="card--ratingtext">{props.rating} 
                    <span className="card--ratingtext-light">
                    ({props.reviewCount}) &#x2022; {props.location}</span>
                </p>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--price"><span className="card--price--bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card

