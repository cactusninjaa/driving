import { Lesson } from "@/types/lesson"
import { LessonCard } from "../02-molecules/LessonCard"
import { Link } from "@tanstack/react-router";

type LessonTemplateProps = {
    lessons: Lesson[];
}

export const LessonTemplate = ({ lessons }: LessonTemplateProps) => {
    return (
        <div className="lesson-template">
            {lessons.map((lesson) => (
                    <Link 
                        key={lesson.id} 
                        to='/lessons/LessonDetail/$lessonId' 
                        params={{
                            lessonId: lesson.id,
                        }}
                    >
                        <LessonCard 
                            lesson={lesson} 
                        />
                    </Link >                
            ))}
        </div>
    )
}
