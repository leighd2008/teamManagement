import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { goToVideo } from "../../redux/training/training.actions";

import NewDOC from "../../components/newdoc/newdoc";

import "./training.scss";

import {
  selectTrainingVideos,
  selectVideoIndex
} from "../../redux/training/training.selectors";

const Training = ({ trainingVideos, goToVideo, videoIndex }) => {
  const { video } = trainingVideos[videoIndex];
  const { instructions } = trainingVideos[videoIndex];

  return (
    <div className="training">
      <NewDOC />
      <h4 className="description">We can link to any training videos you have available.</h4>
      <h1 className="training-title"> Training Videos</h1>
      <div className="videodisplay">
        <div className="youtube">
          <div className="iframe-container">
            <iframe
              src={video}
              width="1425"
              height="559"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
            <button
              aria-label="previous video"
              onClick={goToVideo.bind(this, videoIndex - 1)}
            >
              Previous
            </button>
            <button
              aria-label="next video"
              onClick={goToVideo.bind(this, videoIndex + 1)}
            >
              Next
            </button>
          </div>
            <div className="instructions">{instructions}</div>
        </div>
        <div className="videolist">
          <ul>
            <li className="videolinks" onClick={goToVideo.bind(this, 0)}><h4>HOW TO THROW A SOFTBALL</h4>
            </li>
            <li>Daily Workouts</li>
            <ul>
              <li className="videolinks" onClick={goToVideo.bind(this, 1)}>Tee Work
                <span className="instructions">

                </span>
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 2)}>
                Shoulder Exercises for Fastpitch Softball Players
                </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 3)}>
                  Foundation exercises for Fastpitch softball pitchers
                </li>
            </ul>
            <li>Training with Mike Candrea</li>
            <ul>
              <li className="videolinks" onClick={goToVideo.bind(this, 4)}>
                Pitching
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 5)}>
                Fielding Fly Balls
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 6)}>
                Fielding Groundballs
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 7)}>
                Improving as a Catcher
              </li>
            </ul>
            <li>
              USA SOFTBALL Infield Position Play
              <ul>
                <li className="videolinks" onClick={goToVideo.bind(this, 8)}>
                  Introduction
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 9)}>
                  ShortStop
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 10)}>
                  Second Base
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 11)}>
                  Receiving throws
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 12)}>
                  Third Base
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 13)}>
                  First Base
                </li>
              </ul>
            </li>
            <li>
              Warm Up Drills
              <ul>
                <li className="videolinks" onClick={goToVideo.bind(this, 14)}>
                  Warm Up Throwing
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  trainingVideos: selectTrainingVideos,
  videoIndex: selectVideoIndex
});

const mapDispatchFromProps = dispatch => ({
  goToVideo: videoIndex => dispatch(goToVideo(videoIndex))
});

export default connect(mapStateToProps, mapDispatchFromProps)(Training);
