import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./search-bar.styles.css"

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6165f7",
    }
  },
});

export default function SearchBar() {
    
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <TextField style={{width:"500px"}} id="outlined-basic" label="Country" variant="outlined" />
      </Box>
      </ThemeProvider>
  );
}

export { SearchBar };
