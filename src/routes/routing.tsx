import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/common/layout/Layout.tsx";
import Login from "../pages/login/Login.tsx";
import SignUp from "../pages/signUp/SignUp.tsx";
import ReviewWrite from "../pages/reviewWrite/ReviewWrite.tsx";
import ReviewManage from "../pages/reviewManage/ReviewManage.tsx";
import ReviewDetail from "../pages/reviewDetail/ReviewDetail.tsx";
import ReviewEdit from "../pages/reviewEdit/ReviewEdit.tsx";
import MyFavorites from "../pages/myFavorites/MyFavorites.tsx";
import ChatRoom from "../pages/chatRoom/ChatRoom.tsx";
import Home from "../pages/home/Home.tsx";
import ChatList from "../pages/chatList/ChatList.tsx";
import RegisterCharger from "../pages/registerCharger/RegisterCharger.tsx";
import ManagingCharger from "../pages/managingCharger/ManagingCharger.tsx";
import ChargingMap from "../pages/chargingMap/ChargingMap.tsx";
import ChargingList from "../pages/chargingList/ChargingList.tsx";
import ChargingDetail from "../pages/chargingDetail/ChargingDetail.tsx";
import ChargingEdit from "../pages/chargingEdit/ChargingEdit.tsx";
import MyPage from "../pages/myPage/MyPage.tsx";
import MyInfo from "../pages/myInfo/MyInfo.tsx";
import NotFound from "../pages/notFound/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/charging-map", element: <ChargingMap /> },
      {
        path: "/chat-list",
        element: <ChatList />,
      },
      { path: "/mypage", element: <MyPage /> },
      { path: "/myinfo", element: <MyInfo /> },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/review/write",
    element: <ReviewWrite />,
  },
  {
    path: "/review/manage",
    element: <ReviewManage />,
  },
  {
    path: "/review/:id",
    element: <ReviewDetail />,
  },
  {
    path: "/review/:id/edit",
    element: <ReviewEdit />,
  },
  {
    path: "/mypage/favorites",
    element: <MyFavorites />,
  },
  {
    path: "/chat-list/:id",
    element: <ChatRoom />,
  },
  {
    path: "/register-charger",
    element: <RegisterCharger />,
  },
  {
    path: "/managing-charger",
    element: <ManagingCharger />,
  },
  { path: "/charging-list", element: <ChargingList /> },
  { path: "/charging-detail/:id", element: <ChargingDetail /> },
  { path: "/charging-edit/:id", element: <ChargingEdit /> },
]);

export default router;
