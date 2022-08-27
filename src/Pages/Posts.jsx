import React, { useEffect } from "react";
import PostCard from "../Components/PostCard";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserId } from "../Redux/Posts/postsSlice";
import { getUserById } from "../Redux/Users/usersSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ProfileCard from "../Components/ProfileCard";

const Posts = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();
  const { posts, postsLoading, postsError } = useSelector(
    (state) => state.posts
  );
  const { user, userLoading, userError } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getPostsByUserId(userId));
    dispatch(getUserById(userId));
  }, [dispatch, userId]);
  return (
    <div>
      <div
        style={{
          marginLeft: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        <div
          onClick={() => {
            navigate(-1);
          }}
          style={{ cursor: "pointer" }}
        >
          <AiOutlineArrowLeft size={24} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          marginBottom: "5rem",
        }}
      >
        {userLoading ? null : userError ? null : !user ? null : (
          <ProfileCard {...user} showFooter={false} />
        )}
      </div>
      {postsLoading ? (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      ) : postsError ? (
        <div>{postsError}</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
