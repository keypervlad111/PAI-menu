import { useState } from "react"
import "./PodBlog.css"

function PodBlog() {
    const peselValidator = new RegExp(/^9910[0-9]{7,7}$/)
    const FullNameValidator = new RegExp(/^[a-zA-Z]+\s[a-zA-Z]*(\-)*[a-zA-Z]{3,50}$/)
    const StreetValidator = new RegExp(/^([0-9]*\s)?[A-Z]{1,1}[a-zA-Z]*$/)
    const NOValidator = new RegExp(/^[0-9]+[a-z]*$/)
    const CityValidator = new RegExp(/^[a-zA-Z]{2,30}\s?[a-zA-Z]+$/)

    const [pesel, setPesel] = useState(0)
    const [fullName, setFullName] = useState("")
    const [street, setStreet] = useState("")
    const [no, setNo] = useState("")
    const [city, setCity] = useState("")

    const inputPesel = document.getElementById("pesel")
    const inputFullName = document.getElementById("fullName")
    const inputStreet = document.getElementById("street")
    const inputNO = document.getElementById("NO")
    const inputCity = document.getElementById("City")

    const [errMassage, setErrMassage] = useState({
        pesel: null,
        full_name: null,
        street: null,
        no: null,
        city: null
    })

    function checkRegex() {
        if (!peselValidator.test(pesel)) {
            inputPesel.classList.add("error")
            console.log(errMassage);
        } else {
            inputPesel.classList.remove("error")
        }
        if (!FullNameValidator.test(fullName)) {
            inputFullName.classList.add("error")
        } else {
            inputFullName.classList.remove("error")
        }
        if (!StreetValidator.test(street)) {
            inputStreet.classList.add("error")
        } else {
            inputStreet.classList.remove("error")
        }
        if (!NOValidator.test(no)) {
            inputNO.classList.add("error")
        } else {
            inputNO.classList.remove("error")
        }
        if (!CityValidator.test(city)) {
            inputCity.classList.add("error")
        } else {
            inputCity.classList.remove("error")
        }
    }

    return (
        <div>
            <h1>Rozbudowane zadanie z REGEX</h1>
            <div className="container_regex">
                <div className="labels" id="pesel_div">Pesel:
                    <input className="input_regex" type="number" onChange={event => setPesel(event.target.value)} id="pesel" />
                    {errMassage.pesel && <div className="error_text">Pesel jest nie poprawny</div>}
                </div>
                <div className="labels" id="fullName_div">Full Name:
                    <input className="input_regex" type="text" onChange={event => setFullName(event.target.value)} id="fullName" />
                </div>
                <div className="adress_container">
                    <div className="labels" id="street_div">Street:
                        <input className="input_regex" type="text" onChange={event => setStreet(event.target.value)} id="street" />
                    </div>
                    <div className="labels" id="NO_div">NO.
                        <input className="input_regex" type="text" onChange={event => setNo(event.target.value)} id="NO" />
                    </div>
                </div>
                <div className="labels" id="City_div">City:
                    <input className="input_regex" type="text" onChange={event => setCity(event.target.value)} id="City" />
                </div>
                <button className="btn_regex" onClick={checkRegex}>Submit</button>
            </div>
        </div>)
}

export default PodBlog;