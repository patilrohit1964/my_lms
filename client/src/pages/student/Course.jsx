import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const Course = () => {
    return (
        <Card className='overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform scale-105 transition-all duration-300'>
            <div className='relative'>
                <img src="./vite.svg" alt="" className='w-full h-36 object-cover rounded-t-lg' />
            </div>
            <CardContent className="px-5 py-4 space-y-3">
                {/* here we use truncate for text beacause truncate take width how they needed */}
                <h1 className='hover:underline font-bold text-lg truncate'>Vite Complete Course Hindi 2024</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <Avatar>
                            <AvatarImage src='./vite.svg' />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className='font-medium text-sm'>Rohit Patil</h1>
                    </div>
                    <Badge className='bg-blue-600 text-white px-2 py-1 text-xs rounded-full'>
                        Advanced
                    </Badge>
                </div>
                <div className='text-lg font-bold'>
                    <span>₹499</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default Course