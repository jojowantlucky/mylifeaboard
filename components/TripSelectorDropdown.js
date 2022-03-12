import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TripSelectorDropdown = () => {
  const [trip, setTrip] = useState('');
  const currentTripID = '0';
  const chosenTrip = useRef(currentTripID);

  const handleChange = () => {
    setTrip(chosenTrip.current);
  };

  const tripList = [
    {
      id: '01',
      name: 'Trip One',
    },
    {
      id: '02',
      name: 'Trip Two',
    },
    {
      id: '03',
      name: 'Trip Three',
    },
    {
      id: '04',
      name: 'Trip Four',
    },
    {
      id: '05',
      name: 'Trip Five',
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: '50%',
        paddingBottom: '1rem',
        margin: 'auto',
      }}>
      <FormControl fullWidth>
        <InputLabel id='map-trip-selector'>
          Select a Trip
        </InputLabel>
        <Select
          labelId='trip-label'
          id='trip-label'
          value={trip}
          label='Trip'
          onChange={handleChange}>
          {tripList.map((trip) => (
            <MenuItem ref={chosenTrip} value={trip.id}>
              {trip.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TripSelectorDropdown;
