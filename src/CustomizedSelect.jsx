import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import * as React from "react"

const CustomizedSelect = (props) => {
  const { id, label, multiple, allValues, value, onChange } = props;
  
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        multiple={multiple}
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}>
        {allValues.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
};

export default CustomizedSelect;
