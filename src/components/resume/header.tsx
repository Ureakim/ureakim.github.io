import { h, Component } from 'preact';
import { CodeSquareIcon, MailIcon, PersonIcon } from "@primer/octicons-react";

interface Props {
  infos: any,
}

export default class ResumeHeader extends Component<Props> {
  render({ infos }: any) {
    return (
      <div class="resume-header">
        <span class="name slide slide-up">
          <span>{infos.name}</span>
        </span>
        <span class="work slide slide-down">
          <span>{infos.work}</span>
        </span>
        <span class="contact slide slide-delayed slide-up">
          <a href={infos.git} title="Github" target="_blank" class="git">
            <CodeSquareIcon size={24} />
          </a>
          <a href={"mailto:" + infos.email} title={infos.email} class="email">
            <MailIcon size={24} />
          </a>
          <a href={infos.linkedin} title="Linkedin" target="_blank" class="profil">
            <PersonIcon size={24} />
          </a>
        </span>
      </div>
    );
  }
}
