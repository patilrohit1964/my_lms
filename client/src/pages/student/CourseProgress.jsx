import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useGetCourseProgressQuery, useUpdateLectureProgressMutation } from '@/features/api/courseProgressApi'
import { CheckCircle2, CirclePlay } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const CourseProgress = () => {

    const { courseId } = useParams();
    const { data, isLoading, isError, error, refetch } = useGetCourseProgressQuery(courseId)
    const [currentLecture, setCurrentLecture] = useState(null);
    const [updateLectureProgress] = useUpdateLectureProgressMutation();
    // const { courseDetails, progress, completed } = data?.data;
    // const { courseTitle } = courseDetails;
    // if (isLoading) return <p>Loading...</p>
    // if (isError) return <p>Failed To Load course details</p>
    // initialize the  first lecture is not exist
    const initialLecture = currentLecture || "courseDetails?.lectures && courseDetails?.lectures[0]"

    const isLectureCompleted = (lectureId) => {
        return progress.some((prog) => prog.lectureId === lectureId && prog.viewed)
    }

    // handle select a specific lecture to watch
    const handleSelectLecture = (lecture) => {
        setCurrentLecture(data?.data?.courseDetails?.lectures?.find((lect) => lect._id === lectureId))
    }

    const handleLectureProgress = async (lectureId) => {
        await updateLectureProgress({ courseId, lectureId });
        refetch()
    }
    return (
        <div className='max-w-7xl mx-auto p-4 mt-20'>
            {/* display course name */}
            <div className='flex justify-between mb-4'>
                <h1 className='text-2xl font-bold'>Course Title</h1>
                <Button>Completed</Button>
            </div>
            <div className='flex flex-col md:flex-row gap-6'>
                {/* video session */}
                <div className='flex-1 md:w-3/5 h-fit rounded-lg shadow-lg p-4'>
                    <div>
                        <video src={"currentLecture?.videoUrl" || initialLecture} controls className='w-full h-auto md-rounded-lg' onPlay={() => handleLectureProgress(currentLecture?._id || initialLecture._id)}
                        />
                    </div>
                    {/* display current watching lecture title */}
                    <div className='mt-2'>
                        <h3 className='font-medium text-lg'>
                            {
                                `lecture ${"courseDetails?.lectures.findIndex((lect)=>lec._id == (currentLecture?._id || initialLecture?._id))+1"} : ${currentLecture?.lectureTitle || initialLecture.lectureTitle}`
                            }
                        </h3>
                    </div>
                </div>
                {/* lecture sidebar */}
                <div className='flex flex-col w-full md:w-2/5 border-t md:border-t-0 md:border-l border-gray-200 md:pl-4 pt-4 md:pt-0'>
                    <h2 className='font-semibold text-xl mb-4'>course Lecture</h2>
                    <div className='flex-1 overflow-y-auto'>
                        {data?.data?.courseDetails?.lectures?.map((el, index) => (
                            <Card key={index} className={`hover:cursor-pointer mb-3 transition transform ${lecture._id === currentLecture._id ? 'bg-gray-200' : 'dark:bg-gray-800'}`} onClick={() => handleSelectLecture(lecture)}>
                                <CardContent className="flex items-center justify-between p-4">
                                    <div className='flex items-center'>
                                        {isLectureCompleted(lecture?._id) ?
                                            <CheckCircle2 size={24} className='text-green-500 mr-2' />
                                            :
                                            <CirclePlay size={24} className='text-gray-500 mr-2' />
                                        }
                                        <div>
                                            <CardTitle className="text-lg font-medium">{"courseTitle"}</CardTitle>
                                        </div>
                                    </div>
                                    {isLectureCompleted(lecture?._id) && (
                                        <Badge variant={"outline"} className="bg-green-200 text-green-600">Completed</Badge>
                                    )

                                    }
                                </CardContent>
                            </Card>
                        ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseProgress