import React from "react";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { GooglePlusOutlined } from "@ant-design/icons";
import { handleLogin } from "../store/auth/actions";
import Button from "../components/common/Button";
import "../assets/scss/login.scss";
import logo from "../assets/images/logo.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const settingForm = {
    label: { span: 6 },
    container: { span: 24 },
  };

  const submit = async (value) => {
    console.log(value);
    dispatch(
      handleLogin(value, {
        success: () => {},
        error: () => {
          console.log("error");
        },
      })
    );
    // navigate("/admin");
  };

  const loginGoogle = () => {};

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
