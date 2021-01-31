import React from "react";
import PropTypes from 'prop-types';
import { Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle} from "reactstrap";
import Tabletop from 'tabletop';
import './NoticesWidget.scss'
import * as Constants from "../../constants/Constants";

class NoticesWidget extends React.Component {
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
                    this.setState({
                        showLoader: false,
                        noticeArray: googleSheetData
                    });
                },
                simpleSheet: true
            });
        } catch (e) {
            console.error('some error in getting data from google sheet via tabletop');
            this.setState({
                showLoader: false
            })
        }
    }

    render() {
        return (
            this.props.miniWidget ?
                this.getMiniWidget() :
                this.getFullSizeWidget()
        );
    }

    getMiniWidget() {
        return <Container>
            {
                this.state.showLoader &&
                !(this.state.noticeArray && this.state.noticeArray.length > 0) &&
                <p>
                    <i className="now-ui-icons loader_refresh spin"/> Loading notices...
                </p>
            }
            {
                !this.state.showLoader &&
                !(this.state.noticeArray && this.state.noticeArray.length > 0) &&
                <p>
                    <i className="now-ui-icons education_paper card-icon-size"/> No notices found
                    {
                        this.props.showHomeRedirect &&
                        <>
                            <br/>
                            <a href={Constants.subdomains.root}>
                                <i className="now-ui-icons business_bank"/>
                                {' '}Return to home
                            </a>
                        </>
                    }
                </p>
            }
            <ul style={{listStyleType:"none", paddingLeft:"0"}}>
                {
                    this.state.noticeArray && this.state.noticeArray.length > 0 &&
                    this.getEffectiveNoticeArray().map((notice, key) =>
                        <li>
                            <a href={notice['Public download link']} target="_blank">
                                {notice['Name']}
                            </a>
                        </li>
                    )
                }
            </ul>
        </Container>;
    }

    getFullSizeWidget() {
        return <Container>
            {
                this.props.showTitle &&
                <h2>{this.props.title}</h2>
            }
            <Row>
                {
                    this.state.showLoader &&
                    !(this.state.noticeArray && this.state.noticeArray.length > 0) &&
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h4">Loading notices...</CardTitle>
                                <i className="now-ui-icons loader_refresh spin card-icon-size"/>
                            </CardBody>
                        </Card>
                    </Col>
                }
                {
                    !this.state.showLoader &&
                    !(this.state.noticeArray && this.state.noticeArray.length > 0) &&
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h4">No notices found</CardTitle>
                                <i className="now-ui-icons education_paper card-icon-size"/>
                                {
                                    this.props.showHomeRedirect &&
                                    <>
                                        <br/><br/>
                                        <a href={Constants.subdomains.root}>
                                            <i className="now-ui-icons business_bank"/>
                                            {' '}Return to home
                                        </a>
                                    </>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                }
                {
                    this.state.noticeArray && this.state.noticeArray.length > 0 &&
                    this.getEffectiveNoticeArray().map((notice, key) =>
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
        </Container>;
    }

    getEffectiveNoticeArray = () => {
        if(isNaN(this.props.noOfNotices) || !this.props.noOfNotices) {
            return this.state.noticeArray;
        } else if(this.props.noOfNotices) {
            return this.state.noticeArray.slice(0, this.props.noOfNotices)
        }
    }
}

NoticesWidget.defaultProps = {
    noOfNotices: NaN,
    showHomeRedirect: true,
    title: "Important Notices",
    showTitle: false,
    miniWidget: false,
};

NoticesWidget.propTypes = {
    noOfNotices: PropTypes.number,
    showHomeRedirect: PropTypes.bool,
    title: PropTypes.string,
    showTitle: PropTypes.bool,
    miniWidget: PropTypes.bool,
};

export default NoticesWidget;
