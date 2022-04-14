import { MOCK_VIDEOS_FOR_REVIEW } from "app/home/Home.helpers";
import { Video } from "./videos.types";

/**
 * @param id
 * @returns The Video object with the given id
 */
export function useVideo(id?: Video["id"]) {
  if (!id) {
    return undefined;
  }

  return MOCK_VIDEOS_FOR_REVIEW.find((video) => video.id === id);
}
