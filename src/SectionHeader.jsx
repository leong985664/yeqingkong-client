import * as React from 'react';

import {
  Divider,
  Typography,
} from '@mui/material';

const SectionHeader = (props) => {
  return (
    <>
      <Typography gutterBottom variant="h4" color="text.secondary" sx={{ mt: 4, mb: `${props.divider ? 1 : 4}` }}>{props.title}</Typography>
      {props.divider && <Divider sx={{ mb: 4 }}/>}
    </>
  )
}

export default SectionHeader;
