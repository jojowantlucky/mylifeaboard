import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import ResetViewControl from '@20tab/react-leaflet-resetview';

const Map = ({width, height='100%'}) => {
  const homePortCoordinates = [
    45.60514012056267, -122.65578868429517,
  ];

  const theCliffCoordinates = [
    12.920836911295423, 100.86285125163124,
  ];
  const [rawGpsData, setRawGpsData] = useState([
    {
      trip: 'Default useState',
      latLon: homePortCoordinates,
      timestamp: new Date(),
    },
  ]);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/sea-log?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRawGpsData(data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const centerCoordinates = homePortCoordinates;

  return (
    <MapContainer
      center={centerCoordinates}
      zoom={8}
      scrollWheelZoom={true}
      style={{
        height: '100%',
        width: {width},
        paddingBottom: '40px',
        minWidth: '350px',
        minHeight: '350px',
        margin: 'auto',
      }}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />

      <Marker
        position={centerCoordinates}
        draggable={false}
        animate={true}>
        <Popup>Onnie's Current Location</Popup>
      </Marker>

      <ResetViewControl
        title='Reset view'
        icon='url(/images/reset-icon.svg)'
        position='bottomright'
      />
    </MapContainer>
  );
};

export default Map;
