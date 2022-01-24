import Meta from "@root/components/core/Meta";
import CreateProject from "@root/components/form/createProject/CreateProject";
import {
  Inner,
  Section,
  WrapperSection,
  WrapperDoubleSection,
} from "@root/styles/Global";
import { prettyName } from "@root/utils/upperCase";
import { getMember, getMembers } from "@services/members";
import React, { useState } from "react";

export default function index({ member }) {
  const { last_name, first_name, email, projects, organization } = member;
  const [memberProject, setMemberProject] = useState(projects);

  const organizationName = organization.name;

  const meta = {
    name: `Microbiome studio - ${last_name} ${first_name}`,
    description: `Profil de ${last_name} ${first_name}, membre de l'organisation ${organizationName}`,
  };

  const projectsDisplay =
    memberProject.length > 0 ? (
      memberProject.map((project) => <p>{prettyName(project.code)}</p>)
    ) : (
      <p>Pas de projet</p>
    );

  return (
    <Inner>
      <Meta meta={meta} />
      <WrapperSection>
        <WrapperDoubleSection>
          <Section width="100%">
            <h1>
              {prettyName(first_name)} {prettyName(last_name)}
            </h1>
            <p>{organizationName}</p>
            <p>{email}</p>
          </Section>
          <Section background="#ec5990">
            <CreateProject
              member={member}
              memberProject={memberProject}
              setMemberProject={setMemberProject}
            />
          </Section>
        </WrapperDoubleSection>
        <Section>
          <h2>Projets</h2>
          {projectsDisplay}
        </Section>
      </WrapperSection>
    </Inner>
  );
}

export const getStaticPaths = async () => {
  const members = await getMembers(0, 100).then((response) => response);
  const paths = members.map((member) => {
    return {
      params: { id: member?.id?.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const member = await getMember(id);

  return {
    props: { member },
    revalidate: 1,
  };
};
