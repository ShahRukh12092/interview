import list from "./data";
import { useState } from "react";
import {
  CssBaseline,
  Typography,
  Card,
  Container,
  CardContent,
  Grid,
  Stack,
  CardActions,
} from "@mui/material";
import useStyle from "./Style";
const data = ["#BBDEFB", "#00796B", "#E1F5FE", "#FBE9E7", "#E0E0E0", "#795548"];
console.log(Math.floor(Math.random() * data.length));
function App() {
  const classes = useStyle();
  const [color, setcolor] = useState(false);
  const [num, setnum] = useState(0);
  const handleclick = () => {
    setcolor(true);
    setnum(Math.floor(Math.random() * data.length));
  };
  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="ms">
        <Grid container spacing={4} className={classes.MGrid}>
          {list.map((idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <Card
                className={classes.card}
                style={{
                  backgroundColor: `${
                    data[Math.floor(Math.random() * data.length)]
                  }`,
                }}
              >
                <CardContent>
                  <Stack
                    sx={{ pt: 3 }}
                    direction="row"
                    spacing={2}
                    justifyContent="space-around"
                  >
                    <h2 style={{ color: `${idx.primary}` }}>{idx.Title}</h2>{" "}
                    <button
                      style={{
                        outline: "none",
                        color: `${idx.primary}`,
                        cursor: "pointer",
                        border: "none",
                        padding: "0",
                        background: "none",
                      }}
                      onClick={() => handleclick()}
                    >
                      change color
                    </button>
                  </Stack>
                </CardContent>
                <CardActions className={classes.click}>
                  <Typography variant="h5">{idx.subtile}</Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>{" "}
    </>
  );
}

export default App;
