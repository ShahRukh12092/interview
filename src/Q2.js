import list1 from "./data1";
import { useState, useEffect } from "react";
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
  const [num, setnum] = useState(0);
  const handleclick = (idx) => {
    const obj = {
      Title: `Title${list1.length + 1}`,
      primary: `#A43${list1.length + 1}${list1.length + 1}B`,
      subtile: "Subtitle",
    };
    setnum(num + 1);
    list1.push(obj);
    console.log(list1.length);
  };

  useEffect(() => {}, [num]);
  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="ms">
        <Grid container spacing={4} className={classes.MGrid}>
          {list1.map((idx) => (
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
                      onClick={() => handleclick(idx)}
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
          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleclick()}
              className={classes.card}
              style={{
                backgroundColor: "#E0F7FA",
              }}
            >
              <Typography
                variant="h2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  marginTop: "20%",
                }}
              >
                ADD CARD
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>{" "}
    </>
  );
}

export default App;
