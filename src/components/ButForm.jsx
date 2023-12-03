import FormDzieci from "./FormDzieci";
import "./ButForm.css";
import { Link } from 'react-router-dom'

function ButForm({ item, active }) {
    const { isActive, setIsActive } = active

    function przycisk() {
        setIsActive(item.name)
    }

    return (
        <div>
            <div className="name" onClick={przycisk}> <Link style={{ textDecoration: 'none' }} to={item.url}> {item.name} </Link></div>
            {isActive === item.name && <FormDzieci dzieci={item} key={item.index} />}
        </div >
    )
}

export default ButForm;