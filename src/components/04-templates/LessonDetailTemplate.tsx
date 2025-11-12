import { Lesson } from "@/types/lesson"

type LessonDetailTemplateProps = {
    lesson: Lesson
}

export const LessonDetailTemplate = ({lesson}: LessonDetailTemplateProps) => (
    <div>
        <h1>{lesson.title}</h1>
        {lesson.content.map((item, index) =>(
            <p key={index}>{item}</p>
        ))}
    </div>
)