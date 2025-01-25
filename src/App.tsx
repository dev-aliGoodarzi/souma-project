// React
import React from "react";
// React

// CSS
import "./Global.css";
// CSS

// StyledComponents
import {
  LayoutContainer,
  WithMdPadding,
} from "./Components/StyledComponents/StyledComponents";
// StyledComponents

// Components
import Header from "./Components/CommonComponents/Header/Header";
import Footer from "./Components/CommonComponents/Footer/Footer";
// Components

// Router
import Router from "./Routes/Router";
// Router

const App = () => {
  return (
    <LayoutContainer>
      <WithMdPadding>
        <Header />

        {/*  */}
        {/*  */}

        <Router />

        {/*  */}
        {/*  */}

        <Footer />
      </WithMdPadding>
    </LayoutContainer>
  );
};

export default App;
