import React, { useEffect } from "react";
import ProfileCard from "../Components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/Users/usersSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { users, usersLoading, usersError } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      {usersLoading ? (
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
      ) : usersError ? (
        <div>{usersError}</div>
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
          {users.map((user) => (
            <ProfileCard key={user.id} {...user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
