import { createBrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/common/layout/Layout.tsx";
import SignUp from "@/pages/signUp/SignUp.tsx";
import ReviewWrite from "@/pages/reviewWrite/ReviewWrite.tsx";
import ReviewManage from "@/pages/reviewManage/ReviewManage.tsx";
import ReviewDetail from "@/pages/reviewDetail/ReviewDetail.tsx";
import ReviewEdit from "@/pages/reviewEdit/ReviewEdit.tsx";
import Login from "@/pages/login/Login";
import MyFavorites from "@/pages/myFavorites/MyFavorites.tsx";
import ChatRoom from "@/pages/chatRoom/ChatRoom.tsx";
import Home from "@/pages/home/Home.tsx";
import ChatList from "@/pages/chatList/ChatList.tsx";
import RegisterCharger from "@/pages/registerCharger/RegisterCharger.tsx";
import ManagingCharger from "@/pages/managingCharger/ManagingCharger.tsx";
import ChargerMapView from "@/pages/chargerMapView/ChargerMapView";
import ChargerListView from "@/pages/chargerListView/ChargerListView";
import ChargerDetail from "@/pages/chargerDetail/ChargerDetail";
import ChargerEdit from "@/pages/chargerEdit/ChargerEdit";
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
      {
        path: "/charger/*",
        element: (
          <Routes>
            <Route path="/map" element={<ChargerMapView />} />
            <Route path="/list" element={<ChargerListView />} />
            <Route path="/:id" element={<ChargerDetail />} />
            <Route path="/:id/edit" element={<ChargerEdit />} />
          </Routes>
        ),
      },
      {
        path: "/register-charger",
        element: <RegisterCharger />,
      },
      {
        path: "/managing-charger",
        element: <ManagingCharger />,
      },
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
            <Route path="/myinfo" element={<MyInfo />} />
          </Routes>
        ),
      },
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
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
