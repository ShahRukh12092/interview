import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  cardGrid: {
    padding: "25px 0px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
  },
  media: {
    paddingTop: "56.25%",
  },
  click: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
}));

export default useStyle;
