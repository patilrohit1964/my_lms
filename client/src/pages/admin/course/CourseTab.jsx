import RichTextEditor from '@/components/RichTextEditor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2 } from 'lucide-react'
const CourseTab = () => {

    const isPublished = true
    const isLoading = true
    const [input, setInput] = useState({
        courseTitle: "",
        subTitle: "",
        description: "",
        category: "",
        course: "",
        courseLevel: "",
        coursePrice: "",
        courseThumbnail: "",
    })
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <div>
                    <CardTitle>Basic Course Information</CardTitle>
                    <CardDescription>Make Changes to your courses here. Click save when you're done.</CardDescription>
                </div>
                <div className='space-x-3'>
                    <Button variant="outline">
                        {isPublished ? "Unpublished" : "Published"}
                    </Button>
                    <Button>Remove Course</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='space-y-4 mt-5'>
                    <div>
                        <Label>Course Title</Label>
                        <Input type="text" placeholder="Ex. Fullstack Developer" name="courseTitle" value={input.courseTitle} onChange={changeEventHandler} />
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <Label>Subtitle</Label>
                        <Input type="text" placeholder="Ex. Become Developer o to hero" name="subTitle" value={input.subTitle} onChange={changeEventHandler} />
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <Label>Description</Label>
                        <RichTextEditor input={input} setInput={setInput} value={input.description} />
                    </div>
                </div>
                <div className='mt-5 flex items-center gap-5'>
                    <div>
                        <Label>Category</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Category</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Course Level</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a Course Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Course Level</SelectLabel>
                                    <SelectItem value="Beginner">Beginner</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Advance">Advance</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Price in (INR)</Label>
                        {/* here we use w-fit because they adjust auto width how that need */}
                        <Input type="number" name="coursePrice" onChange={changeEventHandler} placeholder="199" className="w-fit" />
                    </div>
                </div>
                <div className='mt-5'>
                    <Label>Course Thumnail</Label>
                    <Input type="file" className="w-fit" accept="image/*" />
                </div>
                <div className='mt-5'>
                    <Button variant="outline">Cancel</Button>
                    <Button disabled={isLoading}>
                        {isLoading ?
                            <>
                                <Loader2 className='animate-spin mr-2 h-4 w-4' />
                                Please wait...
                            </>
                            : "Save"
                        }
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CourseTab