export interface Video {
  // Used a number for `id` here for simplicity. But ideally, we should only be
  // exposing a UUID so the numerical IDs can be assumed to be used as
  // identifiers in the database.
  id: number;
  url: string;
  title: string;
  // TODO: Add creator info
}

// This is currently only from the Youtube OEmbed API
// Bound to change if we use a different endpoint
export interface YoutubeVideo {
  title: string;

  /* These are the other available options: */
  // author_name: string;
  // author_url: string;
  // type: string;
  // height: number;
  // width: number;
  // version: string;
  // provider_name: string;
  // provider_url: string;
  // thumbnail_height: number;
  // thumbnail_width: number;
  // thumbnail_url: string;
  // html: string; // iframe URL
}

export interface AddVideoInput {
  url: string;
}
