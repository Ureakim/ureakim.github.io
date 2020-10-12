import { h, render, Component } from 'preact';
import LayoutResume from "../layouts/resume"

class LayoutMain extends Component {
  render() {
    return <LayoutResume />;
  }
}

render(<LayoutMain />, document.body);