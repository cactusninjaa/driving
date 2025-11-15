import { Lesson } from "@/types/lesson"
import { Title } from "../01-atoms/Title"

type LessonDetailTemplateProps = {
    lesson: Lesson
}

export const LessonDetailTemplate = ({lesson}: LessonDetailTemplateProps) => (
    <div>
        <Title size='xl'>{lesson.title}</Title>
        {lesson.content.map((item, index) =>(
            <p key={index}>{item}</p>
        ))}
    </div>
)