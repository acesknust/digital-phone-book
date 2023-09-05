import React from "react";
// import { useNavigate } from "react-router-dom";

export const useSignout = () => {
  // const navigate = useNavigate();

  const signOut = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.clear();
    // navigate("/login");
    window.location.reload();
  };
  return {
    signOut,
  };
};
