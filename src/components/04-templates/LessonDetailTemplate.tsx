import { Lesson } from "@/types/lesson"
import { Title } from "../01-atoms/Title"
import { Text } from "../01-atoms/Text"
import { Button } from "../02-molecules/Button"
import { Link } from "@tanstack/react-router"

type LessonDetailTemplateProps = {
    lesson: Lesson
}

export const LessonDetailTemplate = ({lesson}: LessonDetailTemplateProps) => (
    <div className='max-w-2xl flex flex-col justify-between'>
        <div className="flex gap-12 flex-col">
            <Title size='xl'>{lesson.title}</Title>
            <div className="flex flex-col gap-2">
                {lesson.content.map((item, index) =>(
                    <Text key={index}>{item}</Text>
                ))}
            </div>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <Link to='/'>
                <Button>
                        Accueil 
                </Button>
            </Link>
        </div>
    </div>
)