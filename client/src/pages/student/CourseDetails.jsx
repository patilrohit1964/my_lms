import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BadgeInfo, PlayCircle } from 'lucide-react'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import BuyCoursePriceButton from '@/components/BuyCoursePriceButton'
import { useParams } from 'react-router-dom'
const CourseDetails = () => {

    const { courseId } = useParams()
    return (
        <div className='mt-20 space-y-5 text-left'>
            <div className="bg-[#2d2f31] text-white">
                <div className='max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2'>
                    <h1 className='font-bold text-2xl md:text-3xl'>Course Title</h1>
                    <p className='text-base md:text-lg'>course sub-title</p>
                    <p>created by {""} <span className='text-[#c0c4fc] underline italic'>patil rohit</span></p>
                    <div className='flex items-center gap-2 text-sm'>
                        <BadgeInfo size={16} />
                        <p>Last Updated 27-11-2005</p>
                    </div>
                    <p>Students enrolled:10</p>
                </div>
            </div>
            <div className='max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10'>
                <div className='w-full lg:w-1/2 space-y-5'>
                    <h1 className='font-bold text-xl md:text-2xl'>Description</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt corporis commodi quis nam distinctio rerum.</p>
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Content</CardTitle>
                            <CardDescription>4 Lectures</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[1, 2, 3, 4].map((el, index) => (
                                <div key={index} className='flex items-center gap-3 text-sm'>
                                    <span>
                                        {true ? <PlayCircle size={14} /> : <Lock size={14} />}
                                    </span>
                                    <p>lecture title</p>
                                </div>
                            ))

                            }
                        </CardContent>
                    </Card>
                </div>
                <div className='w-full lg:w-1/3'>
                    <Card>
                        <CardContent className="p-4 flex flex-col">
                            {/* here we use apect-video for video ratio maintain */}
                            <div className='w-full aspect-video mb-4'>
                                videon comming
                            </div>
                            <h1>lecture title</h1>
                            <Separator className="my-2" />
                            <h1 className='text-lg md:text-xl font-semibold'>Course Price</h1>
                        </CardContent>
                        <CardFooter className="flex justify-center p-4">
                            {/* <Button className="w-full">{true ? "Purchase Course" : "Continue Learning"}</Button> */}
                            <BuyCoursePriceButton courseId={courseId} />
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default CourseDetails