import { useState } from "react";

// function cheackMail() {
//     emailValidator.test(mail)
// }

function Blog() {
    const emailValidator = new RegExp(/^[a-zA-Z]+[0-9a-zA-Z\.\-\_]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+(\.)*[a-z]{1,8}$/)
    const [mail, setMail] = useState("")
    function cheackMail() {
        if (emailValidator.test(mail)) {
            alert("poprawny")
        } else {
            alert("Masz bledy w mailu")
        }
    }

    return (
        <div>
            <h1>Blog</h1>
            <input type="text" onChange={event => setMail(event.target.value)}></input>
            <button onClick={cheackMail}>Sprawdz</button>
        </div>
    )
}

export default Blog;