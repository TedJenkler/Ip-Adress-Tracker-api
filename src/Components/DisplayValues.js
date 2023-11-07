
const DisplayValues = (props) => {
    return (
    <div className="displayvalues">
        <h2 className="value-h1">IP ADDRESS</h2>
        <p className="value-p">{props.ip}</p>
        <h2 className="value-h1">LOCATION</h2>
        <p className="value-p">{`${props.city}, ${props.country} ${props.postalcode}`}</p>
        <h2 className="value-h1">TIMEZONE</h2>
        <p className="value-p">{`UTC ${props.timezone}`}</p>
        <h2 className="value-h1">ISP</h2>
        <p className="value-p">{props.isp}</p>
    </div>)
}

export default DisplayValues