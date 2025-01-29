// Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Redux

// Handlers
import {
  setIsDone,
  setIsError,
  setIsPending,
} from "../../Handlers/ReduxAsyncHelperHandlers";
import { I_ReduxAsyncBasicType } from "../../Handlers/ReduxAsyncHelperHandlers";
// Handlers

// Models
import { T_SendingDataForGettingContents } from "../../../../Interfaces/__SENDING__DATA__SCHEMA__/Contents/ContentsSendingData";
import { I_Content } from "../../../../Interfaces/Contents/ContentsInterface";
// Models

// Services
import { getContentsService } from "../../../../Services/Content/get/getContentsService";
// Services

const initialState: {
  allContents: I_ReduxAsyncBasicType & {
    data: I_Content[];
  };
} = {
  allContents: {
    isDone: false,
    isError: false,
    isPending: false,
    data: [],
  },
};

export const getAsyncAllContents = createAsyncThunk(
  "contents/getAllContents",
  async (_data: T_SendingDataForGettingContents) => {
    try {
      const { data } = await getContentsService(_data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const ContentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //
    //
    //
    //
    //
    //
    builder.addCase(getAsyncAllContents.pending, (state) => {
      setIsPending(state.allContents);
    });
    builder.addCase(getAsyncAllContents.fulfilled, (state, action) => {
      setIsDone(state.allContents);
      state.allContents.data = action.payload.data;
    });
    builder.addCase(getAsyncAllContents.rejected, (state) => {
      setIsError(state.allContents);
    });
    //
    //
    //
    //
    //
    //
  },
});
