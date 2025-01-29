// React
import React, { useCallback } from "react";
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

import HomePageSlider from "./HomePageSlider/HomePageSlider";
// Components

// Redux
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../StateManagement/ReduxToolkit/Store/Store";
import { useDebounce } from "../../../Hooks/useDebounce";
import { getAsyncAllContents } from "../../../StateManagement/ReduxToolkit/Slices/ContentsSlice/ContentsSlice";
import PendingAndErrorManager from "../../../Components/CommonComponents/PendingAndErrorManager/PendingAndErrorManager";
// Redux

const Container = _Container();

const HomePageDataViewer = () => {
  const dispatch = useReduxDispatch();

  const { isDone, isError, isPending } = useReduxSelector(
    (state) => state.contents.allContents
  );

  const dataGetter = useCallback(() => {
    dispatch(
      getAsyncAllContents({
        contentType: 2,
        skip: 0,
        take: 5,
        contentSearch: undefined,
        sourceTypeId: undefined,
        fromDate: undefined,
        toDate: undefined,
        visitCountMax: undefined,
        visitCountMin: undefined,
        isActive: true,
        includeFile: true,
      })
    );
  }, [dispatch]);

  useDebounce(1, dataGetter);

  return (
    <Container
      className={`${styles.homepageDataViewerContainer}`}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <PendingAndErrorManager
        isDone={isDone}
        isError={isError}
        isPending={isPending}
        onError={dataGetter}
        showAfterDone={
          <>
            <FullWidthText className="pr-6 !my-8">مهرتحلیل</FullWidthText>

            <HomePageSlider />

            <FullWidthText className="pr-6 !my-8">مهرتحلیل</FullWidthText>

            <HomePageSlider />
          </>
        }
      />
    </Container>
  );
};

export default HomePageDataViewer;
