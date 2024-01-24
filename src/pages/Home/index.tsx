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

const Home = () => {
  const [volume, setVolume] = useState<number>(0);

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
        <div className="div1"></div>
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
                    fontSize: "12px",
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
            {/* <ShuffleIcon color="#117a37" size={20} /> */}
            <ShuffleIcon color="white" size={20} />
            <BackwardIcon color="white" size={20} />
            <PlayIcon color="white" size={20} />
            <ForwardIcon color="white" size={20} />
            <LoopIcon color="white" size={20} />
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
