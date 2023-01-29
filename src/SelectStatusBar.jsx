import * as React from 'react';

import {
  Button,
  Typography,
} from '@mui/material';

const SelectStatusBar = (props) => {
  const { clearAllCallback, count } = props;

  return (
    <div style={{ display: "flex" }}>
      <Button variant="outlined" size="small" onClick={clearAllCallback} sx={{ m: 1 }}>
        CLEAR ALL
      </Button>
      <Typography variant="body3" sx={{ my: "auto", ml: 4 }}>
        {count === 1 ? `1 result` : `${count} results`}
      </Typography>
    </div>
  );
};

export default SelectStatusBar;
