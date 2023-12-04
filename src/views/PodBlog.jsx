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
            setErrMassage(prevState => ({
                ...prevState,
                pesel: 1
            }));
        } else {
            inputPesel.classList.remove("error")
            setErrMassage(prevState => ({
                ...prevState,
                pesel: null
            }));
        }
        if (!FullNameValidator.test(fullName)) {
            inputFullName.classList.add("error")
            setErrMassage(prevState => ({
                ...prevState,
                full_name: 1
            }));
        } else {
            inputFullName.classList.remove("error")
            setErrMassage(prevState => ({
                ...prevState,
                full_name: null
            }));
        }
        if (!StreetValidator.test(street)) {
            inputStreet.classList.add("error")
            setErrMassage(prevState => ({
                ...prevState,
                street: 1
            }));
        } else {
            inputStreet.classList.remove("error")
            setErrMassage(prevState => ({
                ...prevState,
                street: null
            }));
        }
        if (!NOValidator.test(no)) {
            inputNO.classList.add("error")
            setErrMassage(prevState => ({
                ...prevState,
                no: 1
            }));
        } else {
            inputNO.classList.remove("error")
            setErrMassage(prevState => ({
                ...prevState,
                no: null
            }));
        }
        if (!CityValidator.test(city)) {
            inputCity.classList.add("error")
            setErrMassage(prevState => ({
                ...prevState,
                city: 1
            }));
        } else {
            inputCity.classList.remove("error")
            setErrMassage(prevState => ({
                ...prevState,
                city: null
            }));
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
                    {errMassage.full_name && <div className="error_text">Imie lub nazwisko jest nie poprawne</div>}
                </div>
                <div className="adress_container">
                    <div className="labels" id="street_div">Street:
                        <input className="input_regex" type="text" onChange={event => setStreet(event.target.value)} id="street" />
                        {errMassage.street && <div className="error_text">Ulica jest nie poprawna</div>}
                    </div>
                    <div className="labels" id="NO_div">NO.
                        <input className="input_regex" type="text" onChange={event => setNo(event.target.value)} id="NO" />
                        {errMassage.no && <div className="error_text">Numer jest nie poprawny</div>}
                    </div>
                </div>
                <div className="labels" id="City_div">City:
                    <input className="input_regex" type="text" onChange={event => setCity(event.target.value)} id="City" />
                    {errMassage.city && <div className="error_text">Miasto jest nie poprawne</div>}
                </div>
                <button className="btn_regex" onClick={checkRegex}>Submit</button>
            </div>
        </div>)
}

export default PodBlog;