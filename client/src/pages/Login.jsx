import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { GooglePlusOutlined } from "@ant-design/icons";
import { handleLogin } from "../store/auth/actions";
import Button from "../components/common/Button";
import { ADMIN } from "../constants/routes";
import "../assets/scss/login.scss";
import logo from "../assets/images/logo.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const settingForm = {
    label: { span: 6 },
    container: { span: 24 },
  };

  useEffect(() => {
    if (token) {
      if (user.role === 1) {
        navigate(ADMIN.PROCESS);
      } else {
        navigate(ADMIN.PROCESS);
      }
    }
  }, [token, user, navigate]);

  const submit = async (value) => {
    dispatch(
      handleLogin({
        user: value,
        actions: {
          success: (data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", data.user);
            navigate("/admin");
          },
          error: () => {},
        },
      })
    );
  };

  const loginGoogle = (response) => {
    console.log("google", response);
  };

  return (
    <div className="login">
      <div className="login__box-form">
        {/* <div className="login__box-form__left"></div> */}
        <div className="login__box-form__right">
          <div className="login__box-form__right__logo">
            <img src={logo} />
          </div>
          <Form
            labelCol={settingForm.label}
            wrapperCol={settingForm.container}
            onFinish={submit}
          >
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button
                text="Đăng nhập"
                typeButton="submit"
                classButton="btn-submit full-width"
              />
            </Form.Item>
          </Form>
          <div className="login__box-form__right__action">
            <Link to="/register">Đăng kí</Link>
            <Link to="/reset-password">Quyên mật khẩu?</Link>
          </div>
          <hr style={{ width: "100%" }} />
          <div className="login__box-form__right__other">
            <GoogleLogin
              clientId="454904389165-t5282n9uetb3chuanbk6l1uu0sbtd7hr.apps.googleusercontent.com"
              buttonText="Login"
              render={(renderProps) => (
                <Button
                  text="Login With Google"
                  classButton="btn-login-google"
                  beforeIcon={<GooglePlusOutlined style={{ color: "red" }} />}
                  click={renderProps.onClick}
                />
              )}
              onSuccess={loginGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>  
      </div>
    </div>
  );
};

export default LoginPage;
