/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./search-bar.styles.css";
import { useContext, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CityContext } from "../../contexts/cityContext";
import {  fetchCityService } from "../../services/fetchCityService";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6165f7",
    }
  },
});

export default function SearchBar() {
  
  const { setCity } = useContext(CityContext)
  const [ value, setValue] = useState('')

  const handleChange = (e)=> {
    setValue(e.target.value)
  }

  const handleKeyPress = async (e) => {

    if(!value) {
      return
    }

    if(e.key === "Enter"){

      const city = await fetchCityService(value)
      setCity(city)
      setValue('')

    }
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <TextField style={{width:"500px"}} id="outlined-basic" label="Country" variant="outlined" onChange={handleChange} onKeyDown={handleKeyPress} value={value} />
      </Box>
      </ThemeProvider>
  );
}

export { SearchBar }
