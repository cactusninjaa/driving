import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useGetLessons } from '@/hooks/useGetLessons'
import { LessonTemplate } from '@/components/04-templates/LessonTemplate'
import { Lesson } from '@/types/lesson'

export const Route = createFileRoute('/')({ component: App })

function App() {
    const lessons: Lesson[] = useGetLessons()

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <LessonTemplate 
                lessons={lessons}
            />
        </div>
    )
}
