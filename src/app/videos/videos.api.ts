import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddVideoInput, Video } from "./videos.types";
import { getVideoMetadata } from "./videos.utils";

export const VIDEOS_KEY = "videos";

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
 * @returns The submitted Video object
 */
export function useSaveVideo() {
  const queryClient = useQueryClient();

  return useMutation(
    (input: AddVideoInput) => {
      return new Promise<Video>(async (resolve, reject) => {
        try {
          const stored = getStoredVideos();
          const { title } = await getVideoMetadata(input.url);
          const newVideo: Video = {
            ...input,
            id: Date.now(), // Just for simplicity
            title,
          };

          // TODO: Check for duplicates -- by URL + video ID maybe?
          const newList = stored.concat(newVideo);

          localStorage.setItem(VIDEOS_KEY, JSON.stringify(newList));

          setTimeout(() => {
            resolve(newVideo);
          }, 1000);
        } catch (e) {
          console.error(e);
          reject(new Error("Unable to save video for review"));
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
 * @returns The list of videos in the data storage
 */
function getStoredVideos() {
  const stored = localStorage.getItem(VIDEOS_KEY);
  const list: Video[] = JSON.parse(stored ?? "[]");

  return list;
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
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=V9D7r3BOARA",
    title:
      "VERY SATISFYING 3 STAR ASHE! (7 SYNDICATE) - TFT SET 6.5 Guide Teamfight Tactics 12.7 Meta Comps",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=4RKqSZSp_rE",
    title:
      "Arthur Nery and Janine Teñoso perform “Pelikula” LIVE on Wish 107.5 Bus",
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=q4whqk-1Xjw",
    title: "It Just Keeps Getting Worse",
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=ILDdDSEGWxI",
    title: "1% Tahm Kench Gets Fed ⭐⭐⭐ Yordles!",
  },
  {
    id: 6,
    url: "https://www.youtube.com/watch?v=FQPlEnKav48",
    title: "I built 10 web apps... with 10 different languages",
  },
  {
    id: 7,
    url: "https://www.youtube.com/watch?v=FUBHyTM3VEg",
    title: "",
  },
  {
    id: 8,
    url: "https://www.youtube.com/watch?v=gYtqwGipziA",
    title: "I Confronted My Ex... | Wine About It",
  },
  {
    id: 9,
    url: "https://www.youtube.com/watch?v=vpx8pQaaJ38",
    title: "Can I create this tricky orbiting icon animation?",
  },
  {
    id: 10,
    url: "https://www.youtube.com/watch?v=WLzGOz7a2m4",
    title:
      "WUKONG JUNGLE BROKEN  | Challenger Gameplay OP | Beginners & Experts",
  },
  {
    id: 11,
    url: "https://www.youtube.com/watch?v=cbZY1A598pI",
    title: 'Mayonnaise performs "Bakit Part 2" LIVE on Wish 107.5 Bus',
  },
];
