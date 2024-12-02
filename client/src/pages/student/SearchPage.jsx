import React from 'react'
import Filter from './Filter'
import SearchResult from './SearchResult'
import { AlertCircle } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

const SearchPage = () => {
    return (
        <div className='max-w-7xl mx-auto p-4 md:p-8'>
            <div className='my-6'>
                <h1>result for "html"</h1>
                <p>
                    showing result for {" "}
                    <span className='text-blue-800 font-bold italic'>Frontend Developer</span>
                </p>
            </div>
            <div className='flex flex-col md:flex-row gap-10'>
                <Filter />
                <div className='flex-1'>
                    {false ? Array.from({ length: 3 }).map((_, index) => (
                        <CourseSkeleton />
                    ))
                        : false ? <CourseNotFound /> : (
                            [1, 2, 3].map((_, index) => (
                                <SearchResult />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage

const CourseNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-32 dark:bg-gray-900 p-6">
            <AlertCircle className="text-red-500 h-16 w-16 mb-4" />
            <h1 className="font-bold text-2xl md:text-4xl text-gray-800 dark:text-gray-200 mb-2">
                Course Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                Sorry, we couldn't find the course you're looking for.
            </p>
            <Link to="/" className="italic">
                <Button variant="link">Browse All Courses</Button>
            </Link>
        </div>
    );
};

const CourseSkeleton = () => {
    return (
        <div className="flex-1 flex flex-col md:flex-row justify-between border-b border-gray-300 py-4">
            <div className="h-32 w-full md:w-64">
                <Skeleton className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col gap-2 flex-1 px-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-1/3" />
                </div>
                <Skeleton className="h-6 w-20 mt-2" />
            </div>

            <div className="flex flex-col items-end justify-between mt-4 md:mt-0">
                <Skeleton className="h-6 w-12" />
            </div>
        </div>
    );
};