import { EditVideoInput, useSaveVideo, Video, VIDEOS_KEY } from "app/videos";
import { useMutation, useQueryClient } from "react-query";
import { AddReviewInput, Review } from "./reviews.types";

export const REVIEWS_KEY = "reviews";

/**
 * Adds the review to the given video
 *
 * @param video
 * @returns The new Review added
 */
export function useAddReview(video: Video) {
  const queryClient = useQueryClient();
  const { mutate: saveVideo } = useSaveVideo();

  return useMutation(
    (input: AddReviewInput) => {
      return new Promise<Review>(async (resolve, reject) => {
        try {
          const newReview: Review = {
            ...input,
            id: Date.now(),
          };
          const newVideoInput: EditVideoInput = {
            id: input.videoId,
            reviews: video.reviews.concat(newReview),
          };

          saveVideo(newVideoInput, {
            onSuccess() {
              resolve(newReview);
            },
          });
        } catch (e) {
          console.error(e);
          reject(e);
        }
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(REVIEWS_KEY);
        queryClient.invalidateQueries(VIDEOS_KEY);
      },
    }
  );
}
