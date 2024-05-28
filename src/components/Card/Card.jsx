import "./Card.css"
import katie from "../../assets/katie-zaferes.png"
import bike from "../../assets/mountain-bike.png"
import wed from "../../assets/wedding-photography.png"
import star from "../../assets/star.png"


function Card(props) {
    let imgSrc
    if(props.coverImg == "katie") {
        imgSrc = katie
    } else if (props.coverImg == "wedding") {
        imgSrc = wed
    } else {
        imgSrc = bike
    }
    
    let badgeText = ""
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location=== "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText != "" && <div className="card-badge">{badgeText}</div>}
            <img className="card--image" src={imgSrc}></img>
            <div className="card--rating">
                <img className="card--star" src={star}></img> 
                <p className="card--ratingtext">{props.stats.rating} 
                    <span className="card--ratingtext-light">
                    ({props.stats.reviewCount}) &#x2022; {props.location}</span>
                </p>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--price"><span className="card--price--bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card

