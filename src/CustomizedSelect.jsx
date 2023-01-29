import * as React from 'react';

import {
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

const CustomizedSelect = (props) => {
  const { id, label, multiple, allValues, value, onChange } = props;
  
  return (
    <Grid item xs={12} sm={4}>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          multiple={multiple}
          value={value}
          onChange={onChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {allValues.map(value => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  )
};

export default CustomizedSelect;
