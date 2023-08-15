import TRAINING_VIDEOS from "./trainingVideos";
import { TrainingActionTypes } from "./training.types";
import { goToVideo } from "./training.utils";

const INITIAL_STATE = {
  trainingVideos: TRAINING_VIDEOS,
  videoIndex: 0
};

const trainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TrainingActionTypes.GO_TO_VIDEO:
      return {
        ...state,
        videoIndex: goToVideo(action.payload, state.trainingVideos)
      };
    default:
      return state;
  }
};

export default trainingReducer;
