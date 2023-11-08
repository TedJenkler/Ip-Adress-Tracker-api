import { useState } from "react"
import arrow from "../images/icon-arrow.svg"

const IPInput = (props) => {
    const [update, setUpdate] = useState("")
    const handlechange = (e) => {
        setUpdate(e.target.value)
    }
    const handleclick = async () => {

        props.setIp(update)
        try {
            const data = await (await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_WFzeE0kMyAo0pYv3HItVeZvoXdk97&ipAddress=${props.ip}`)).json()
            console.log(data)
            props.setCity(data.location.city)
            props.setCountry(data.location.country)
            props.setPostalcode(data.location.postalCode)
            props.setTimezone(data.location.timezone)
            props.setISP(data.isp)
            props.setCoordinates([data.location.lat, data.location.lng])
        } catch (err) {
            console.log("API seems to be down")
        }
    }
    return (<>
    <div className="inputgroup">
        <input className="input" onChange={handlechange} value={update} placeholder={props.ip}></input>
        <button onClick={handleclick} className="submit"><img id="arrow" src={arrow} alt=""></img></button>
    </div>
    </>)
}

export default IPInput