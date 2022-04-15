import { z } from "zod";

/**
 * Defines the shape of the form data
 */
export type Inputs = {
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
};

/**
 * Schema validation for the form data
 */
const ratingValidator = z.number().min(1, "Please provide a rating");
const commentValidator = z.string();
export const schema = z.object({
  attentionGrabbing: ratingValidator,
  attentionGrabbingComments: commentValidator,
  storytelling: ratingValidator,
  storytellingComments: commentValidator,
  audioQuality: ratingValidator,
  audioQualityComments: commentValidator,
  videoQuality: ratingValidator,
  videoQualityComments: commentValidator,
  musicAndScoring: ratingValidator,
  musicAndScoringComments: commentValidator,
  lengthAndPacing: ratingValidator,
  lengthAndPacingComments: commentValidator,
  packaging: ratingValidator,
  packagingComments: commentValidator,
  overallComments: commentValidator,
});

/**
 * Options on the rating input for each criteria
 */
export const SLIDER_MARKS = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];

/**
 * Defines the content of each form field
 */
export type FormField = {
  input: keyof Inputs;
  commentsInput: keyof Inputs;
  commentsPlaceholder: string;
  label: string;
  description: string;
};

export const FORM_FIELDS: FormField[] = [
  {
    input: "attentionGrabbing",
    commentsInput: "attentionGrabbingComments",
    commentsPlaceholder: "Care to share more?",
    label: "Attention Grabbing",
    description:
      "Did the video create a hook in the first 120 seconds that would make viewers want to stick around until the end of the video?",
  },
  {
    input: "storytelling",
    commentsInput: "storytellingComments",
    commentsPlaceholder: "Do you have any more comments on this?",
    label: "Storytelling",
    description:
      "Does the video follow a captivating storytelling arc that includes an inciting incident, conflict, climax, or a resolution? Does the reviewer feel an emotional connection with the characters, events, or scenes?",
  },
  {
    input: "audioQuality",
    commentsInput: "audioQualityComments",
    commentsPlaceholder: "Do you want to share any specifics?",
    label: "Audio Quality",
    description: "How clear and premium is the audio quality?",
  },
  {
    input: "videoQuality",
    commentsInput: "videoQualityComments",
    commentsPlaceholder: "Any pointers for improvement?",
    label: "Video Quality",
    description:
      "How is the video shot? Is the camera held steady or does it shake? (We're not looking for production quality, it can be shot on iPhone - we are looking to grade videography skills here)",
  },
  {
    input: "musicAndScoring",
    commentsInput: "musicAndScoringComments",
    commentsPlaceholder: "Anything specific that stood out for you?",
    label: "Music & Scoring",
    description:
      "Is the video scored in such a way that it provides the right energy and emotion to captivate viewers?",
  },
  {
    input: "lengthAndPacing",
    commentsInput: "lengthAndPacingComments",
    commentsPlaceholder: "Care to share more?",
    label: "Length & Pacing",
    description:
      "Does the video hold an engaging pace given the intended style & format of video? When did the reviewer get bored (if at all)? Are there numerous moments that could create retention dips and audience drop-off? If so, maybe mention some time stamps.",
  },
  {
    input: "packaging",
    commentsInput: "packagingComments",
    commentsPlaceholder: "Do you have any more comments on this?",
    label: "Packaging",
    description:
      "How well is the video titled + thumbnail-ed? Is it something that you think accurately depicts the substance of the video while also enticing general viewers to click-through to watch the video from YouTube's homepage?",
  },
];

/**
 * @returns The initial values to be used in the submit review form
 */
export function getInitialValues(): Inputs {
  return {
    attentionGrabbing: 0,
    attentionGrabbingComments: "",
    storytelling: 0,
    storytellingComments: "",
    audioQuality: 0,
    audioQualityComments: "",
    videoQuality: 0,
    videoQualityComments: "",
    musicAndScoring: 0,
    musicAndScoringComments: "",
    lengthAndPacing: 0,
    lengthAndPacingComments: "",
    packaging: 0,
    packagingComments: "",
    overallComments: "",
  };
}
