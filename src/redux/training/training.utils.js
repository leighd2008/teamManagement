export const goToVideo = (index, trainingVideos) => {
  let videoIndex = index;
  if (videoIndex < 0) {
    videoIndex = trainingVideos.length - 1;
    return videoIndex;
  } else if (videoIndex >= trainingVideos.length) {
    videoIndex = 0;
    return videoIndex;
  }
  return videoIndex;
};
