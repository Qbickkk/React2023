import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {ErrorPage} from "../pages/ErrorPage";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {UserDetailsPage} from "../pages/UserDetailsPage";
import {PostDetailsPage} from "../pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'users',
                element: <UsersPage/>
            },
            {
                path: '/users/details',
                element: <UserDetailsPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'posts/details',
                element: <PostDetailsPage/>
            }
        ]
    }
]);

export {
    router
}