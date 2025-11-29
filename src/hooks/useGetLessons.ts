import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase/supabase"; // Client typé créé précédemment
import { Lesson } from "../types/lesson"; // Types créés ci-dessus
import { getReadingTime } from "@/utils/getReadingTime";

export const useGetLessons = () => {
  return useQuery({
    queryKey: ["lessons"],
    queryFn: async (): Promise<Lesson[]> => {
      const response = await supabase
        .from("lesson")
        .select("lesson_id, title, content_json");

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response.data.map((lesson) => {
        let rawContent = "";
        if (lesson.content_json) {
          rawContent = Object.values(lesson.content_json)
            .filter((val) => typeof val === "string" || Array.isArray(val))
            .flat()
            .join(" ");
        }

        const wordCount = rawContent.split(/\s+/).filter(Boolean).length;

        return {
          id: lesson.lesson_id,
          title: lesson.title,
          content: rawContent, // La chaîne de caractères propre
          readingTime: getReadingTime({ wordNumber: wordCount }),
        };
      });
    },
  });
};
