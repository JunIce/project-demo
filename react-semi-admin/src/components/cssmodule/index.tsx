/**
 *
 * 添加注释
 * Created by SEELE on 2018/1/12
 *
 */
import React, { Component } from 'react';
import { Col, Card, Row } from '@douyinfe/semi-ui';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import styles from './index.module.less';

class Cssmodule extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom breads={['cssModule']} />
                <Row gutter={16}>
                    <Col md={24}>
                        <Card title="cssModule" bordered={false}>
                            <div className={styles.header}>
                                <p>Hello CssModule</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cssmodule;
