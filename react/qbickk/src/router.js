import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CommentsPage, PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";
import {postsService, usersService} from "./services";



const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, loader:()=>usersService.getAll()},
            {path: 'users/:userId', element: <UserDetailsPage/>, children:[
                    {path: 'posts', element: <PostsPage/>}
            ]},
            {path:'users/:userId/posts/:postId', element: <PostDetailsPage/>, loader: ({params:{postId}})=>postsService.getById(postId)}
    ]}
]);

export {
    router
}