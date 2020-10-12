import { h, Component } from 'preact';
import ResumeSkillsBloc from "./skills-bloc";

interface Props {
  skills: any,
}

export default class ResumeSkills extends Component<Props> {
  render({ skills }: any) {
    return (
      <div class="skills">
        <ResumeSkillsBloc
          name="Backend"
          skills={skills.backend}
          className="bloc-blue" />

        <ResumeSkillsBloc
          name="Frontend"
          skills={skills.frontend}
          className="bloc-green" />

        <ResumeSkillsBloc
          name="Outils"
          skills={skills.tooling}
          className="bloc-orange" />
      </div>
    );
  }
}
