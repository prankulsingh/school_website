import React from "react";
import NoticesWidget from "../../components/NoticesWidget/NoticesWidget";

class Notices extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="section base-page vision-page">
                        <NoticesWidget
                            showTitle={true}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Notices;
