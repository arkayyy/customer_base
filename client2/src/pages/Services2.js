import React, { useState } from "react";

import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Card,
  Typography,
  Grid,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const Services2 = () => {
  const [value, setValue] = useState("How many words?");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Customers | Client Portal</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          padding: "30px",
        }}
      >
        <Container maxWidth={false}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ my: "20px" }}>
              Services
            </Typography>
          </div>
            
        </Container>
      </Box>
    </>
  );
};

export default Services2;
