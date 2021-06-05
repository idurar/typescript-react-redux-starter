import { createSelector } from "reselect";

export const selectImages = (state: any) => state.images;

export const selectImagesList = createSelector(
  [selectImages],
  (images): any[] => images.result
);
