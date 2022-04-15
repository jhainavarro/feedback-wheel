import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddVideoInput, EditVideoInput, Video } from "./videos.types";
import { getVideoMetadata } from "./videos.utils";

export const VIDEOS_KEY = "videos";

/**
 * @returns The list of videos in the data storage
 */
function getStoredVideos() {
  const stored = localStorage.getItem(VIDEOS_KEY);
  const list: Video[] = JSON.parse(stored ?? "[]");

  return list;
}

/**
 * @returns The list of videos up for review
 */
export function useGetVideos() {
  return useQuery(VIDEOS_KEY, () => {
    return new Promise<Video[]>((resolve) => {
      setTimeout(() => {
        resolve(getStoredVideos());
      }, 2000);
    });
  });
}

/**
 * @param id
 * @returns The Video object with the given id
 */
export function useGetVideo(id: Video["id"]) {
  return useQuery([VIDEOS_KEY, id], () => {
    return new Promise<Video | undefined>((resolve) => {
      setTimeout(() => {
        resolve(getStoredVideos().find((video) => video.id === id));
      }, 2000);
    });
  });
}

/**
 * Adds the submitted video to the list of available ones for review
 *
 * @param input
 * @returns The new Video
 */
async function addVideo(input: AddVideoInput) {
  try {
    const stored = getStoredVideos();
    const { title } = await getVideoMetadata(input.url);
    const newVideo: Video = {
      ...input,
      id: Date.now(), // Just for simplicity
      title,
      reviews: [],
    };

    // TODO: Check for duplicates -- by URL + video ID maybe?
    const newList = stored.concat(newVideo);

    localStorage.setItem(VIDEOS_KEY, JSON.stringify(newList));

    return newVideo;
  } catch (e) {
    console.error(e);
    throw new Error("Unable to save video for review");
  }
}

/**
 * Updates a video that's up for review
 *
 * @param input
 * @returns The updated Video
 */
async function updateVideo(input: EditVideoInput) {
  try {
    const list = getStoredVideos();
    const videoIndex = list.findIndex((v) => v.id === input.id);

    if (videoIndex === -1) {
      throw new Error("Unable to find video to update");
    }

    const video = list[videoIndex];
    const newVideo: Video = {
      ...video,
      ...input,
    };

    list.splice(videoIndex, 1, newVideo);
    window.localStorage.setItem(VIDEOS_KEY, JSON.stringify(list));

    return newVideo;
  } catch (e) {
    console.error(e);
    throw new Error("Unable to save video for review");
  }
}

/**
 * @returns The updated Video object
 */
export function useSaveVideo() {
  const queryClient = useQueryClient();

  return useMutation(
    (input: AddVideoInput | EditVideoInput) => {
      return new Promise<Video>(async (resolve, reject) => {
        try {
          const newVideo = await ("id" in input
            ? updateVideo(input)
            : addVideo(input));

          setTimeout(() => {
            resolve(newVideo);
          }, 1000);
        } catch (e) {
          console.error(e);
          reject(e);
        }
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(VIDEOS_KEY);
      },
    }
  );
}
