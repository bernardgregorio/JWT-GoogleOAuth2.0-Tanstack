import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { useVerifyTokenQuery } from "./authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import useLocalStorage from "../../hooks/useLocalStorage";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
  const [auth] = useLocalStorage("auth", "");
  const [, setUsername] = useLocalStorage("username", "");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError } = useVerifyTokenQuery();

  useEffect(() => {
    if (auth) {
      navigate("/");
      return;
    }

    if (isSuccess && data?.token) {
      const user = jwtDecode(data.token);
      dispatch(setCredentials({ token: data.token, username: user.username }));
      setUsername(user.username);
      navigate("/");
    }
  }, [isSuccess, data, auth, dispatch, navigate, setUsername]);

  let content;

  if (isLoading) {
    content = "Please wait while we verify your credentials...";
  } else if (isError) {
    content = (
      <>
        Error verifying credentials.
        <Link to="/login">
          <span className="font-bold">Login</span>
        </Link>
      </>
    );
  } else if (isSuccess) {
    content = "Credentials verified. Redirecting...";
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center font-roboto">
      <section className="w-80 min-h-60 border border-gray-200 p-3 bg-gray-100 rounded-md shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-2xl flex flex-row items-center">
          <GoogleIcon className="mr-2" />
          <span>Google Authentication</span>
        </h1>
        <p className="mt-10">{content}</p>
      </section>
    </main>
  );
};

export default GoogleAuth;
