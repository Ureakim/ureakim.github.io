import { h, Component } from 'preact';
import ResumeExperiencesBloc from "./experiences-bloc";

interface Props {
  experiences: any[];
}

export default class ResumeExperiences extends Component<Props> {
  render({ experiences }: any) {
    return (
      <div>
        {experiences.map((experience: any) => {
          return <ResumeExperiencesBloc experience={experience} />
        })}
      </div>
    );
  }
}
