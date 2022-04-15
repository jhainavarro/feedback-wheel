import { Card, Image, Loader, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getThumbnailUrl, useGetVideos, useVideos } from "app/videos";
import { useStyles } from "./Home.styles";

export function Home() {
  const { classes, cx } = useStyles();
  const { data, isLoading } = useGetVideos();
  const videos = useVideos(data ?? []);

  // Initialize animation
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (videos.length > 0) {
      setTimeout(() => {
        setIsMounted(true);
      }, 500);
    }
  }, [videos]);
  return (
    <>
      {isLoading && (
        <div className={classes.loading}>
          <Loader variant="dots" />
        </div>
      )}

      {/* TODO: Error state */}
      {videos.length > 0 && (
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
                <Image
                  src={getThumbnailUrl(video.url)}
                  alt={video.title}
                  withPlaceholder
                  width={320}
                  height={180}
                />
              </Card.Section>
              <Text className={classes.title}>{video.title}</Text>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
