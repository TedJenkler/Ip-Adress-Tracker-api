
const DisplayValues = (props) => {
    return (<>
    <h2>IP ADDRESS</h2>
    <p>{props.ip}</p>
    <h2>LOCATION</h2>
    <p>{`${props.city}, ${props.country} ${props.postalcode}`}</p>
    <h2>TIMEZONE</h2>
    <p>{`UTC ${props.timezone}`}</p>
    <h2>ISP</h2>
    <p>{props.isp}</p>
    </>)
}

export default DisplayValues