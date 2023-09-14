import { AsyncData, FetchResult, useFetch } from "nuxt/app";
import { PickFrom } from "nuxt/dist/app/composables/asyncData";

export type Record = {
  key?: string;
  size?: number;
  begin?: string;
  end?: string;
  title?: string;
};

export type RecordsResult = {
  has?: boolean;
  items?: Record[];
  next?: string;
  size?: number;
}

export const records = (next?: string): AsyncData<RecordsResult, Error | null> => {
  return useFetch("/api/lives", {
    method: "GET",
    query: {
      next: next,
    },
    server: true,
  });
};
