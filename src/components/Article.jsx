import { Grid, Typography, Divider } from "@mui/material";
import React from "react";

/* eslint-disable react/prop-types */
export default function Article({ author, title, content, date, tags }) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Typography variant="h6">{`${date} - ${author}`}</Typography>
      {tags.map((tag, index) => (
        <React.Fragment key={index}>
          <Typography color={"primary"} sx={{ display: "inline" }}>{tag}</Typography>
          {index < tags.length - 1 && <span>, </span>}
        </React.Fragment>
      ))}
      <Divider />
      <Typography justifyContent={true}>{content}</Typography>
      <Divider />
    </Grid>
  );
}
