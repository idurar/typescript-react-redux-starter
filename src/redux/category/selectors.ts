import { createSelector } from "reselect";

export const selectCategory = (state: any) => state.category;

export const selectCategoryList = createSelector(
  selectCategory,
  (category): { id: string; name: string }[] => category.result
);

export const selectCategoryById = (categoryId: string) =>
  createSelector(selectCategoryList, (list) =>
    list.find((category) => category.id == categoryId)
  );
