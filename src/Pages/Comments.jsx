import React, { useEffect } from "react";
import CommentCard from "../Components/CommentCard";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByPostId } from "../Redux/Comments/commentsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getPostById } from "../Redux/Posts/postsSlice";
import PostCard from "../Components/PostCard";

const Comments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { comments, commentsLoading, commentsError } = useSelector(
    (state) => state.comments
  );
  const { post, postLoading, postError } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getCommentsByPostId(postId));
    dispatch(getPostById(postId));
  }, [dispatch, postId]);

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
        {postLoading ? null : postError ? null : !post ? null : (
          <PostCard {...post} showFooter={false} />
        )}
      </div>
      {commentsLoading ? (
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
      ) : commentsError ? (
        <div>{commentsError}</div>
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
          {comments.map((comment) => (
            <CommentCard key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
