import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const tareasApi = createApi({
  reducerPath: "tareasApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3250/" }),
  tagTypes:["refreshGetTasks", "refreshPostTasks"],
  endpoints: (builder) => ({
    getTareas: builder.query({
      query: (token) => ({
        url: "tareas",
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      }),
      providesTags:["refreshGetTasks"]
    }),
    postTareas: builder.mutation({
      query: ({crearTarea, token}) => ({
        body: crearTarea,
        url: "tareas",
        method: "POST",
        headers: { "Content-Type": "application/json",token },
      }),
      invalidatesTags:["refreshGetTasks", "refreshPostTasks"]
    }),
    putTareas: builder.mutation({
      query: ({ _id, actualizarTaks, token }) => ({
        body: actualizarTaks,
        url: `tareas/${_id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json",token },
      }),
      invalidatesTags:["refreshGetTasks", "refreshPostTasks"]
    }),
    deleteTareas: builder.mutation({
      query: ({ _id, token }) => ({
        url: `tareas/${_id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json",token },
      }),
      invalidatesTags:["refreshGetTasks", "refreshPostTasks"]
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTareasQuery,
  usePostTareasMutation,
  usePutTareasMutation,
  useDeleteTareasMutation,
} = tareasApi;
