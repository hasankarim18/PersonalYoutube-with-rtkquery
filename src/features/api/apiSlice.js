import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: "videoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9008/'
    }),
    endpoints: (builder) => ({
        fetchVideos: builder.query({
            query: () => '/videos'
        }),
        fetchVideo: builder.query({
            query: (id) => `/videos/${id}`
        }),
        fetchRelatedVideos: builder.query({
            query: (data) => {

                const id = data.id
                const title = data.title
                // http://localhost:9008/videos?title_like=vs&title_like=css&title_like=tailwind&id_ne=2&_limit=1
                const tags = title.split(' ')
                const queryString = tags.map(tag => `title_like=${tag}`).join('&')

                return `/videos?${queryString}&id_ne=${id}&_limit=4`
            }
        })
    })
})


export const {
    useFetchVideosQuery,
    useFetchVideoQuery,
    useFetchRelatedVideosQuery
} = apiSlice