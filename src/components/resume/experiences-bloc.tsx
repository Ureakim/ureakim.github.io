import { h, Component } from 'preact';
import { LinkExternalIcon } from '@primer/octicons-react';

interface Props {
  experience: any;
}

export default class ResumeExperiences extends Component<Props> {
  getCompanyName(company: any) {
    if (company.url) {
      return (
        <div class="company-name">
          <a href={company.url} target="_blank">{company.name} <LinkExternalIcon /></a>
        </div>
      );
    } else {
      return (
        <div class="company-name">
          <span>{company.name}</span>
        </div>
      );
    }
  }

  getDetailHeader(detail: any) {
    if (detail.long) {
      return (
        <details>
          <summary>{detail.short}</summary>
          <p>{detail.long}</p>
        </details>
      )
    } else {
      return <div><span class="details">{detail.short}</span></div>
    }
  }

  render({ experience }: any) {
    return (
      <div class="experiences-bloc">
        <div class="date">
          <span>{experience.date}</span>
        </div>
        <div class="experience">
          {this.getCompanyName(experience.company)}
          <div>
            <span class="description">{experience.work.description}</span>
          </div>
          <ul>
            {experience.work.details.map(
              (detail: any) => {
                return <li>
                  {this.getDetailHeader(detail)}
                  <div class="badges">
                    {detail.stack && detail.stack.map(
                      (item: string) => { return <span class="badge">{item}</span> }
                    )}
                  </div>
                </li>
              }
            )}
          </ul>
        </div>
      </div>
    );
  }
}
