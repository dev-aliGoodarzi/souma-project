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
import HomePageDataViewer from "./HomePageDataViewer/HomePageDataViewer";
// Components

const Container = _Container();

const Home = () => {
  return (
    <Container
      className={`${styles.homeContainer} rtl`}
      flexDirection={"column"}
      maxWidth={"1280px"}
      alignItems="center"
    >
      <HomePageDataViewer />
    </Container>
  );
};

export default Home;
