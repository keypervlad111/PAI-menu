import "./FooterItem.css"
import { Link } from 'react-router-dom'


function FooterItem({ item }) {
    // console.log(item.children.map(child => child.LinkText));
    return (
        <div>
            <div className="name">{item.name}</div>
            <div className="footer_childrens">
                {item.children.map((child, index) => (<div key={index}><Link to={child.linkUrl}>{child.LinkText}</Link></div>))}
            </div>
        </div >
    )
}

export default FooterItem;