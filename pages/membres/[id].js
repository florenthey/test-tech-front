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
import { useRouter } from "next/router";
import React from "react";

export default function index({ member }) {
  const { last_name, first_name, email, projects, id, organization } = member;
  const organizationName = organization.name;
  const router = useRouter();

  const meta = {
    name: `Microbiome studio - ${last_name} ${first_name}`,
    description: `Profil de ${last_name} ${first_name}, membre de l'organisation ${organizationName}`,
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const projectsDisplay =
    projects.length > 0 ? (
      projects.map((project) => <p>{prettyName(project.code)}</p>)
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
            <CreateProject member={member} refreshData={refreshData} />
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
