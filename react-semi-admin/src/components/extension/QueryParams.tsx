import React, { Component } from 'react';
import { Row, Col, Card } from '@douyinfe/semi-ui';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';

type QueryParamsProps = {
    query: any;
};

class QueryParams extends Component<QueryParamsProps> {
    render() {
        const { query } = this.props;
        return (
            <div>
                <BreadcrumbCustom breads={['queryParams']} />
                <Row gutter={16}>
                    <Col md={24}>
                        <Card title="query参数Demo" bordered={false}>
                            <div>参数1： {query.param1}</div>
                            <div>参数2： {query.param2}</div>
                            <div>
                                其他参数：{' '}
                                {query.others || (
                                    <a href="#/app/extension/queryParams?others=nothing">
                                        点击查看
                                    </a>
                                )}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default QueryParams;
