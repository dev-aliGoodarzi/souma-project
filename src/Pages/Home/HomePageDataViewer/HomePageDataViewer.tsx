// React
import React from "react";
// React

// CSS
import styles from "./HomePageDataViewer.module.css";
// CSS

// Styled Component
import {
  Container as _Container,
  FullWidthText,
} from "../../../Components/StyledComponents/StyledComponents";
// Styled Component

const Container = _Container();

type T_HomePageDataViewerProps = {};

const HomePageDataViewer: React.FunctionComponent<
  T_HomePageDataViewerProps
> = () => {
  return (
    <Container className={`${styles.homepageDataViewerContainer}`}>
      <FullWidthText className="" marginT="32px">
        خبرنامه
      </FullWidthText>
    </Container>
  );
};

export default HomePageDataViewer;
