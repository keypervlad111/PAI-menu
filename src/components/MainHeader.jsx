import { useState } from "react";
import ButForm from "./ButForm"

function MainHeader() {
    const [isActive, setIsActive] = useState(null);
    const [Tab, setTab] = useState(
        [{ "name": "O nas", "children": [{ "name": "O firmie", "url": "/pod_o_nas" }, { "name": "Aktualności", "url": "/pod_o_nas" }, { "name": "Galeria", "url": "/pod_o_nas" }], "url": "/o_nas" },
        { "name": "Blog", "children": [{ "name": "Z życia szkoły", "url": "/pod_blog" }, { "name": "Czas na przerwę", "url": "/pod_blog" }], "url": "/blog" },
        { "name": "Klasa", "children": [{ "name": "Lista osób", "url": "/pod_klasa" }, { "name": "Przedmioty", "url": "/pod_klasa" }, { "name": "Egzaminy", "url": "/pod_klasa" }], "url": "/klasa" }
        ])


    return (
        Tab.map(item => <ButForm key={item.name} item={item} active={{ isActive, setIsActive }} />)
    )
}

export default MainHeader;