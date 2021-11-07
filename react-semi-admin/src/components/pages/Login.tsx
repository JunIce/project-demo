import React, { useEffect } from 'react';
import { Button, Form, Input } from '@douyinfe/semi-ui';
import { PwaInstaller } from '../widget';
import { useAlita } from 'redux-alita';
import { RouteComponentProps } from 'react-router';
import { FormProps } from 'antd/lib/form';
import umbrella from 'umbrella-storage';
import { useUpdateEffect } from 'ahooks';
import { IconKey, IconUser } from '@douyinfe/semi-icons';

type LoginProps = {
    setAlitaState: (param: any) => void;
    auth: any;
} & RouteComponentProps &
    FormProps;

const Login = (props: LoginProps) => {
    const { history } = props;
    const [auth, setAlita] = useAlita({ auth: {} }, { light: true });

    useEffect(() => {
        setAlita('auth', null);
    }, [setAlita]);

    useUpdateEffect(() => {
        if (auth && auth.uid) {
            // 判断是否登陆
            umbrella.setLocalStorage('user', auth);
            history.push('/');
        }
    }, [history, auth]);

    const handleSubmit = (values: any) => {
        if (checkUser(values)) {
            setAlita({ funcName: values.userName, stateName: 'auth' });
        }
    };
    const checkUser = (values: any) => {
        const users = [
            ['admin', 'admin'],
            ['guest', 'guest'],
        ];
        return users.some((user) => user[0] === values.userName && user[1] === values.password);
    };

    return (
        <div className="login">
            <div className="login-form">
                <div className="login-logo">
                    <span>React Admin</span>
                    <PwaInstaller />
                </div>
                <Form onSubmit={(v) => {
                    console.log(v)
                }}>
                    <div>

                        <Form.Input
                            noLabel
                            field="userName"
                            prefix={<IconUser />}
                            placeholder="请输入用户名"
                        />
                    </div>

                    <div>
                        <Form.Input
                            noLabel
                            field="password"
                            prefix={<IconKey />}
                            type="password"
                            placeholder="请输入密码"
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
                        >登录</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
