import "./NavBar.css"
import MainHeader from "./MainHeader"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav" id="nav">
            <div className="logo"><Link to="/">Logo</Link></div>
            <MainHeader />
            <div className="kalkulator">Cos Fajnego</div>
        </div>
    )
}

export default NavBar;