import "./style.scss"
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  Outlet,
} from 'react-router-dom';

import Register from "./pages/Register"
import Login from "./pages/Login"
import Communitylist from "./pages/Communitylist"
import CommunityWrite from "./pages/CommunityWrite"
import CommunityUpdate from "./pages/CommunityUpdate"
import Communityinfo from "./pages/Communityinfo"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Search from "./pages/Search"
import Courses from "./pages/Courses"
import CoursesSearch from "./pages/CoursesSearch"
import CoursesCategory from "./pages/CoursesCategory"
import Play from "./pages/Play"
import Profile from "./pages/Profile"
import MyOnline from "./pages/MyOnline"
import Lectureinfo from "./pages/Lectureinfo"
import Review from "./pages/Review"
import Cart from "./pages/Cart"
import Payment from "./pages/Payment"


import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import OnlineStudy from "./pages/OnlineStudy";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/communitylist/:type",
        element: <Communitylist />
      },
      {
        path: "/communitywrite/:type",
        element: <CommunityWrite />
      },
      {
        path: "/communityupdate/:communityid",
        element: <CommunityUpdate />
      },
      {
        path: "/communityinfo/:communityid",
        element: <Communityinfo />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/courses",
        element: <Courses />
      },
      {
        path: "/courses/search/:Searchword",
        element: <CoursesSearch />
      },
      {
        path: "/courses/:CategoryID",
        element: <CoursesCategory />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/myonline",
        element: <MyOnline />
      },
      {
        path: "/lectureinfo/:LectureID",
        element: <Lectureinfo />
      },
      {
        path: "/lectureinfo/review/:LectureID",
        element: <Review />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/payment/:LectureID",
        element: <Payment />
      },
      {
        path: "/erollments/play/:LectureID/:TOCID",
        element: <Play />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/onlinestudy",
    element: <OnlineStudy />
  },

]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
