import "./Hero.css"
import photoGrid from "../../assets/photo-grid.png"

function Hero() {
    return(
        <div className="hero">
            <img className="hero--photo" src={photoGrid}></img>
            <div className="hero--textblock">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Hero