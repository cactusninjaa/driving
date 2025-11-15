import { Lesson } from "@/types/lesson"
import { LessonsList } from "../03-organisms/LessonsList";
import { Title } from "../01-atoms/Title";

type LessonTemplateProps = {
    lessons: Lesson[];
}

export const LessonTemplate = ({ lessons }: LessonTemplateProps) => {
    return (
        <div className="div flex flex-col gap-8">
            <Title size='xl'>Leçons</Title>
            <LessonsList lessons={lessons}/>
        </div>
    )
}
