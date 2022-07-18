import React from "react";
import { Outlet,useSearchParams } from "react-router-dom";

export const Users = () => {
    const [searchParams, SetsearchParams] = useSearchParams();
    console.log("se", searchParams);
    const showActiveUsers = searchParams.get("Filter") === "Active"
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <div>
        <button onClick={() => SetsearchParams({ Filter: "Active" })}>
          Active Users
        </button>
        <button onClick={() => SetsearchParams({ })}>
          Reset Filters
        </button>
          </div>
          {showActiveUsers?<h2>Show Active Users</h2>:<h2>Show All users</h2>}
      <Outlet />
    </div>
  );
};
