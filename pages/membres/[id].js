import Meta from "@root/components/core/Meta";
import CreateProject from "@root/components/form/CreateProject";
import {
  Inner,
  Section,
  TitleSection,
  WrapperSection,
} from "@root/styles/Global";
import { prettyName } from "@root/utils/upperCase";
import { getMember, getMembers } from "@services/members";
import React from "react";

export default function index({ member }) {
  const { last_name, first_name, email, id, projects, organization } = member;
  const organizationName = organization.name;

  const projectsDisplay = projects.map((project) => <p>{project.code}</p>);

  const meta = {
    name: `Microbiome studio - ${last_name} ${first_name}`,
    description: `Profil de ${last_name} ${first_name}, membre de l'organisation ${organizationName}`,
  };

  return (
    <Inner>
      <Meta meta={meta} />
      <WrapperSection>
        <Section>
          <h1>
            {prettyName(first_name)} {prettyName(last_name)}
          </h1>
          <p>{organizationName}</p>
          <p>contact: {email}</p>
        </Section>
        {projects.length > 0 && (
          <Section>
            <TitleSection>Projets:</TitleSection>
            {projectsDisplay}
          </Section>
        )}
        <Section>
          <CreateProject member={member} />
        </Section>
      </WrapperSection>
    </Inner>
  );
}

export const getStaticPaths = async () => {
  const members = await getMembers(0, 100).then((response) => response);
  const paths = members.map((member) => {
    return {
      params: { id: member.id.toString() },
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
