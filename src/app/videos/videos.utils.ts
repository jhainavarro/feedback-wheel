import { useEffect, useState } from "react";
import { useGetVideos } from "./videos.api";
import { Video } from "./videos.types";

/**
 * @param youtubeUrl
 * @returns The ID of the Youtube video given the URL
 */
function getVideoId(youtubeUrl: string) {
  // TODO: Validation; exception handling
  const videoId = new URL(youtubeUrl).searchParams.get("v");
  return videoId;
}

/**
 * @param youtubeUrl Assumed to be the direct link to the Youtube video
 * @returns The URL for embedding the given Youtube video
 */
export function getEmbedUrl(youtubeUrl: string) {
  return `https://www.youtube-nocookie.com/embed/${getVideoId(youtubeUrl)}`;
}

/**
 *
 * @param youtubeUrl Assumed to be the direct link to the Youtube video
 * @returns The URL to the default thumbnail
 */
export function getThumbnailUrl(youtubeUrl: string) {
  return `https://i.ytimg.com/vi/${getVideoId(youtubeUrl)}/mqdefault.jpg`;
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
