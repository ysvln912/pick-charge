import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./styles/theme.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import ReviewWrite from "./pages/reviewWrite/ReviewWrite";
import ReviewManage from "./pages/reviewManage/ReviewManage";
import ReviewDetail from "./pages/reviewDetail/ReviewDetail";
import ReviewEdit from "./pages/reviewEdit/ReviewEdit";
import MyFavorites from "./pages/myFavorites/MyFavorites";
import ChatRoom from "./pages/chatRoom/ChatRoom";
import Main from "./pages/main/Main";
import ChatList from "./pages/chatList/ChatList";
import RegisterCharger from "./pages/registerCharger/RegisterCharger";
import ManagingCharger from "./pages/managingCharger/ManagingCharger";
import ChargingMap from "./pages/chargingMap/ChargingMap";
import ChargingList from "./pages/chargingList/ChargingList";
import ChargingDetail from "./pages/chargingDetail/ChargingDetail";
import ChargingEdit from "./pages/chargingEdit/ChargingEdit";
import MyPage from "./pages/myPage/MyPage";
import MyInfo from "./pages/myInfo/MyInfo";
import NotFound from "./pages/notFound/NotFound.tsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Main /> },
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
