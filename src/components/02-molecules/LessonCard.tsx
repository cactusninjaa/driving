import { Lesson } from "@/types/lesson";

export const LessonCard = (lesson: Lesson) => (
    <div>
        <h3>{lesson.title}</h3>
    </div>
)
