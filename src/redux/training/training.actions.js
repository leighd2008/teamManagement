import { TrainingActionTypes } from "./training.types";

export const goToVideo = videoIndex => ({
  type: TrainingActionTypes.GO_TO_VIDEO,
  payload: videoIndex
});
