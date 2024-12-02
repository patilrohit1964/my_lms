import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/admin/Dashboard'
import Sidebar from './pages/admin/Sidebar'
import Login from './pages/Login'
import Courses from './pages/student/Courses'
import HeroSection from './pages/student/HeroSection'
import MyLearning from './pages/student/MyLearning'
import Profile from './pages/student/Profile'
import CourseTable from './pages/admin/course/CourseTable'
import AddCourse from './pages/admin/course/AddCourse'
import EditCourse from './pages/admin/course/EditCourse'
import CreateLecture from './pages/admin/lecture/CreateLecture'
import EditLecture from './pages/admin/lecture/EditLecture'
import CourseDetails from './pages/student/CourseDetails'
import CourseProgress from './pages/student/courseProgress'
import SearchPage from './pages/student/SearchPage'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element:
          <>
            <HeroSection />
            <Courses />
          </>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "my-learning",
        element: <MyLearning />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "course-detail/:courseId",
        element: <CourseDetails />
      },
      {
        path: "course-progress/:courseId",
        element: <CourseProgress />
      },
      {
        path: "course/search",
        element: <SearchPage />
      },
      // adming routes start from here
      {
        path: "admin",
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },
          {
            path: "course/:courseId/lecture",
            element: <CreateLecture />,
          },
          {
            path: "course/:courseId/lecture/:lectureId",
            element: <EditLecture />,
          },
        ]
      }
    ]
  }
])

function App() {

  return (
    <div>

      <RouterProvider router={appRouter}></RouterProvider>

    </div>
  )
}

export default App
