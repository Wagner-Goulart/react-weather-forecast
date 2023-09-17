/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fdac47",
    }
  },
});

export default function LinearDeterminate(props) {
  let [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(props.value);
  }, [props.value]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "80%" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </ThemeProvider>
  );
}
