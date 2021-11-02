/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col, Card, Button, Radio, Nav, Dropdown, RadioGroup, ButtonGroup, DropdownMenu } from '@douyinfe/semi-ui';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Size } from '@douyinfe/semi-ui/lib/es/button';

type ButtonsState = {
    size: Size;
    loading: boolean;
    iconLoading: boolean;
};
class Buttons extends React.Component<any, ButtonsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            size: 'default',
            loading: false,
            iconLoading: false,
        };
    }

    handleSizeChange = (e: any) => {
        this.setState({ size: e.target.value });
    };
    handleMenuClick = (e: any) => {
        console.log('click', e);
    };
    enterLoading = () => {
        this.setState({ loading: true });
    };
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };
    render() {
        const size = this.state.size;
        const menu = [
            <Dropdown.Item onClick={this.handleMenuClick}>
                <Nav.Item key="1">1st item</Nav.Item>
                <Nav.Item key="2">2nd item</Nav.Item>
                <Nav.Item key="3">3rd item</Nav.Item>
            </Dropdown.Item>
        ];
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom breads={['UI', '按钮']} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary">Primary</Button>
                                <Button>Default</Button>
                                <Button type="danger">Danger</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" icon="search">
                                    Search
                                </Button>
                                <Button icon="search">Search</Button>
                                <br />
                                <Button icon="search">Search</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <RadioGroup type='button' value={size} onChange={this.handleSizeChange}>
                                    <Radio value="large">Large</Radio>
                                    <Radio value="default">Default</Radio>
                                    <Radio value="small">Small</Radio>
                                </RadioGroup>
                                <br />
                                <br />
                                <Button type="primary" icon="download" size={size} />
                                <Button type="primary" icon="download" size={size}>
                                    Download
                                </Button>
                                <Button type="primary" size={size}>
                                    Normal
                                </Button>
                                <br />
                                <ButtonGroup size={size}>
                                    <Button type="primary">
                                        <LeftOutlined />
                                        Backward
                                    </Button>
                                    <Button type="primary">
                                        Forward
                                        <RightOutlined />
                                    </Button>
                                </ButtonGroup>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary">primary</Button>
                                <Button>secondary</Button>
                                <Dropdown render={
                                    <Dropdown.Menu>
                                        <Dropdown.Title>分组1</Dropdown.Title>
                                        <Dropdown.Item type="primary">primary</Dropdown.Item>
                                        <Dropdown.Item type="secondary">secondary</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Title>分组2</Dropdown.Title>
                                        <Dropdown.Item type="tertiary">tertiary</Dropdown.Item>
                                        <Dropdown.Item type="warning" active>
                                            warning
                                        </Dropdown.Item>
                                        <Dropdown.Item type="danger">danger</Dropdown.Item>
                                    </Dropdown.Menu>
                                }>
                                    <Button>
                                        more <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" loading>
                                    Loading
                                </Button>
                                <Button type="primary" size="small" loading>
                                    Loading
                                </Button>
                                <br />
                                <Button
                                    type="primary"
                                    loading={this.state.loading}
                                    onClick={this.enterLoading}
                                >
                                    Click me!
                                </Button>
                                <Button
                                    type="primary"
                                    icon="poweroff"
                                    loading={this.state.iconLoading}
                                    onClick={this.enterIconLoading}
                                >
                                    Click me!
                                </Button>
                                <br />
                                <Button loading />
                                <Button type="primary" loading />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <style>{`
                    .button-demo .ant-btn {
                        margin-right: 8px;
                        margin-bottom: 12px;
                    }
                `}</style>
            </div>
        );
    }
}

export default Buttons;
