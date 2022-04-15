import { useEffect, useState } from "react";
import { useGetVideos } from "./videos.api";
import { Video } from "./videos.types";

/**
 * @param youtubeUrl
 * @returns The ID of the Youtube video given the URL
 */
function getVideoId(youtubeUrl: string) {
  try {
    const videoId = new URL(youtubeUrl).searchParams.get("v");
    return videoId;
  } catch {
    return undefined;
  }
}

/**
 * @param youtubeUrl Assumed to be the direct link to the Youtube video
 * @returns The URL for embedding the given Youtube video
 */
export function getEmbedUrl(youtubeUrl: string) {
  const videoId = getVideoId(youtubeUrl);

  return videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}`
    : undefined;
}

/**
 *
 * @param youtubeUrl Assumed to be the direct link to the Youtube video
 * @returns The URL to the default thumbnail
 */
export function getThumbnailUrl(youtubeUrl: string) {
  const videoId = getVideoId(youtubeUrl);

  return videoId
    ? `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
    : undefined;
}

/**
 * @returns The list of sorted videos for review
 */
export function useVideos() {
  const videos = useGetVideos();
  const [list, setList] = useState<Video[]>([]);

  useEffect(() => {
    const items = videos.slice().sort((a, b) => b.id - a.id);
    setList(items);
  }, [videos]);

  return list;
}
