// React
import React from "react";
// React

// CSS
import styles from "./HomePageSlider.module.css";
// CSS

// Components
import Slider from "../../../../Components/CommonComponents/Slider/Slider";
import { useReduxSelector } from "../../../../StateManagement/ReduxToolkit/Store/Store";
import { SliderCard } from "./SliderCard/SliderCard";
import { WithMdPadding } from "../../../../Components/StyledComponents/StyledComponents";
// Components

const HomePageSlider = () => {
  const { data, isDone, isError, isPending } = useReduxSelector(
    (state) => state.contents.allContents
  );

  return (
    <WithMdPadding className="relative w-full" padding="0px 8px">
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
