import { h, Component } from 'preact';

interface Props {
  name?: string;
  children?: any;
}

export default class Bloc extends Component<Props> {
  render({ name, children }: any) {
    return (
      <section class="bloc" >
        <div class="content">
          {this.props.name && <h1>{name}</h1>}
          {children}
        </div>
      </section>
    );
  }
}