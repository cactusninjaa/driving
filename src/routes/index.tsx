import { createFileRoute } from '@tanstack/react-router'
import { LessonTemplate } from '@/components/04-templates/LessonTemplate'
import { useGetLessons } from '@/hooks/useGetLessons'

export const Route = createFileRoute('/')({ component: App })

function App() {
    const lessons = useGetLessons()
    console.log(lessons.data)
    return (
        <div className='margin-auto md:px-12 py-12 px-6'>
            {lessons.data &&
                <LessonTemplate
                    lessons={lessons.data}
                />
            }
        </div>
    )
}
