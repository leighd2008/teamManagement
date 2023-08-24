import { createSelector } from "reselect";

const selectTraining = state => state.training;

export const selectTrainingVideos = createSelector(
  [selectTraining],
  training => training.trainingVideos
);

export const selectVideoIndex = createSelector(
  [selectTraining],
  videoIndex => videoIndex.videoIndex
);
