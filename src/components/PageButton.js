import * as React from 'react';
import Button from '@mui/material/Button';

export default function ContainedButtons({name,}) {
  return (

      <Button variant="contained" type='submit' fullWidth style={{backgroundColor: '#512da8', margin: '10px 0px'}}>{name}</Button>

  );
}