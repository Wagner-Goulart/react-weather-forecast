import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./search-bar.styles.css";
import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6165f7",
    }
  },
});

export default function SearchBar() {
  const [value, setValue] = useState('');
  
  const handleChange = (e)=> {
    setValue(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      console.log(value)
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
