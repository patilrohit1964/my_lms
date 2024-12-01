import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8080/api/v1/progress";
export const courseProgressApi = createApi({
  reducerPath: "courseProgressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getCourseProgress: builder.query({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        if (!response.success) throw new Error(response.message);
        return response.data;
      },
    }),
    updateLectureProgress: builder.mutation({
      query: ({ courseId, lectureId }) => ({
        url: `/${courseId}/lecture/${lectureId}/view`,
        method: "POST",
      }),
    }),
    completedCourse: builder.mutation({
      query: (courseId) => ({
        url: `/${courseId}/complete`,
        method: "POST",
      }),
    }),
    inCompletedCourse: builder.mutation({
      query: (courseId) => ({
        url: `/${courseId}/incomplete`,
        method: "POST",
      }),
    }),
  }),
  // Define any other custom query methods or reducers here
});

export const {
  useGetCourseProgressQuery,
  useUpdateLectureProgressMutation,
  useCompletedCourseMutation,
  useInCompletedCourseMutation,
} = courseProgressApi;
