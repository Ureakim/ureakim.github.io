import { h, Component } from 'preact';
import Bloc from "../components/bloc";
import ResumeHeader from "../components/resume/header";
import ResumeSkills from "../components/resume/skills";
import ResumeExperiences from "../components/resume/experiences";
import resume from "../config/resume.json";

interface Props { }

interface State {
  resume: any
}

export default class LayoutResume extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      resume
    };
  }

  render(props: Props, { resume }: any) {
    return (
      <div>
        <Bloc>
          <ResumeHeader infos={resume.header} />
        </Bloc >
        <Bloc name="Compétences">
          <ResumeSkills skills={resume.skills} />
        </Bloc>
        <Bloc name="Expériences">
          <ResumeExperiences experiences={resume.experiences} />
        </Bloc>
      </div>
    );
  }
}
