import { Lesson } from "@/types/lesson";
import { Link } from "@tanstack/react-router";
import { Title } from "../01-atoms/Title";
import { Text } from "../01-atoms/Text";
import { ArrowRight } from "lucide-react";

type LessonCardProps = {
    lesson: Lesson;
}

export const LessonCard = ({lesson}: LessonCardProps) => (
    <div className="p-(--spacing-4x) rounded-lg shadow-(--shadow-card)">
        <Link 
            to='/lessons/lesson-detail/$lessonId' 
            params={{
                lessonId: lesson.id,
            }}
            className="flex justify-between items-center gap-4"
        >   
            <div>
                <Title level='h3'>{lesson.title}</Title>
                <Text color="grey-500">{lesson.readingTime} min</Text>
            </div>
            <ArrowRight className="w-6 h-6 shrink-0"/>
        </Link>
    </div>
)
