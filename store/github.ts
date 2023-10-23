import { defineStore } from "pinia";
import { CommitHistoryItem } from "~/server/api/github/commit.post";

export type Menu = {
  value: string;
  icon: string;
  title: string;
  url: string;
  delay?: number;
};

export const useGithubStore = defineStore("github", () => {
  const commits = ref<CommitHistoryItem[]>([]);

  return {
    commits,
  };
});
