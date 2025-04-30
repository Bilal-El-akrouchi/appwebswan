import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { userThunk } from "../slices/authSlice";

export default function useAuth() {
  const dispatch = useDispatch();
  const user = useSelector(s => s.auth.user);   // 1. on pioche dans le coffre

  useEffect(() => {                             // 2.
    if (!user) dispatch(userThunk());           // 3.
  }, [user, dispatch]);

  return { user, isLogged: !!user };            // 4.
}
