import { createSelector } from "reselect";

export const selectImage = (state: any) => state.images;

export const selectImageList = createSelector(
  selectImage,
  (images): { id: string; name: string }[] => images.result
);

export const selectImageById = (imagesId: string) =>
  createSelector(selectImageList, (list) =>
    list.find((images) => images.id == imagesId)
  );
