import { createSelector } from "reselect";

export const selectImage = (state: any) => state.images;

export const selectImageList = createSelector(
  selectImage,
  (images): { id: string; name: string }[] => images.result
);

export const selectNextPage = createSelector(
  selectImage,
  (images): number => images.nextPage
);

export const selectIsLoading = createSelector(
  selectImage,
  (images): boolean => images.isLoading
);
export const selectImageById = (imagesId: string) =>
  createSelector(selectImageList, (list) =>
    list.find((images) => images.id === imagesId)
  );
