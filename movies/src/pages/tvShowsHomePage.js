import React from "react";
import Grid from "@mui/material/Grid2";

const TVShowsHomePage = (props) => {
  const shows = props.shows;
    
  return (
  <Grid container>
      <Grid size={12}>
          <h1> HomePage </h1>
      </Grid>
    </Grid>
  );
};
export default TVShowsHomePage;