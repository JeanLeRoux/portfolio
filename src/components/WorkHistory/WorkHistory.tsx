import Headings from "../Common/Headings/Headings";
import "./WorkHistory.scss";

export default function WorkHistory() {
  return (
    <div className={"history-background"}>
      <Headings
        headingOne={"Work History"}
        headingTwo={"Companies and Projects"}
        paragraph={""}
      />
      <h3 className={"company-name"}>Full Stack Engineer at Autumn Leaf IT - November 2020 - present</h3>
      <p>
        For the past year, I have been a part of a hard-working team involved
        with high-profile cloud-based software solutions. These projects
        include:
      </p>
      <p>
        <span className={"express-text"}>A genetics analysis app:</span> This application uses users
        genetics along with their exercise data (retrieved from third party
        services such as Garmin), to determine a variety of metrics including:
      </p>
      <ul>
        <li>
          The likelihood that a user will get injured during their next
          exercise.
        </li>
        <li>The improvement of a user's fitness over some time.</li>
      </ul>
      <p>
        I was the Backend Lead on this application built using AWS cloud
        services and React. The frontend was served using a GraphQL API.
      </p>
      <p>
        <span className={"express-text"}>An infrastructure monitoring and reporting app:</span> This
        application allows a company to sign up and add their infrastructure to
        be monitored by the application. The company is then able to monitor its
        infrastructure in real-time, see if the infrastructure complies with
        various regulations including POPI, as well as receive monthly reports.
        I worked on both frontend and backend of this application. The frontend
        is built using React. The backend is built using AWS services including
        API Gateway (REST API), Lambda, RDS, and S3.
      </p>
      <span className={"express-text"}>Roles and Responsibilities:</span>
      <ul>
        <li>Research and implement best practices for the back end including python and GraphQL.</li>
        <li>Create a template using AWS CloudFormation and SAM, which allows the Dev team to quickly set up the base infrastructure and services for any project.</li>
        <li>Ensure secure code and infrastructure.</li>
        <li>Code core features for applications in both front and backend.</li>
        <li>Manage and mentor team members.</li>
        <li>Work closely and communicate directly with clients in order to take a project from requirements to the final product.</li>
      </ul>
    </div>
  );
}
