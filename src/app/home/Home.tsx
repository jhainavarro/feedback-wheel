import { Card, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getThumbnailUrl, useVideos } from "app/videos";
import { useStyles } from "./Home.styles";

export function Home() {
  const { classes, cx } = useStyles();
  const videos = useVideos();

  // Initialize animation
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 500);
  }, []);

  return (
    <div className={classes.container}>
      {videos.map((video) => (
        <Card
          key={video.id}
          className={cx(classes.card, { mounted: isMounted })}
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
