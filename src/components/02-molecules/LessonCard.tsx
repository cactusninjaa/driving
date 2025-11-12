import { Lesson } from "@/types/lesson";

type LessonCardProps = {
    lesson: Lesson;
}

export const LessonCard = ({lesson}: LessonCardProps) => (
    <div>
        <h3>{lesson.title}</h3>
    </div>
)
