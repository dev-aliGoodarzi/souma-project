// React
import React from "react";
// React

// CSS
import styles from "./Home.module.css";
// CSS

// Styled Component
import { Container as _Container } from "./../../Components/StyledComponents/StyledComponents";
// Styled Component

// Components
import HomePageFilterForm from "./HomePageFilterForm/HomePageFilterForm";
import HomePageDataViewer from "./HomePageDataViewer/HomePageDataViewer";
// Components

const Container = _Container();

const Home = () => {
  return (
    <Container
      className={`${styles.homeContainer} rtl`}
      flexDirection={window.innerWidth < 800 ? "column" : "row"}
      width="100%"
    >
      <HomePageFilterForm />
      <HomePageDataViewer />
    </Container>
  );
};

export default Home;
