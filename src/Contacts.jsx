import * as React from 'react';

import { useQuery } from '@apollo/client';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  IconButton,
  Stack,
  SvgIcon,
} from '@mui/material';

import { contentfulContactsQuery } from './utils/contentfulQueries';

const Contacts = (props) => {
  const { loading, error, data } = useQuery(contentfulContactsQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const contacts = data.contactCollection.items;

  const OrcidIcon = () => {
    const color = props.color ?? "#A6CE39";
    let scale = "scale(1.0)";
    if (props.iconSize === "large") {
      scale = "scale(1.2)";
    } else if (props.iconSize === "small") {
      scale = "scale(0.8)";
    }

    return (
      <SvgIcon sx={{ transform: `${scale}` }}>
        <path d="M24 12c0 6.628 -5.372 12 -12 12S0 18.628 0 12 5.372 0 12 0s12 5.372 12 12Z" fill={color}/>
        <path d="M7.969 17.345h-1.447v-9.993h1.447v9.993zm2.124 -9.994h3.909c3.722 0 5.357 2.641 5.357 5.002 0 2.566 -2.02 5.001 -5.338 5.001H10.093V7.351Zm1.447 8.706h2.303c3.28 0 4.032 -2.473 4.032 -3.704 0 -2.006 -1.287 -3.705 -4.107 -3.705h-2.228v7.409Zm-3.346 -10.787c0 0.513 -0.423 0.942 -0.949 0.942a0.949 0.949 0 0 1 -0.949 -0.942 0.943 0.943 0 0 1 0.949 -0.942c0.527 0 0.949 0.429 0.949 0.942Z" fill="#FFF"/>
      </SvgIcon>
    )
  }

  const getIconForContactType = (contactType) => {
    switch (contactType) {
      case "ORCID":
        return <OrcidIcon fontSize={props.iconSize} />;
      case "Google Scholar":
        return <SchoolIcon fontSize={props.iconSize} sx={{ color: `${props.color ?? "#4285F4"}` }}/>;
      case "LinkedIn":
        return <LinkedInIcon fontSize={props.iconSize} sx={{ color: `${props.color ?? "#0A66C2"}` }}/>;
      case "Twitter":
        return <TwitterIcon fontSize={props.iconSize} sx={{ color: `${props.color ?? "#1DA1F2"}` }}/>;
      case "GitHub":
        return <GitHubIcon fontSize={props.iconSize} sx={{ color: `${props.color ?? "black"}` }}/>;
      default:
        return <></>;
    }
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}>
      {contacts.map((contact, index) => {
        return (
          <IconButton key={index} aria-label={contact.name} href={contact.url}>
            {getIconForContactType(contact.name)}
          </IconButton>
        )
      })}
    </Stack>
  )
}

export default Contacts;
