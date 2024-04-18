import "./Navbar.css"
import airbnbLogo from "../../assets/airbnb-logo.png"

function Navbar() {
    return(
        <nav>
            <img className="nav--logo" src={airbnbLogo}></img>
        </nav>
    )
}




export default Navbar