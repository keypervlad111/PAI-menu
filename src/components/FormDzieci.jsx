import "./FormDzieci.css"
import { Link } from 'react-router-dom'


function FormDzieci({ dzieci }) {
    return (
        <div className="childrens">
            {dzieci.children.map((dziecko, index) =>
            (< div key={index} className="dziecko" >
                <Link to={dzieci.url + dziecko.url}>
                    {dziecko.name}
                </Link>
            </div>))}
        </div >
    )
}

export default FormDzieci;