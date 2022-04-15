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

/**
 * Helper function to warm up the local storage with mock data
 * FOR TESTING ONLY!
 */
export function initStorage() {
  localStorage.setItem(VIDEOS_KEY, JSON.stringify(MOCK_VIDEOS_FOR_REVIEW));
}

const MOCK_VIDEOS_FOR_REVIEW: Video[] = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=4prVdA7_6u0",
    title: "Animate from display none",
    reviews: [],
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=V9D7r3BOARA",
    title:
      "VERY SATISFYING 3 STAR ASHE! (7 SYNDICATE) - TFT SET 6.5 Guide Teamfight Tactics 12.7 Meta Comps",
    reviews: [],
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=4RKqSZSp_rE",
    title:
      "Arthur Nery and Janine Teñoso perform “Pelikula” LIVE on Wish 107.5 Bus",
    reviews: [],
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=q4whqk-1Xjw",
    title: "It Just Keeps Getting Worse",
    reviews: [],
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=ILDdDSEGWxI",
    title: "1% Tahm Kench Gets Fed ⭐⭐⭐ Yordles!",
    reviews: [],
  },
  {
    id: 6,
    url: "https://www.youtube.com/watch?v=FQPlEnKav48",
    title: "I built 10 web apps... with 10 different languages",
    reviews: [],
  },
  {
    id: 7,
    url: "https://www.youtube.com/watch?v=FUBHyTM3VEg",
    title: "",
    reviews: [],
  },
  {
    id: 8,
    url: "https://www.youtube.com/watch?v=gYtqwGipziA",
    title: "I Confronted My Ex... | Wine About It",
    reviews: [],
  },
  {
    id: 9,
    url: "https://www.youtube.com/watch?v=vpx8pQaaJ38",
    title: "Can I create this tricky orbiting icon animation?",
    reviews: [],
  },
  {
    id: 10,
    url: "https://www.youtube.com/watch?v=WLzGOz7a2m4",
    title:
      "WUKONG JUNGLE BROKEN  | Challenger Gameplay OP | Beginners & Experts",
    reviews: [],
  },
  {
    id: 11,
    url: "https://www.youtube.com/watch?v=cbZY1A598pI",
    title: 'Mayonnaise performs "Bakit Part 2" LIVE on Wish 107.5 Bus',
    reviews: [],
  },
];
