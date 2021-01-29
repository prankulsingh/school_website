import React from "react";
import { Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle} from "reactstrap";
import Tabletop from 'tabletop';
import './Notices.scss'
import * as Constants from "../../constants/Constants";

class Notices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: true,
            noticeArray: []
        };
    }

    componentDidMount() {
        try {
            Tabletop.init({
                key: Constants.apiKeys.googleSheetKey,
                callback: googleSheetData => {
                    console.log(googleSheetData);
                    this.setState({
                        showLoader: false,
                        noticeArray: googleSheetData
                    });
                },
                simpleSheet: true
            });
        } catch (e) {
            this.setState({
                showLoader: false
            })
        }
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="section base-page vision-page">
                        <Container>
                            <h2>Important Notices</h2>
                            <Row>
                                {
                                    this.state.showLoader &&
                                    !(this.state.noticeArray && this.state.noticeArray.length > 0) &&
                                    <Col md="12">
                                        <Card>
                                            <CardBody>
                                                <CardTitle tag="h4">Loading notices...</CardTitle>
                                                <i className="now-ui-icons loader_refresh spin loader"/>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                }
                                {
                                    this.state.noticeArray && this.state.noticeArray.length > 0 &&
                                    this.state.noticeArray.map((notice, key) =>
                                        <Col md="12">
                                            <Card>
                                                <CardBody>
                                                    <CardTitle tag="h4">{notice['Name']}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                                        {notice['Date']}
                                                    </CardSubtitle>
                                                    {notice['Description']}
                                                    <br/><br/>
                                                    <a href={notice['Public download link']} target="_blank">
                                                        <i className="now-ui-icons arrows-1_cloud-download-93"/>
                                                        {' '}Download
                                                    </a>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default Notices;
