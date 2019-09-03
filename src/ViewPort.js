import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getViewPortSize } from './store/reducers/interface/action';

class ViewPort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    const size = { width: this.state.width, height: this.state.height };
    this.props.getViewPortSize(size);
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getViewPortSize: size => dispatch(getViewPortSize(size)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ViewPort);
