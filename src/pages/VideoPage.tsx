import { Player } from "@/components/video/player/Player";
import Upload from "@/components/video/upload/Upload";
import { useVideo } from "@/hooks/useVideo";

const VideoPage = () => {
  const {
    videoInfo,
    videoRef,
    isAllMarker,
    stepTransCode,
    getVideo,
    sectionPlay,
  } = useVideo();
  return (
    <>
      {videoInfo.file === "" && (
        <Upload stepTransCode={stepTransCode} getVideo={getVideo} />
      )}
      {videoInfo.file !== "" && (
        <Player
          url={videoInfo.file}
          videoRef={videoRef}
          isAllMarker={isAllMarker}
          sectionPlay={sectionPlay}
        />
      )}
    </>
  );
};

export default VideoPage;
