// React
import React from "react";
// React

// CSS
import styles from "./HomePageSlider.module.css";
// CSS

// Components
import Slider from "../../../../Components/CommonComponents/Slider/Slider";
import { SliderCard } from "./SliderCard/SliderCard";
import { WithMdPadding } from "../../../../Components/StyledComponents/StyledComponents";
// Components

// Redux
import { useReduxSelector } from "../../../../StateManagement/ReduxToolkit/Store/Store";
// Redux

const HomePageSlider = () => {
  const { data } = useReduxSelector((state) => state.contents.allContents);

  return (
    <WithMdPadding
      className={`${styles.homepageSliderContent} relative w-full`}
      padding="0px 8px"
    >
      <Slider
        containerClassName="w-full"
        slides={data.map((item) => (
          <React.Fragment key={item.id}>
            <SliderCard
              date={item.publishDate}
              description={item.brief}
              imgSrc={item.fileContent}
              title={item.title}
              views={item.visitCount}
            />
          </React.Fragment>
        ))}
      />
    </WithMdPadding>
  );
};

export default HomePageSlider;
