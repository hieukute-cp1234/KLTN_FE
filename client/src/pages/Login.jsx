import React from "react";
import { Form, Input } from "antd";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import "../assets/scss/login.scss";

const LoginPage = () => {
  const settingForm = {
    label: { span: 6 },
    container: { span: 24 },
  };
  const handleLogin = (value) => {
    console.log(value);
  };
  return (
    <div className="login">
      <div className="login__box-form">
        <div className="login__box-form__left"></div>
        <div className="login__box-form__right">
          <div className="login__box-form__right__logo">MIXUA</div>
          <p className="login__box-form__right__text">
            dang nhap de trai nghiem MIXUA
          </p>
          <Form
            labelCol={settingForm.label}
            wrapperCol={settingForm.container}
            onFinish={handleLogin}
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
          <div className="login__box-form__right__other"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
