import {
  Alert,
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
import { ReactComponent as Eyes } from "shared/assets/eyes.svg";
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

  const canViewReviews = false; // TODO
  const canAddReview = false; // TODO

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

      {video.reviews.length > 0 && (
        <div className={classes.reviewsSection}>
          <div className={classes.reviewsHeader}>
            <Title order={2}>Reviews (24)</Title>
            {canAddReview && (
              <Button
                component={Link}
                to={`/video/${video.id}/review`}
                size="md"
                variant="light"
              >
                Add a review
              </Button>
            )}
          </div>

          {canViewReviews && (
            <>
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

              {/* TODO: Get maybe some overall comments */}
              <div className={classes.quotes}>
                <Blockquote>Cool editing!</Blockquote>

                <Blockquote>
                  Really liked how the video captured the essence of the lesson
                  here
                </Blockquote>

                <Blockquote>Maybe you can shorten the intro a bit?</Blockquote>
              </div>

              {/* TODO: Show a nice list of the reviews */}
              <Button variant="subtle">View all reviews</Button>
            </>
          )}

          {!canViewReviews && (
            <>
              <Alert
                icon={<Eyes className={classes.eyesIcon} />}
                className={classes.needMoreReviews}
                title="Wanna see what people say about your content?"
                color="orange"
              >
                <Text>
                  You already submitted 1 review to the community so far.
                </Text>
                <Text>
                  Try{" "}
                  <Anchor component={Link} to="/home">
                    submitting 1 or 2 more
                  </Anchor>{" "}
                  to start seeing how other content creators are liking your
                  video!
                </Text>
                <Text>Let's help each other out!</Text>
              </Alert>
            </>
          )}
        </div>
      )}

      {canAddReview && video.reviews.length === 0 && (
        <div className={classes.noReviews}>
          <Button
            component={Link}
            to={`/video/${video.id}/review`}
            size="md"
            variant="light"
          >
            Be the first one to leave a review!
          </Button>
        </div>
      )}
    </Container>
  );
}
