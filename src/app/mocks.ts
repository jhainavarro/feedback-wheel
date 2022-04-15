import { User, USERS_KEY } from "./auth";
import { Video, VIDEOS_KEY } from "./videos";

/**
 * Helper function to warm up the local storage with mock data
 * FOR TESTING ONLY!
 */
export function initVideosStorage() {
  localStorage.setItem(VIDEOS_KEY, JSON.stringify(MOCK_VIDEOS_FOR_REVIEW));
}

/**
 * Helper function to warm up the local storage with mock data
 * FOR TESTING ONLY!
 */
export function initAuthStorage() {
  localStorage.setItem(USERS_KEY, JSON.stringify(MOCK_USERS));
}

// Password = '123qweasd'
export const MOCK_USERS: User[] = [
  {
    email: "jhai@navarro.com",
    id: 1650047739253,
    name: "Jhai Navarro",
    password:
      "85fd7c889f71cf105375595cddc06b9d38fc562cb69c54f8c165aa751d81b3d9",
  },
  {
    email: "pattycruz@mailinator.com",
    id: 1650047584362,
    name: "Patty Cruz",
    password:
      "85fd7c889f71cf105375595cddc06b9d38fc562cb69c54f8c165aa751d81b3d9",
  },

  {
    email: "elton@brand.com",
    id: 1650963484362,
    name: "Elton Brand",
    password:
      "85fd7c889f71cf105375595cddc06b9d38fc562cb69c54f8c165aa751d81b3d9",
  },
];

const MOCK_VIDEOS_FOR_REVIEW: Video[] = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=4prVdA7_6u0",
    title: "Animate from display none",
    reviews: [
      {
        id: 123,
        submittedBy: MOCK_USERS[1],
        videoId: 1,
        attentionGrabbing: 4,
        attentionGrabbingComments: "",
        storytelling: 3,
        storytellingComments: "",
        audioQuality: 4,
        audioQualityComments: "Audio has some noise in the background",
        videoQuality: 3,
        videoQualityComments: "",
        musicAndScoring: 2,
        musicAndScoringComments: "",
        lengthAndPacing: 2,
        lengthAndPacingComments: "",
        packaging: 4,
        packagingComments: "",
        overallComments: "Needs more oomph!",
      },
      {
        id: 234,
        submittedBy: MOCK_USERS[2],
        videoId: 1,
        attentionGrabbing: 2,
        attentionGrabbingComments: "Got bored halfway through",
        storytelling: 3,
        storytellingComments: "",
        audioQuality: 3,
        audioQualityComments: "Audio has some noise in the background",
        videoQuality: 3,
        videoQualityComments: "",
        musicAndScoring: 3,
        musicAndScoringComments: "",
        lengthAndPacing: 1,
        lengthAndPacingComments: "",
        packaging: 2,
        packagingComments: "",
        overallComments: "A bit boring for my taste",
      },
    ],
    submittedBy: MOCK_USERS[0],
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=V9D7r3BOARA",
    title:
      "VERY SATISFYING 3 STAR ASHE! (7 SYNDICATE) - TFT SET 6.5 Guide Teamfight Tactics 12.7 Meta Comps",
    reviews: [],
    submittedBy: MOCK_USERS[0],
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=4RKqSZSp_rE",
    title:
      "Arthur Nery and Janine Teñoso perform “Pelikula” LIVE on Wish 107.5 Bus",
    reviews: [],
    submittedBy: MOCK_USERS[0],
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=q4whqk-1Xjw",
    title: "It Just Keeps Getting Worse",
    reviews: [
      {
        id: 345,
        submittedBy: MOCK_USERS[0],
        videoId: 1,
        attentionGrabbing: 4,
        attentionGrabbingComments: "",
        storytelling: 3,
        storytellingComments: "",
        audioQuality: 4,
        audioQualityComments: "",
        videoQuality: 3,
        videoQualityComments: "Camera is a bit jiggy",
        musicAndScoring: 2,
        musicAndScoringComments: "",
        lengthAndPacing: 2,
        lengthAndPacingComments: "",
        packaging: 4,
        packagingComments: "",
        overallComments: "Okay enough",
      },
      {
        id: 456,
        submittedBy: MOCK_USERS[2],
        videoId: 1,
        attentionGrabbing: 5,
        attentionGrabbingComments: "",
        storytelling: 4,
        storytellingComments: "",
        audioQuality: 5,
        audioQualityComments: "",
        videoQuality: 4,
        videoQualityComments: "",
        musicAndScoring: 4,
        musicAndScoringComments: "Good song choices",
        lengthAndPacing: 4,
        lengthAndPacingComments: "",
        packaging: 3,
        packagingComments: "",
        overallComments: "Loved everything!",
      },
    ],
    submittedBy: MOCK_USERS[1],
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=ILDdDSEGWxI",
    title: "1% Tahm Kench Gets Fed ⭐⭐⭐ Yordles!",
    reviews: [],
    submittedBy: MOCK_USERS[2],
  },
  {
    id: 6,
    url: "https://www.youtube.com/watch?v=FQPlEnKav48",
    title: "I built 10 web apps... with 10 different languages",
    reviews: [],
    submittedBy: MOCK_USERS[0],
  },
  {
    id: 7,
    url: "https://www.youtube.com/watch?v=FUBHyTM3VEg",
    title: "",
    reviews: [],
    submittedBy: MOCK_USERS[1],
  },
  {
    id: 8,
    url: "https://www.youtube.com/watch?v=gYtqwGipziA",
    title: "I Confronted My Ex... | Wine About It",
    reviews: [],
    submittedBy: MOCK_USERS[2],
  },
  {
    id: 9,
    url: "https://www.youtube.com/watch?v=vpx8pQaaJ38",
    title: "Can I create this tricky orbiting icon animation?",
    reviews: [],
    submittedBy: MOCK_USERS[2],
  },
  {
    id: 10,
    url: "https://www.youtube.com/watch?v=WLzGOz7a2m4",
    title:
      "WUKONG JUNGLE BROKEN  | Challenger Gameplay OP | Beginners & Experts",
    reviews: [],
    submittedBy: MOCK_USERS[0],
  },
  {
    id: 11,
    url: "https://www.youtube.com/watch?v=cbZY1A598pI",
    title: 'Mayonnaise performs "Bakit Part 2" LIVE on Wish 107.5 Bus',
    reviews: [],
    submittedBy: MOCK_USERS[1],
  },
];
