import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { getThumbnailUrl, useVideos } from "app/videos/videos.utils";
import { useStyles } from "./Home.styles";

export function Home() {
  const { classes } = useStyles();
  const videos = useVideos();

  return (
    <div className={classes.container}>
      {videos.map((video) => (
        <Card
          key={video.id}
          className={classes.card}
          withBorder
          shadow="md"
          component={Link}
          to={`/video/${video.id}/review`}
          title={video.title}
        >
          <Card.Section>
            <Image src={getThumbnailUrl(video.url)} alt={video.title} />
          </Card.Section>
          <Text className={classes.title}>{video.title}</Text>
        </Card>
      ))}
    </div>
  );
}
