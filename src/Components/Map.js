import { MapContainer, TileLayer, useMap, Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import icon from "../images/leaf-green (1).png"
import iconshadow from '../images/leaf-shadow.png'

const Map = () => {

    var greenIcon = new Icon({
        iconUrl: `${icon}`,
        shadowUrl: `${iconshadow}`,

        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    return (
        <>
         <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[48.86, 2.3522]} icon={greenIcon}></Marker>
         </MapContainer>
        </>
    )
}

export default Map