import { ReadingTime } from "@/types/lesson";

export const getReadingTime = ({ wordNumber, unit = "min" }: ReadingTime) => {
  /**
   * It takes generally 1 seconds to read 2 words for a reader
   */
  console.log("wordNumner", wordNumber);
  const wordsInSecond = wordNumber / 2;
  switch (unit) {
    case "s":
      return Math.ceil(wordsInSecond);
    case "min":
      return Math.ceil(wordsInSecond / 60);
    case "h":
      return Math.ceil(wordsInSecond / 3600);
  }
};
