import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // log the error or perform any necessary actions
  }

  render() {
    if (this.state.hasError) {
      // fallback UI
      return <h1>Something went wrong!</h1>;
    }
    // comment
    return this.props.children;
  }
}
// test comment
export default ErrorBoundary;
