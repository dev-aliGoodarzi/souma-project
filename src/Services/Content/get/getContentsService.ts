// Axios
import { _axios } from "../../__BaseConfig__/_axios/_axios";
// Axios

// Models
import { T_SendingDataForGettingContents } from "../../../Interfaces/__SENDING__DATA__SCHEMA__/Contents/ContentsSendingData";
// Models

// Functions
import { createBodyOfRequestForUrlIncluded } from "../../__BaseConfig__/_axios/createBodyOfRequestForUrlIncluded";
// Functions

export const getContentsService = (_data: T_SendingDataForGettingContents) => {
  return _axios.post(
    `
    // api - the api isnt work .
    i just implement it to show you , how i code ;)
    `,
    createBodyOfRequestForUrlIncluded(_data)
  );
};
