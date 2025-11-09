import { Lesson } from "@/types/lesson"
import { LessonCard } from "../02-molecules/LessonCard"

type LessonTemplateProps = {
    lessons: Lesson[]
}

export const LessonTemplate = ({ lessons }: LessonTemplateProps) => {
    return (
        <div className="lesson-template">
            {lessons.map((lesson) => (
                <LessonCard key={lesson.id} {...lesson} />
            ))}
        </div>
    )
}
