import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DateTimePickerValue=({inputValue,setValue})=> {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer 
        sx={{width:'95%',marginTop:'-15px',marginBottom:'5px',height:'80px'}} 
        components={['DateTimePicker', 'DateTimePicker']}
        >
        <DateTimePicker
         sx={{width:'100%',backgroundColor:'white',heigh:'40px'}}
          label="Enter Date and Time"
          value={inputValue}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default  DateTimePickerValue