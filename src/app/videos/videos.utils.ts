/**
 * @param youtubeUrl Assumed to be the direct link to the Youtube video
 * @returns The URL for embedding the given Youtube video
 */
export function getEmbedUrl(youtubeUrl: string) {
  // TODO: Validation
  const videoId = new URL(youtubeUrl).searchParams.get("v");

  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}
