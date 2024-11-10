import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  return <LoginForm onSubmit={handleLogin} />;
};

export default LoginPage;