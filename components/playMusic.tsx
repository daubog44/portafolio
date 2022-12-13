import { useState, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Sound = () => {
  const [IsPlaying, setIsPlaying] = useState(false);
  const [audio, _] = useState(
    new Audio(
      "https://dl.dropboxusercontent.com/s/9h90r7ku3df5o9y/long-day.mp3?dl=0"
    )
  );
  const [canPlay, setCanPlay] = useState(false);
  useEffect(() => {
    const canPlay = audio.canPlayType("audio/mp3");
    if (canPlay === "maybe" || canPlay === "probably") {
      setCanPlay(true);
    }
  }, []);

  const onPlayButtonClick = () => {
    audio.play();
    setIsPlaying(true);
  };
  const onStopButtonClick = () => {
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      {canPlay && (
        <div className="absolute top-12 left-12 w-14 h-14 rounded-full bg-white flex justify-center items-center">
          {!IsPlaying ? (
            <button
              onClick={onPlayButtonClick}
              className="h-full w-full flex justify-center items-center"
            >
              <BsFillPlayFill className="h-full w-full" />
            </button>
          ) : (
            <button
              onClick={onStopButtonClick}
              className="h-full w-full flex justify-center items-center"
            >
              <BsPauseFill className="h-full w-full" />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Sound;
