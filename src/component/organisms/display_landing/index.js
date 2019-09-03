import React, { Component } from "react";
import { connect } from "react-redux";
import LandingDisplay from "../../molecules/landing_display";
import { FullScreen, Content } from "./../../atoms";

class DisplayLanding extends Component {
  render() {
    const { viewPortSizes } = this.props;

    console.log(viewPortSizes);
    return (
      <FullScreen viewPortSizes={viewPortSizes}>
        <Content>
          <LandingDisplay />
        </Content>
      </FullScreen>
    );
  }
}

function mapStateToProps(state) {
  return {
    viewPortSizes: state.ui.viewPortSizes
  };
}

export default connect(mapStateToProps)(DisplayLanding);
