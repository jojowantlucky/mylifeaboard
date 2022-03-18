import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

const TripSelectorDropdown = () => {
  const [selectedTrip, setSelectedTrip] = useState('01');

  const handleChange = (event) => {
    setSelectedTrip(event.target.value);
    //format setSelectedTrip to use with getTripCoordinates.
    // const formattedSelectedTrip = setSelectedTrip
    // getTripCoordinates()
    alert('hi there!');
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
      }}>
      <FormControl fullWidth>
        <InputLabel id='map-trip-selector'>Trip</InputLabel>
        <TextField
          select
          labelId='trip-label'
          id='trip-label'
          value={selectedTrip}
          label='Trip'
          onChange={handleChange}
          placeholder='Current Trip/Location'
          helperText='Choose past trips here.'>
          {tripList.map((trip) => (
            <MenuItem value={trip.id}>{trip.name}</MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Box>
  );
};

export default TripSelectorDropdown;
