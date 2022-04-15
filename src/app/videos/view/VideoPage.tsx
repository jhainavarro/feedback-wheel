import {
  Anchor,
  Blockquote,
  Button,
  Container,
  Loader,
  Progress,
  Text,
  Title,
} from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useGetVideo } from "../videos.api";
import { getEmbedUrl } from "../videos.utils";
import { useStyles } from "./VideoPage.styles";

export function VideoPage() {
  const params = useParams();
  const { data: video, isLoading } = useGetVideo(Number(params.id));
  const { classes } = useStyles();

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <Loader variant="dots" />
      </div>
    );
  }

  if (!params.id || !video) {
    return (
      <div>
        <Title order={3}>Nothing to see here</Title>
        <Anchor component={Link} to="/home">
          Check out other videos
        </Anchor>
      </div>
    );
  }

  return (
    <Container style={{ height: "100%" }}>
      <iframe
        width="280"
        height="400"
        src={getEmbedUrl(video.url)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={classes.video}
      ></iframe>

      <Text className={classes.title}>{video.title}</Text>
      <Text>{video.submittedBy.name}</Text>

      {video.reviews.length && (
        <div className={classes.reviewsSection}>
          <div className={classes.reviewsHeader}>
            <Title order={2}>Reviews (24)</Title>
            <Button
              component={Link}
              to={`/video/${video.id}/review`}
              size="md"
              variant="light"
            >
              Add a review
            </Button>
          </div>

          {/* TODO: Get actual stats */}
          <div className={classes.statsContainer}>
            <Text>Attention Grabbing</Text>
            <Progress size="sm" value={75} />
            <div></div>
            <Text>Storytelling</Text>
            <Progress size="sm" value={60} />

            <Text>Audio Quality</Text>
            <Progress size="sm" value={70} />
            <div></div>
            <Text>Video Quality</Text>
            <Progress size="sm" value={65} />

            <Text>{`Music & Scoring`}</Text>
            <Progress size="sm" value={50} />
            <div></div>
            <Text>{`Length & Pacing`}</Text>
            <Progress size="sm" value={60} />

            <Text>Packaging</Text>
            <Progress size="sm" value={80} />
          </div>

          <div className={classes.quotes}>
            <Blockquote>Cool editing!</Blockquote>

            <Blockquote>
              Really liked how the video captured the essence of the lesson here
            </Blockquote>

            <Blockquote>Maybe you can shorten the intro a bit?</Blockquote>
          </div>

          <Button variant="subtle">View all reviews</Button>
        </div>
      )}

      {video.reviews.length === 0 && (
        <Anchor component={Link} to={`/video/${video.id}/review`}>
          Be the first one to review!
        </Anchor>
      )}
    </Container>
  );
}
