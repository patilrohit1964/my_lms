import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useCreateCourseMutation } from '@/features/api/courseApi'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
const AddCourse = () => {

    const navigate = useNavigate();
    const [courseTitle, setCourseTitle] = useState("")
    const [category, setCategory] = useState("")
    const [createCourse, { data, isError, isLoading, isSuccess }] = useCreateCourseMutation();


    const createCourseHandler = async () => {
        await createCourse({ courseTitle, category })
    }

    const selectedCategory = (value) => {
        setCategory(value)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(data?.message || "Course Created successfully");
            navigate("/admin/course")
        }
    }, [isSuccess, isError])

    return (
        <div className='flex-1 mx-10'>
            <div className='mb-4'>
                <h1 className='font-bold text-xl'>Let's Add Course, Add Some Basic Details For Your New Course</h1>
                <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minima.</p>
            </div>
            <div className='space-y-4'>
                <div>
                    <Label>Title</Label>
                    <Input type="text" name="courseTitle" placeholder="Your Course Name" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
                </div>
                <div>
                    <Label>Category</Label>
                    <Select onValueChange={selectedCategory}>
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
                <div className='flex items-center gap-2'>
                    <Button variant="outline" onClick={() => navigate("/admin/course")}>Back</Button>
                    <Button disabled={isLoading} onClick={createCourseHandler}>
                        {isLoading ?
                            <>
                                <Loader2 className='mr-1 animate-spin h-4 w-4' />
                                Please wait
                            </> :
                            "Create"
                        }
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default AddCourse