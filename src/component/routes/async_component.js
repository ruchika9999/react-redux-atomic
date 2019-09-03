import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    _isMounted = false;
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      this._isMounted = true;
      const { default: component } = await importComponent();
      if (this._isMounted) {
        this.setState({
          component: component,
        });
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <div>Loading...</div>;
    }
  }

  return AsyncComponent;
}
