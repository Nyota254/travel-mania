import "./App.css";

/* Material Ui Import */
import { CssBaseline, Grid } from "@material-ui/core";

/* Components Import */
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

/* End components import */

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
