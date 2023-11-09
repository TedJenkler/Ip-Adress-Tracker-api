
const DisplayValues = (props) => {
    return (
    <div className="displayvalues">
       <div id="r1" className="responsivevalue">
            <h2 className="value-h1">IP ADDRESS</h2>
            <p className="value-p">{props.ip}</p>
       </div>
    <div id="r2" className="responsivevalue">
        <h2 className="value-h1">LOCATION</h2>
        <p className="value-p">{`${props.city}, ${props.country} ${props.postalcode}`}</p>
    </div>
    <div id="r3" className="responsivevalue">
        <h2 className="value-h1">TIMEZONE</h2>
        <p className="value-p">{`UTC ${props.timezone}`}</p>
    </div>
    <div id="r4" className="responsivevalue">
        <h2 className="value-h1">ISP</h2>
        <p className="value-p">{props.isp}</p>
    </div>
    </div>)
}

export default DisplayValues