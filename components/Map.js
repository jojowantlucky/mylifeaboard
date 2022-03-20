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
import Link from 'next/link';
import getCoordinates from '../pages/api/getCoordinates';

const clickHandler = () => {};

const Map = ({ width, height = '100%' }) => {
  const [coordinates, setCoordinates] = useState([]);

  const homePortCoordinates = [
    45.60514012056267, -122.65578868429517,
  ];

  useEffect(() => {
    const fetchCoordinates = async () => {
      getCoordinates()
        .then((coord) => setCoordinates(coord))
        .catch((err) => console.log(err));
    };
    fetchCoordinates();
  }, []);

  // const centerCoordinates = homePortCoordinates;
  // const popupDate = 'September 20, 2021';
  // const dateSlug = '2021-09-20';
  console.log(coordinates);

  return (
    <MapContainer
      center={centerCoordinates}
      zoom={8}
      scrollWheelZoom={true}
      className='mobile-size-adjustment'
      style={{
        height: '9  0%',
        width: { width },
        paddingBottom: '40px',
        minWidth: '253px',
        minHeight: '253px',
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
        <Popup>
          <h5>Onnie's Current Location</h5>
          <p className='popupInfo'>Date: {popupDate}</p>
          <p className='popupInfo'>
            Lat: {centerCoordinates[0]}
          </p>
          <p className='popupInfo'>
            Long: {centerCoordinates[1]}
          </p>
          <Link href={`/gallery/${dateSlug}`}>
            <a>
              <img
                src='/images/about-img.jpg'
                alt='about image'
              />
            </a>
          </Link>
          <p className='popupLink' onClick={clickHandler}>
            Learn more...
          </p>
        </Popup>
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
