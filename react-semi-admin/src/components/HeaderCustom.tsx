import React, { useEffect, useState } from 'react';
import screenfull from 'screenfull';
import avater from '../style/imgs/b1.jpg';
import SiderCustom from './SiderCustom';
import { Nav, Layout, Badge, Popover } from '@douyinfe/semi-ui';
import { gitOauthToken, gitOauthInfo } from '../service';
import { parseQuery } from '../utils';
import { useHistory } from 'react-router-dom';
import { PwaInstaller } from './widget';
import { useAlita } from 'redux-alita';
import umbrella from 'umbrella-storage';
import { useSwitch } from '../utils/hooks';
import {
    ArrowsAltOutlined,
    BarsOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
const SubMenu = Nav.Sub;
const MenuItemGroup = Nav.Sub;

type HeaderCustomProps = {
    toggle: () => void;
    collapsed: boolean;
    user: any;
    responsive?: any;
    path?: string;
};

const HeaderCustom = (props: HeaderCustomProps) => {
    const [user, setUser] = useState<any>();
    const [responsive] = useAlita('responsive', { light: true });
    const [visible, turn] = useSwitch();
    const history = useHistory();

    useEffect(() => {
        const query = parseQuery();
        let storageUser = umbrella.getLocalStorage('user');

        if (!storageUser && query.code) {
            gitOauthToken(query.code as string).then((res: any) => {
                gitOauthInfo(res.access_token).then((info: any) => {
                    setUser({
                        user: info,
                    });
                    umbrella.setLocalStorage('user', info);
                });
            });
        } else {
            setUser({
                user: storageUser,
            });
        }
    }, []);

    const screenFull = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle();
        }
    };
    const menuClick = (e: any) => {
        e.key === 'logout' && logout();
    };
    const logout = () => {
        umbrella.removeLocalStorage('user');
        history.push('/login');
    };

    return (
        <Layout.Header className="custom-theme header">
            <Nav
                mode="horizontal"
                style={{ lineHeight: '64px', float: 'right' }}
                onClick={menuClick}
            >
                <Nav.Header>
                    {responsive?.isMobile ? (
                        <Popover
                            content={<SiderCustom popoverHide={turn.turnOff} />}
                            trigger="click"
                            position={"bottomLeft"}
                            visible={visible}
                            onVisibleChange={(visible) => (visible ? turn.turnOn() : turn.turnOff())}
                        >
                            <BarsOutlined className="header__trigger custom-trigger" />
                        </Popover>
                    ) : props.collapsed ? (
                        <MenuUnfoldOutlined
                            className="header__trigger custom-trigger"
                            onClick={props.toggle}
                        />
                    ) : (
                        <MenuFoldOutlined
                            className="header__trigger custom-trigger"
                            onClick={props.toggle}
                        />
                    )}
                </Nav.Header>
                <Nav.Footer>
                    <Nav.Item key="pwa">
                        <PwaInstaller />
                    </Nav.Item>
                    <Nav.Item key="full">
                        <ArrowsAltOutlined onClick={screenFull} />
                    </Nav.Item>
                    <Nav.Item key="1">
                        <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
                            <NotificationOutlined />
                        </Badge>
                    </Nav.Item>
                    <SubMenu
                        text={
                            <span className="avatar">
                                <img src={avater} alt="头像" />
                                <i className="on bottom b-white" />
                            </span>
                        }
                    >
                        <MenuItemGroup text="用户中心">
                            <Nav.Item key="setting:1">你好 - {user?.userName}</Nav.Item>
                            <Nav.Item key="setting:2">个人信息</Nav.Item>
                            <Nav.Item key="logout">
                                <span onClick={logout}>退出登录</span>
                            </Nav.Item>
                        </MenuItemGroup>
                        <MenuItemGroup text="设置中心">
                            <Nav.Item key="setting:3">个人设置</Nav.Item>
                            <Nav.Item key="setting:4">系统设置</Nav.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Nav.Footer>
            </Nav>
        </Layout.Header>
    );
};

export default HeaderCustom;
