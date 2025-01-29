// React
import React from "react";
// React
// CSS
import styles from "./Spinner.module.css";
// CSS

// Constants
import { constants } from "../../Constants/constants";
// Constants

type SpinnerProps = {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  spanClass?: string;
};

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  className,
  color,
  style,
}) => {
  return (
    <span
      className={`${styles.spinnerContianer} `}
      style={{
        background: color || constants.themeColor,
        ...style,
      }}
    >
      <span
        className={`${styles.loader} ${className} align-items-center justify-content-center flex`}
      ></span>
    </span>
  );
};

export default Spinner;
