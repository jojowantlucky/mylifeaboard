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
  const [coordinateData, setCoordinateData] = useState([
    {
      id: 'recz6UXyKcImA84YR',
      fields: {
        title: 'title 1',
        timestamp: 'Sun, 20 Mar 2022 12:55:37 +0003',
        body: '45.60545536686442, -122.6552415136658',
        trip: 'test',
        learnMore: 'www.mylifeaboard.com',
      },
      createdTime: '2022-03-20T19:51:10.000Z',
    },
  ]);
  const [chosenTrip, setChosenTrip] = useState('test');

  const homePortCoordinates = [
    '45.60514012056267, -122.65578868429517',
  ];

  let location;
  const popupDate = 'September 20, 2021';
  const dateSlug = '2021-09-20';

  // Import trips by trip or most recent location. Save to coordinateData
  useEffect(() => {
    const fetchCoordinates = async () => {
      await getCoordinates(chosenTrip)
        .then((coordinateData) =>
          setCoordinateData(coordinateData)
        )
        .catch((err) => console.log(err));
    };
    fetchCoordinates();
  }, []);

  if (coordinateData.length === 0) {
    setCoordinateData({
      id: 'current-location',
      fields: {
        title: "Onnie's Current Location",
        timestamp: new Date(),
        body: homePortCoordinates,
        trip: '',
        learnMore: 'www.mylifeaboard.com',
      },
      createdTime: '2022-03-20T19:51:10.000Z',
    });
  }

  return (
    <MapContainer
      center={coordinateData[0].fields.body.split(', ')}
      zoom={14}
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
      {coordinateData.map((marker) => (
        <Marker
          position={marker.fields.body.split(', ')}
          draggable={false}
          animate={true}>
          <Popup>
            <h5>{marker.fields.title}</h5>
            <p className='popupInfo'>
              Date: {marker.fields.timestamp}
            </p>
            <p className='popupInfo'>
              Lat: {marker.fields.body.split(', ')[0]}
            </p>
            <p className='popupInfo'>
              Lon: {marker.fields.body.split(', ')[1]}
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
      ))}

      <ResetViewControl
        title='Reset view'
        icon='url(/images/reset-icon.svg)'
        position='bottomright'
      />
    </MapContainer>
  );
};

export default Map;
