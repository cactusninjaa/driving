import { createFileRoute } from '@tanstack/react-router'
import { useGetLessons } from '@/hooks/useGetLessons'
import { LessonTemplate } from '@/components/04-templates/LessonTemplate'
import { Lesson } from '@/types/lesson'

export const Route = createFileRoute('/')({ component: App })

function App() {
    const lessons: Lesson[] = useGetLessons()

    return (
        <div className='margin-auto md:px-12 py-12 px-6'>
            <LessonTemplate 
                lessons={lessons}
            />
        </div>
    )
}
