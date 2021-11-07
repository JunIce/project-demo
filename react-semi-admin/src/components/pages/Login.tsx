import React, { useState } from 'react';
import { Button, Form } from '@douyinfe/semi-ui';
// import { PwaInstaller } from '../widget';
import { RouteComponentProps } from 'react-router';
import { FormProps } from 'antd/lib/form';
import { IconKey, IconUser } from '@douyinfe/semi-icons';

type LoginProps = RouteComponentProps & FormProps;

const Login = (props: LoginProps) => {
    const { history } = props;
    const [formLoading, setFormLoading] = useState(false);

    const asyncValidateFields = (values: any) => {
        setFormLoading(true);

        return new Promise((resolve) => {
            let errors: any = {};

            if (values.userName !== 'admin') {
                errors.userName = "用户名不正确"
            }

            if (values.password !== 'admin') {
                errors.password = "密码不正确"
            }

            setTimeout(() => {
                setFormLoading(false)
                resolve(errors);
            }, 2000)
        });
    }

    return (
        <div className="login">
            <div className="login-form">
                <div className="login-logo">
                    <span>登录</span>
                </div>
                <Form
                    validateFields={asyncValidateFields}
                    onSubmit={(v) => {
                        console.log(v)
                    }}>
                    <div>
                        <Form.Input
                            noLabel
                            field="userName"
                            prefix={<IconUser />}
                            placeholder="请输入用户名"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入用户名"
                                }
                            ]}
                        />
                    </div>

                    <div>
                        <Form.Input
                            noLabel
                            field="password"
                            prefix={<IconKey />}
                            type="password"
                            placeholder="请输入密码"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入密码"
                                }
                            ]}
                        />
                    </div>
                    <div className="forgot-section">
                        <a className="login-form-forgot" style={{ float: 'right' }}>
                            忘记密码
                        </a>
                    </div>
                    <div className="submit-btn">
                        <Button
                            size="large"
                            theme='solid'
                            type="primary"
                            htmlType='submit'
                            className="login-form-button"
                            style={{ width: '100%' }}
                            loading={formLoading}
                        >登录</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
