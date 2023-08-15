import { createSelector } from "reselect";

const selectTraining = state => state.training;
// const selectVideo = state => state.videoIndex;

export const selectTrainingVideos = createSelector(
  [selectTraining],
  training => training.trainingVideos
);

export const selectVideoIndex = createSelector(
  [selectTraining],
  videoIndex => videoIndex.videoIndex
);
