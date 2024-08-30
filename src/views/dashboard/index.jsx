// import React from 'react';
import React, { useState, useEffect } from 'react';
// react-bootstrap
import { Row, Col, Card, Table } from 'react-bootstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';

// third party
import Chart from 'react-apexcharts';
// import PerfectScrollbar from 'react-perfect-scrollbar';

// project import
import OrderCard from '../../components/Widgets/Statistic/OrderCard';
import SocialCard from '../../components/Widgets/Statistic/SocialCard';

import uniqueVisitorChart from './chart/analytics-unique-visitor-chart';
import customerChart from './chart/analytics-cuatomer-chart';
import customerChart1 from './chart/analytics-cuatomer-chart-1';
// ==============================|| DASHBOARD ANALYTICS ||============================== //

const DashAnalytics = () => {
  const [googleSheetData, setGoogleSheetData] = useState({ primaryText: '', extraText: '' });

  const fetchGoogleSheetData = async () => {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwDvp40NH6MbsW-jUvhcfFXRvxy7zg2BIG9skD5zvLBq892kqoFrVmspyKwTyOFzYzL/exec'
      );
      const data = await response.json();
      setGoogleSheetData(data);
    } catch (error) {
      console.error('Error fetching Google Sheets data:', error);
    }
  };

  useEffect(() => {
    fetchGoogleSheetData();
  }, []);
  return (
    <React.Fragment>
      <Row>
        {/* order cards */}
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Customers',
              class: 'bg-c-blue',
              icon: 'feather icon-shopping-cart',
              primaryText: googleSheetData.primaryText, // A1 value
              secondaryText: 'This Month',
              extraText: googleSheetData.extraText // A2 value
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Revenue',
              class: 'bg-c-green',
              icon: 'feather icon-repeat',
              primaryText: googleSheetData.primaryText, // A1 value
              secondaryText: 'This Month',
              extraText: googleSheetData.extraText // A2 value
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Profit',
              class: 'bg-c-yellow',
              icon: 'feather icon-award',
              primaryText: googleSheetData.primaryText, // A1 value
              secondaryText: 'This Month',
              extraText: googleSheetData.extraText // A2 value
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Expenses',
              class: 'bg-c-red',
              icon: 'feather icon-tag',
              primaryText: googleSheetData.primaryText, // A1 value
              secondaryText: 'This Month',
              extraText: googleSheetData.extraText // A2 value
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'General Service Lead',
              class: 'bg-c-green',
              icon: 'feather icon-monitor',
              primaryText: googleSheetData.primaryText, // A1 value
              secondaryText: 'This Month',
              extraText: googleSheetData.extraText // A2 value
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'E-Savai Lead',
              class: 'bg-c-blue',
              icon: 'feather icon-link',
              primaryText: googleSheetData.primaryText, // A1 value
              secondaryText: 'This Month',
              extraText: googleSheetData.extraText // A2 value
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Job Application Lead',
              class: 'bg-c-red',
              icon: 'feather icon-briefcase',
              primaryText: googleSheetData.primaryText, // A1 value
              secondaryText: 'This Month',
              extraText: googleSheetData.extraText // A2 value
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Travel Service Lead',
              class: 'bg-c-yellow',
              icon: 'feather icon-anchor',
              primaryText: googleSheetData.primaryText, // A1 value
              secondaryText: 'This Month',
              extraText: googleSheetData.extraText // A2 value
            }}
          />
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h5>Visitor</h5>
            </Card.Header>
            <Card.Body className="ps-4 pt-4 pb-0">
              <Chart {...uniqueVisitorChart} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Row>
            <Col sm={6}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col sm="auto">
                      <span>Today</span>
                    </Col>
                    <Col className="text-end">
                      <h2 className="mb-0">49</h2>
                      <span className="text-c-green">
                        8.2%
                        <i className="feather icon-trending-up ms-1" />
                      </span>
                    </Col>
                  </Row>
                  <Chart {...customerChart} />
                  <Row className="mt-3 text-center">
                    <Col>
                      <h3 className="m-0">
                        <i className="fas fa-circle f-10 mx-2 text-success" />
                        39
                      </h3>
                      <span className="ms-3">New</span>
                    </Col>
                    <Col>
                      <h3 className="m-0">
                        <i className="fas fa-circle text-primary f-10 mx-2" />
                        10
                      </h3>
                      <span className="ms-3">Existing</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="bg-primary text-white">
                <Card.Body>
                  <Row>
                    <Col sm="auto">
                      <span>Sales</span>
                    </Col>
                    <Col className="text-end">
                      <h2 className="mb-0 text-white">7.5K</h2>
                      <span className="text-white">
                        9.8%
                        <i className="feather icon-trending-up ms-1" />
                      </span>
                    </Col>
                  </Row>
                  <Chart {...customerChart1} />
                  <Row className="mt-3 text-center">
                    <Col>
                      <h3 className="m-0 text-white">
                        <i className="fas fa-circle f-10 mx-2 text-success" />
                        6k
                      </h3>
                      <span className="ms-3">Profit</span>
                    </Col>
                    <Col>
                      <h3 className="m-0 text-white">
                        <i className="fas fa-circle f-10 mx-2 text-white" />
                        1.5k
                      </h3>
                      <span className="ms-3">Expenses</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={4} md={12}>
          <SocialCard
            params={{
              icon: 'fab fa-twitter',
              class: 'blue',
              variant: 'primary',
              primaryTitle: '8.62k',
              primaryText: 'Subscribers',
              secondaryText: 'Your main list is growing',
              label: 'Manage List'
            }}
          />
        </Col>
        <Col lg={4} md={12}>
          <SocialCard
            params={{
              icon: 'fab fa-facebook',
              class: 'blue',
              variant: 'primary',
              primaryTitle: '8.62k',
              primaryText: 'Subscribers',
              secondaryText: 'Your main list is growing',
              label: 'Manage List'
            }}
          />
        </Col>
        <Col lg={4} md={12}>
          <SocialCard
            params={{
              icon: 'fab fa-instagram',
              class: 'blue',
              variant: 'primary',
              primaryTitle: '8.62k',
              primaryText: 'Subscribers',
              secondaryText: 'Your main list is growing',
              label: 'Manage List'
            }}
          />
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              {/* <Card.Title as="h5">Campaign Monitor</Card.Title> */}
              <Card.Title as="h5">Staff Wise Sales</Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-card" style={{ height: '362px' }}>
                <PerfectScrollbar>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>
                          <span>Date</span>
                        </th>
                        <th>
                          <span>Rajeswari</span>
                        </th>
                        <th>
                          <span>Susmitha</span>
                        </th>
                        <th>
                          <span>Gayathri</span>
                        </th>
                        <th>
                          <span>Vasuthiyagarajan</span>
                        </th>
                        <th>
                          <span>Kaviya</span>
                        </th>
                        <th>
                          <span>Mathiazhagan</span>
                        </th>
                        <th>
                          <span>Refai</span>
                        </th>
                        <th>
                          <span>Shaffi</span>
                        </th>
                        <th>
                          <span>Sheerin</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>25-8-2012</td>
                        <td>786</td>
                        <td>485</td>
                        <td>769</td>
                        <td>45,3%</td>
                        <td>6,7%</td>
                        <td>8,56</td>
                        <td>8,56</td>
                        <td>10:55</td>
                        <td>33.8%</td>
                      </tr>
                      <tr>
                        <td>24-8-2012</td>
                        <td>786</td>
                        <td>523</td>
                        <td>736</td>
                        <td>78,3%</td>
                        <td>6,6%</td>
                        <td>6,6%</td>
                        <td>7,56</td>
                        <td>4:30</td>
                        <td>76.8%</td>
                      </tr>
                      <tr>
                        <td>23-8-2012</td>
                        <td>624</td>
                        <td>436</td>
                        <td>756</td>
                        <td>78,3%</td>
                        <td>6,4%</td>
                        <td>9,45</td>
                        <td>9:05</td>
                        <td>9:05</td>
                        <td>8.63%</td>
                      </tr>
                      <tr>
                        <td>22-8-2012</td>
                        <td>423</td>
                        <td>123</td>
                        <td>756</td>
                        <td>78,6%</td>
                        <td>45,6%</td>
                        <td>6,85</td>
                        <td>6,85</td>
                        <td>7:45</td>
                        <td>33.8%</td>
                      </tr>
                      <tr>
                        <td>23-8-2012</td>
                        <td>465</td>
                        <td>463</td>
                        <td>456</td>
                        <td>68,6%</td>
                        <td>76,6%</td>
                        <td>7,56</td>
                        <td>68,6%</td>
                        <td>8:45</td>
                        <td>39.8%</td>
                      </tr>
                      <tr>
                        <td>22-8-2012</td>
                        <td>786</td>
                        <td>485</td>
                        <td>769</td>
                        <td>45,3%</td>
                        <td>6,7%</td>
                        <td>8,56</td>
                        <td>10:55</td>
                        <td>10:55</td>
                        <td>33.8%</td>
                      </tr>
                      {/* <tr>
                        <td>21-8-2012</td>
                        <td>786</td>
                        <td>523</td>
                        <td>736</td>
                        <td>78,3%</td>
                        <td>6,6%</td>
                        <td>7,56</td>
                        <td>4:30</td>
                        <td>4:30</td>
                        <td>76.8%</td>
                      </tr> */}
                    </tbody>
                  </Table>
                </PerfectScrollbar>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashAnalytics;
