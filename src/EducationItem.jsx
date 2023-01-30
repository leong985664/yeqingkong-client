import * as React from 'react';

import {
  Avatar,
  Typography,
} from '@mui/material';

import { getYearSpanString } from './utils/helpers';

const EducationItem = (props) => {
  const { item } = props;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: 20 }}>
        <Avatar
          alt={item.institution.name}
          src={item.institution.logo.url}
          sx={{ width: 64, height: 64 }}
        />
      </div>
      <div style={{ padding: 5, margin: "auto 0" }}>
        <Typography variant="subtitle1">{item.degree}</Typography>
        <Typography variant="subtitle2" color="text.secondary">{item.institution.name}</Typography>
      </div>
      <div style={{ padding: 5, margin: "auto 0 auto auto", display: "grid" }}>
        <Typography variant="subtitle1" sx={{ ml: "auto" }}>{item.institution.locationString}</Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ ml: "auto" }}>{getYearSpanString(item.startTime, item.endTime, true)}</Typography>
      </div>
    </div>
  )
}

export default EducationItem;
