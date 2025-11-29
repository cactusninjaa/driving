// types.ts
import { Database } from "../supabase/database.types";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

// Type pour la structure que VOUS SÉLECTIONNEZ dans la BDD (RowType)
export type LessonRow = Database["public"]["Tables"]["lesson"]["Row"];

// Type pour la structure que vous voulez que votre composant utilise (FrontendType)
export interface Lesson {
  id: number;
  title: string;
  content: string; // Nous allons extraire le contenu lisible ici
  readingTime: number;
}

// Type pour les arguments du temps de lecture
export interface ReadingTime {
  wordNumber: number;
  unit?: "s" | "min" | "h";
}

// Type de réponse pour la fonction getLessons
// C'est un tableau de LessonRow[]
export type LessonsApiReponse = PostgrestSingleResponse<LessonRow[]>;
