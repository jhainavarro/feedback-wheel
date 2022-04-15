export interface Video {
  // Used a number for `id` here for simplicity. But ideally, we should only be
  // exposing a UUID so the numerical IDs can be assumed to be used as
  // identifiers in the database.
  id: number;
  url: string;
  title: string;
  // TODO: Add creator info
}
