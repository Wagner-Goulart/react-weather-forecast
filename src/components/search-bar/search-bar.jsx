/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./search-bar.styles.css";
import { useContext, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CityContext } from "../../contexts/cityContext";

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

  const handleKeyPress = (e) => {

    if(!value) {
      return
    }

    if(e.key === "Enter"){
      try{
        const fetchCity =  async()=> {
          const response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=4cb5a31adc4fff6205dbb26aa82448a3`)
  
          const data = await response.json()
          setCity(data)
      
        }
        fetchCity()
        setValue('')

      }catch (e) {

        console.error ("ERRO AO TENTAR BUSCA AS INFORMAÇÕES NA API " + e)
      }

      
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
