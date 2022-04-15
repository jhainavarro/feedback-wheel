import { User } from "app/auth";
import { Video } from "app/videos";

export interface ReviewContent {
  attentionGrabbing: number;
  attentionGrabbingComments: string;
  storytelling: number;
  storytellingComments: string;
  audioQuality: number;
  audioQualityComments: string;
  videoQuality: number;
  videoQualityComments: string;
  musicAndScoring: number;
  musicAndScoringComments: string;
  lengthAndPacing: number;
  lengthAndPacingComments: string;
  packaging: number;
  packagingComments: string;
  overallComments: string;
}

export type Review = ReviewContent & {
  id: number;
  videoId: Video["id"];
  submittedBy: User;
};

export type AddReviewInput = ReviewContent & {
  videoId: Video["id"];
  submittedBy: User;
};
