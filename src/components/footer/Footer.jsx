import { useState } from "react";
import "./Footer.css"
import FooterItem from "./FooterItem";

function Footer() {
    const [footerData, setFooterData] = useState([
        {
            name: "A",
            children: [
                { LinkText: "O firmie", linkUrl: "/o_nas" },
                { LinkText: "Aktualności", linkUrl: "/o_nas" },
                { LinkText: "Galeria", linkUrl: "/o_nas" }
            ]
        },
        {
            name: "B",
            children: [
                { LinkText: "B Firma", linkUrl: "/o_nas" },
                { LinkText: "B Aktualności", linkUrl: "/o_nas" },
                { LinkText: "B Galeria", linkUrl: "/o_nas" }
            ]
        },
        {
            name: "C",
            children: [
                { LinkText: "C firma", linkUrl: "/o_nas" },
                { LinkText: "c Aktualności", linkUrl: "/o_nas" },
                { LinkText: "C Galeria", linkUrl: "/o_nas" }
            ]
        },
        {
            name: "D",
            children: [
                { LinkText: "D firma", linkUrl: "/o_nas" },
                { LinkText: "D Aktualności", linkUrl: "/o_nas" },
                { LinkText: "D Galeria", linkUrl: "/o_nas" }
            ]
        }
    ])

    return (
        <div className="main_container" style={{ "--footer-lenght": footerData.length }}>
            <div className="colums_container">
                {footerData.map(item => <FooterItem key={item.name} item={item} />)}
            </div>
        </div>
    )
}

export default Footer;