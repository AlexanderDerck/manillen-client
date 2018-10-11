import React from 'react';
import { Grid } from '@material-ui/core';

const Row = ({ item, container, justify='center', alignItems='center', ...injectedProps }) => {
  return (
    <Grid 
      container 
      justify={justify}
      alignItems={alignItems}
      {...injectedProps}
    >
      {injectedProps.children}
    </Grid>
  );
};

export { Row }