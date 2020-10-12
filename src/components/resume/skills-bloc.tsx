import { h, Component } from 'preact';

interface Props {
  name: string;
  skills: any;
  className?: string;
}

export default class ResumeSkillsBloc extends Component<Props> {
  render({ name, skills, className }: any) {
    return (
      <div class={"skill-bloc " + className}>
        <div class="title">{name}</div>
        <ul>
          {skills.map((skill: string) => <li>{skill}</li>)}
        </ul>
      </div>
    );
  }
}
