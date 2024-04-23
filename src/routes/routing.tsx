import { createBrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/common/layout/Layout.tsx";
import SignUp from "@/pages/signUp/SignUp.tsx";
import ReviewWrite from "@/pages/reviewWrite/ReviewWrite.tsx";
import ReviewManage from "@/pages/reviewManage/ReviewManage.tsx";
import ReviewDetail from "@/pages/reviewDetail/ReviewDetail.tsx";
import ReviewEdit from "@/pages/reviewEdit/ReviewEdit.tsx";
import MyFavorites from "@/pages/myFavorites/MyFavorites.tsx";
import ChatRoom from "@/pages/chatRoom/ChatRoom.tsx";
import Home from "@/pages/home/Home.tsx";
import ChatList from "@/pages/chatList/ChatList.tsx";
import RegisterCharger from "@/pages/registerCharger/RegisterCharger.tsx";
import ManagingCharger from "@/pages/managingCharger/ManagingCharger.tsx";
import ChargingMap from "@/pages/chargingMap/ChargingMap.tsx";
import ChargingDetail from "@/pages/chargingDetail/ChargingDetail.tsx";
import ChargingEdit from "@/pages/chargingEdit/ChargingEdit.tsx";
import MyPage from "@/pages/myPage/MyPage.tsx";
import MyInfo from "@/pages/myInfo/MyInfo.tsx";
import NotFound from "@/pages/notFound/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/charging-map", element: <ChargingMap /> },
      { path: "/charging-edit/:id", element: <ChargingEdit /> },
      {
        path: "/register-charger",
        element: <RegisterCharger />,
      },
      {
        path: "/managing-charger",
        element: <ManagingCharger />,
      },
      { path: "/charging-detail/:id", element: <ChargingDetail /> },
      // 채팅
      {
        path: "/chat-list/*",
        element: (
          <Routes>
            <Route path="" element={<ChatList />} />
            <Route path="/:id" element={<ChatRoom />} />
          </Routes>
        ),
      },
      // 마이페이지
      {
        path: "/mypage/*",
        element: (
          <Routes>
            <Route path="" element={<MyPage />} />
            <Route path="/favorites" element={<MyFavorites />} />
          </Routes>
        ),
      },
      { path: "/myinfo", element: <MyInfo /> },
      // 리뷰
      {
        path: "/review/*",
        element: (
          <Routes>
            <Route path="/write" element={<ReviewWrite />} />
            <Route path="/manage" element={<ReviewManage />} />
            <Route path="/:id" element={<ReviewDetail />} />
            <Route path="/:id/edit" element={<ReviewEdit />} />
          </Routes>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
