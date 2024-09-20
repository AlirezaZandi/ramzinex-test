import { SerializedError } from "@reduxjs/toolkit";

export type ApiStatus =
  | "idle"
  | "loading"
  | "refetching"
  | "succeeded"
  | "failed";

export type ApiCallResponse<ResponseBody> = {
  status: ApiStatus;
  error: string | null | SerializedError;
  data: ResponseBody | null;
};
