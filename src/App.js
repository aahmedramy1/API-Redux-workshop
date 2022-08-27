import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Comments from "./Pages/Comments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:userId/posts" element={<Posts />} />
      <Route path="/:postId/comments" element={<Comments />} />
    </Routes>
  );
}

export default App;
