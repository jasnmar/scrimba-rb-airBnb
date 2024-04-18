import "./Card.css"
import katie from "../../assets/katie-zaferes.png"
import star from "../../assets/star.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

function Card() {
    return (
        <div className="card">
            <img className="card--image" src={katie}></img>
            <div className="card--rating">
                <img className="card--star" src={star}></img> 
                <p className="card--ratingtext">5.0 <span className="card--ratingtext-light">(6) &#x2022; USA</span></p>
            </div>
            <p className="card--title">Life lessons with Katie Zaferes</p>
            <p className="card--price"><span className="card--price--bold">From $136</span> / person</p>
        </div>
    )
}

export default Card