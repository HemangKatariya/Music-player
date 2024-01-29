import React, { useState } from "react";
import "./home.css";
import ShuffleIcon from "../../components/Icons/ShuffleIcon";
import ForwardIcon from "../../components/Icons/ForwardIcon";
import BackwardIcon from "../../components/Icons/BackwardIcon";
import PlayIcon from "../../components/Icons/PlayIcon";
import LoopIcon from "../../components/Icons/LoopIcon";
import VolumeMedium from "../../components/Icons/VolumeMedium";
import VolumeHigh from "../../components/Icons/VolumeHigh";
import VolumeLow from "../../components/Icons/VolumeLow";
import VolumeOff from "../../components/Icons/VolumeOff";
import PauseIcon from "../../components/Icons/PauseIcon";

const Home = () => {
  const [volume, setVolume] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [loop, setLoop] = useState<boolean>(false);

  let volumeIcon;
  if (volume === 0) {
    volumeIcon = <VolumeOff color="white" size={15} />;
  } else if (volume > 0 && volume < 30) {
    volumeIcon = <VolumeLow color="white" size={15} />;
  } else if (volume >= 30 && volume < 55) {
    volumeIcon = <VolumeMedium color="white" size={20} />;
  } else {
    volumeIcon = <VolumeHigh color="white" size={20} />;
  }

  return (
    <>
      <div className="main">
        <div className="div1 start">
          <div className="box_recent">
            <div
              className="flex2"
              style={{ backgroundColor: "#363434", gap: "10px" }}
            >
              <div className="recent_image"></div>
              <div>
                <div
                  className="text"
                  style={{
                    backgroundColor: "#363434",
                    color: "white",
                    fontSize: "17px",
                    fontWeight: "600",
                    padding: "3px",
                  }}
                >
                  name of the song
                </div>
                <div
                  className="text"
                  style={{
                    backgroundColor: "#363434",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "100",
                    padding: "3px",
                  }}
                >
                  author name
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div2"></div>
      </div>
      <div className="div3">
        <div>
          <div className="box">
            <div className="box_content">
              <div className="Image"></div>
              <div>
                <div
                  className="text"
                  style={{
                    margin: "10px",
                    fontSize: "17px",
                    fontWeight: "600",
                  }}
                >
                  hello world. the name of world is my kingdom
                </div>
                <div
                  className="text"
                  style={{
                    margin: "10px",
                    fontSize: "13px",
                    color: "grey",
                  }}
                >
                  name of author and singer the king
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="NavigatorIcons">
            <div>
              {shuffle == false ? (
                <div onClick={() => setShuffle(true)}>
                  <ShuffleIcon color="white" size={20} />
                </div>
              ) : (
                <div onClick={() => setShuffle(false)}>
                  <ShuffleIcon color="#117a37" size={20} />
                </div>
              )}
            </div>
            <div>
              <BackwardIcon color="white" size={20} />
            </div>
            <div>
              {play == false ? (
                <PlayIcon color="white" size={20} />
              ) : (
                <PauseIcon color="white" size={20} />
              )}
            </div>
            <div>
              <ForwardIcon color="white" size={20} />
            </div>
            <div>
              {loop == false ? (
                <div onClick={() => setLoop(true)}>
                  <LoopIcon color="white" size={20} />
                </div>
              ) : (
                <div onClick={() => setLoop(false)}>
                  <LoopIcon color="#117a37" size={20} />
                </div>
              )}
            </div>
          </div>
          <div style={{ marginTop: "1em" }}>
            <input type="range" min="0" max="100" step="1" />
          </div>
        </div>
        <div className="flex" style={{ gap: "15px" }}>
          <label>{volumeIcon}</label>
          <input
            type="range"
            min="0"
            value={volume}
            max="100"
            step="1"
            onChange={(event) => {
              setVolume(Number(event.target.value));
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
