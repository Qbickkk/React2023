import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {UsersPage} from "./pages/UsersPage";
import {UserPostsPage} from "./pages/UserPostsPage";
import {getAllPostsByUserId, getAllUsers} from "./services/apiService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>,
                loader: getAllUsers,
                children:[
                    {
                        path: ':id',
                        element: <UserPostsPage/>,
                        loader: getAllPostsByUserId
                    }
                ]
            }
        ]
    }
]);

export {
    router
}