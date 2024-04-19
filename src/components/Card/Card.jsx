import "./Card.css"
//import katie from "../../assets/katie-zaferes.png"
import star from "../../assets/star.png"


function Card(props) {
    const imgSrc = "/src/assets/" + props.img
    let badgeText = ""
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location=== "Online") {
        badgeText = "ONLINE"
    }

        /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */
    return (
        <div className="card">
            {badgeText != "" && <div className="card-badge">{badgeText}</div>}
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

