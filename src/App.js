import React from "react";
import images from "./images";
import "./assets/main.css";
import ImageGallery from "./components/ImageGallery";
import FullSize from "./components/FullSize";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home title="CCL Images" />} />
          <Route
            exact
            path="/desktopheros"
            component={() => (
              <ImageGallery
                images={images.desktopHeros}
                title="Desktop Heros"
              />
            )}
          />
          <Route
            exact
            path="/desktopbtiles"
            component={() => (
              <ImageGallery
                images={images.desktopBTiles}
                title="Desktop B Tiles"
              />
            )}
          />
          <Route exact path="/view" component={FullSize} />
          <Route
            exact
            path="/mobileheros"
            component={() => (
              <ImageGallery images={images.mobileHeros} title="Mobile Heros" />
            )}
          />
          <Route
            exact
            path="/mobilebtiles"
            component={() => (
              <ImageGallery
                images={images.mobilebtiles}
                title="Mobile B Tiles"
              />
            )}
          />
          <Route
            exact
            path="/mobilesticky"
            component={() => (
              <ImageGallery
                images={images.mobilesticky}
                title="Mobile Sticky"
              />
            )}
          />
          <Route
            exact
            path="/cruisedeals"
            component={() => (
              <ImageGallery images={images.cruisedeals} title="Cruise Deals" />
            )}
          />
          <Route
            exact
            path="/tgopop"
            component={() => (
              <ImageGallery images={images.tgopopup} title="TGO Pop Up" />
            )}
          />
          <Route
            exact
            path="/searchbanners"
            component={() => (
              <ImageGallery
                images={images.searchbanners}
                title="Search Banners"
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
