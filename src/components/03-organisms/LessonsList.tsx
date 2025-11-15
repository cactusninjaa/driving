import { Lesson } from "@/types/lesson"
import { LessonCard } from "../02-molecules/LessonCard"

type LessonsListProps = {
    lessons: Lesson[]
}

export const LessonsList = ({lessons}: LessonsListProps) => (
    <div className="flex flex-col gap-4">
        {lessons.map((lesson) => (
            <LessonCard 
                    key={lesson.id} 
                    lesson={lesson} 
                />
        ))}
    </div>
)