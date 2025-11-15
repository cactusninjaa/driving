import { Lesson } from "@/types/lesson";
import { Link } from "@tanstack/react-router";
import { Title } from "../01-atoms/Title";

type LessonCardProps = {
    lesson: Lesson;
}

export const LessonCard = ({lesson}: LessonCardProps) => (
    <div className="p-4 border-grey-500 border border-solid rounded-lg">
        <Link 
            to='/lessons/lesson-detail/$lessonId' 
            params={{
                lessonId: lesson.id,
            }}
        >
            <Title level='h3'>{lesson.title}</Title>
        </Link>
    </div>
)
