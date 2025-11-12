import { LessonDetailTemplate } from "@/components/04-templates/LessonDetailTemplate"
import { useGetLessons } from "@/hooks/useGetLessons"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/lessons/LessonDetail/$lessonId')({
    ssr: false,
    component: LessonDetail,
})

function LessonDetail () {
    const { lessonId } = Route.useParams()
    const lessons = useGetLessons()
    const lesson = lessons.filter((lesson) => (lesson.id === lessonId))

    return (
        <LessonDetailTemplate lesson={lesson[0]} />
    )
}