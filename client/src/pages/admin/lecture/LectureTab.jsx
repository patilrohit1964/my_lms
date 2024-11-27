import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from "@/components/ui/switch"
const LectureTab = () => {
    return (
        <Card>
            <CardHeader className="flex justify-between">
                <div>
                    <CardTitle>Edit Lecture</CardTitle>
                    <CardDescription>Make Changes and click save when done.</CardDescription>
                </div>
                <div className='flex items-center gap-2'>
                    <Button variant="destructive">Remove Lecture</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div>
                    <Label>Title</Label>
                    <Input type="text" placeholder="Ex. Introduction to javascript" />
                </div>
                <div className='my-5'>
                    <Label>Video <span className='text-red-500'>*</span></Label>
                    <Input type="file" accept="video/*" className="w-fit" placeholder="Ex. Introduction to javascript" />
                    {/* here we use this w-fit for input width automatically adjust */}
                </div>
                <div className='flex items-center space-x-2 my-5'>
                    <Switch id="airplane-mode" />
                    <Label>Is This Video Free</Label>
                </div>
                <div className='mt-4'>
                    <Button>Update Lecture</Button>
                </div>

            </CardContent>
        </Card>
    )
}

export default LectureTab