import { QueryKey, useQuery } from "react-query";
import { Video } from "./videos.types";

export const VIDEOS_KEY: QueryKey = "videos";

/**
 * @returns The list of videos up for review
 */
export function useGetVideos() {
  return useQuery(VIDEOS_KEY, () => {
    return new Promise<Video[]>((resolve) => {
      setTimeout(() => {
        resolve(MOCK_VIDEOS_FOR_REVIEW);
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
        const video = MOCK_VIDEOS_FOR_REVIEW.find((video) => video.id === id);
        resolve(video);
      }, 2000);
    });
  });
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
