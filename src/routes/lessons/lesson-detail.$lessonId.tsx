import { LessonDetailTemplate } from '@/components/04-templates/LessonDetailTemplate';
import { useGetLessons } from '@/hooks/useGetLessons';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/lessons/lesson-detail/$lessonId')({
	component: LessonDetail,
});

function LessonDetail() {
	const { lessonId } = Route.useParams();
	const lessons = useGetLessons();
	const lesson = lessons.data && lessons.data.filter(lesson => (lesson.id == lessonId));

	return (
		<div className='margin-auto md:px-12 py-12 px-6 flex justify-center'>
			{lesson &&
				<LessonDetailTemplate lesson={lesson[0]} />
			}
		</div>
	);
}
