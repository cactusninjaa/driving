export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      lesson: {
        Row: {
          content_json: Json | null
          lesson_id: number
          title: string
        }
        Insert: {
          content_json?: Json | null
          lesson_id?: number
          title: string
        }
        Update: {
          content_json?: Json | null
          lesson_id?: number
          title?: string
        }
        Relationships: []
      }
      lessonprogress: {
        Row: {
          completed_at: string | null
          lesson_id: number | null
          progress_id: number
          quiz_id: number | null
          student_id: number | null
        }
        Insert: {
          completed_at?: string | null
          lesson_id?: number | null
          progress_id?: number
          quiz_id?: number | null
          student_id?: number | null
        }
        Update: {
          completed_at?: string | null
          lesson_id?: number | null
          progress_id?: number
          quiz_id?: number | null
          student_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lessonprogress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson"
            referencedColumns: ["lesson_id"]
          },
          {
            foreignKeyName: "lessonprogress_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quiz"
            referencedColumns: ["quiz_id"]
          },
          {
            foreignKeyName: "lessonprogress_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "student"
            referencedColumns: ["student_id"]
          },
        ]
      }
      lessonunlock: {
        Row: {
          description: string | null
          required_lesson_id: number | null
          required_quiz_id: number | null
          unlock_id: number
          unlocked_lesson_id: number | null
          unlocked_quiz_id: number | null
        }
        Insert: {
          description?: string | null
          required_lesson_id?: number | null
          required_quiz_id?: number | null
          unlock_id?: number
          unlocked_lesson_id?: number | null
          unlocked_quiz_id?: number | null
        }
        Update: {
          description?: string | null
          required_lesson_id?: number | null
          required_quiz_id?: number | null
          unlock_id?: number
          unlocked_lesson_id?: number | null
          unlocked_quiz_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lessonunlock_required_lesson_id_fkey"
            columns: ["required_lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson"
            referencedColumns: ["lesson_id"]
          },
          {
            foreignKeyName: "lessonunlock_required_quiz_id_fkey"
            columns: ["required_quiz_id"]
            isOneToOne: false
            referencedRelation: "quiz"
            referencedColumns: ["quiz_id"]
          },
          {
            foreignKeyName: "lessonunlock_unlocked_lesson_id_fkey"
            columns: ["unlocked_lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson"
            referencedColumns: ["lesson_id"]
          },
          {
            foreignKeyName: "lessonunlock_unlocked_quiz_id_fkey"
            columns: ["unlocked_quiz_id"]
            isOneToOne: false
            referencedRelation: "quiz"
            referencedColumns: ["quiz_id"]
          },
        ]
      }
      quiz: {
        Row: {
          questions_json: Json | null
          quiz_id: number
          title: string
        }
        Insert: {
          questions_json?: Json | null
          quiz_id?: number
          title: string
        }
        Update: {
          questions_json?: Json | null
          quiz_id?: number
          title?: string
        }
        Relationships: []
      }
      student: {
        Row: {
          email: string
          first_name: string
          hashed_password: string | null
          last_name: string
          student_id: number
        }
        Insert: {
          email: string
          first_name: string
          hashed_password?: string | null
          last_name: string
          student_id?: number
        }
        Update: {
          email?: string
          first_name?: string
          hashed_password?: string | null
          last_name?: string
          student_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
