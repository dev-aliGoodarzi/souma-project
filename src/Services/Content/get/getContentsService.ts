// Axios
import { _axios } from "../../__BaseConfig__/_axios/_axios";
// Axios

// Models
import { T_SendingDataForGettingContents } from "../../../Interfaces/__SENDING__DATA__SCHEMA__/Contents/ContentsSendingData";
import { AxiosResponse } from "axios";
import { I_Content } from "../../../Interfaces/Contents/ContentsInterface";
// Models

export const getContentsService = (
  _data: T_SendingDataForGettingContents
): Promise<
  AxiosResponse<{
    data: I_Content[];
  }>
> => {
  return _axios.post(
    "https://mehrapi.souma-p.ir/api/v1/Content/get-contents",
    _data
  );
};
