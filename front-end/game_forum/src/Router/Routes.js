import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PostPage from "../Pages/PostPage";
import LoginPage from "../Pages/LoginPage";
import CreatePostPage from "../Pages/CreatePostPage";
import TopicPage from "../Pages/TopicPage";
import TopicPostPage from "../Pages/TopicPostPage";
import RegPage from "../Pages/RegPage";
import ResetPwd from "../Components/Login/ResetPwd";
import EditPostPage from "../Pages/EditPostPage";
import ProfilePage from "../Pages/ProfilePage";
import MyPage from "../Pages/MyPage";
import ErrPage from "../Pages/ErrPage";

export let routes = (
  <Routes>
    <Route path="*" element={<ErrPage />}></Route>

    <Route path="/" element={<HomePage />}></Route>
    <Route path="/posts/:id" element={<PostPage />}></Route>
    <Route path="/createPost" element={<CreatePostPage />}></Route>
    <Route path="/topics" element={<TopicPage />}></Route>
    <Route path="/topics/:id" element={<TopicPostPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegPage />}></Route>
    <Route path="/reset-pwd" element={<ResetPwd />}></Route>
    <Route path="/edit-post/:id" element={<EditPostPage />}></Route>
    <Route path="/profile" element={<ProfilePage />}></Route>
    <Route path="/manager" element={<MyPage />}></Route>
  </Routes>
);
