import React from 'react';
import { Row, Col, Card } from '@douyinfe/semi-ui';
import BasicTable from './BasicTable';
import SelectTable from './SelectTable';
import SortTable from './SortTable';
import SearchTable from './SearchTable';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';

const BasicTables = () => (
    <div className="gutter-example">
        <BreadcrumbCustom breads={['表格', '基础表格']} />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card bordered={false}>
                        <BasicTable />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);

export default BasicTables;
