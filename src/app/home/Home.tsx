import { Anchor } from "@mantine/core";
import { Link } from "react-router-dom";
import { MOCK_VIDEOS_FOR_REVIEW } from "./Home.helpers";

export function Home() {
  const videos = MOCK_VIDEOS_FOR_REVIEW;

  return (
    <>
      {videos.map((video) => (
        <div key={video.id}>
          <Anchor component={Link} to={`/video/${video.id}/review`}>
            Review video #{video.id}
          </Anchor>
        </div>
      ))}
    </>
  );
}
