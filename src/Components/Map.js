import { MapContainer, TileLayer, useMap, Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import icon from "../images/leaf-green (1).png"
import iconshadow from '../images/leaf-shadow.png'

const Map = (props) => {

    var greenIcon = new Icon({
        iconUrl: `${icon}`,
        shadowUrl: `${iconshadow}`,

        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    function SetViewOnClick({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());

        return null;
      }

    return (
        <>
         <MapContainer zoomControl={null} center={props.coordinates} zoom={13}>
         <SetViewOnClick coords={props.coordinates} />
            <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={props.coordinates} icon={greenIcon}></Marker>
         </MapContainer>
        </>
    )
}

export default Map