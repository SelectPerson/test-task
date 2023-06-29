import {createBrowserRouter} from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/home";
import {PATH_URLS} from "../services/constants";
import Posts from "../../pages/posts/posts";
import PostsByUser from "../../pages/posts/postsByUser";
import Albums from "../../pages/albums/albums";
import AlbumsByUser from "../../pages/albums/albumsByUser";
import NotFound from "../../pages/not-found";


export const ROUTER_PATHS = {
  index: '/',
  posts: PATH_URLS.posts,
  postsByUser: `${PATH_URLS.posts}/${PATH_URLS.user}/:userId`,
  albums: PATH_URLS.albums,
  albumsByUser: `${PATH_URLS.albums}/${PATH_URLS.user}/:userId`,
}

export const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.index,
    element: <Layout />,
    children: [
      {
        index: true,
        path: ROUTER_PATHS.index,
        element: <Home/>,
      },
      {
        path: ROUTER_PATHS.posts,
        element: <Posts/>,
      },
      {
        path:ROUTER_PATHS.postsByUser,
        element: <PostsByUser/>,
      },
      {
        path: ROUTER_PATHS.albums,
        element: <Albums/>,
      },
      {
        path: ROUTER_PATHS.albumsByUser,
        element: <AlbumsByUser/>,
      },
      {
        path: "*",
        element: <NotFound/>,
      }
    ]
  }
]);