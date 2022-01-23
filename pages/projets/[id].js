import React from "react";
import Meta from "@components/core/Meta";
import { Inner, WrapperSection, Section } from "@styles/Global";
import { prettyName } from "@utils/upperCase";
import { getProject, getProjects } from "@services/projects";

export default function index({ project }) {
  const { code, description, owner } = project;

  const meta = {
    name: `Microbiome studio - ${code}`,
    description: `Détails sur le projet ${code}`,
  };

  return (
    <Inner>
      <Meta meta={meta} />
      <h1>{prettyName(code)}</h1>
      <WrapperSection gap="10px">
        <Section>
          <h2>Presentation</h2>
          <p>{description}</p>
        </Section>
        <Section gap="15px">
          <h2>Membre propriétaire</h2>
          <p>
            {prettyName(owner.first_name)} {prettyName(owner.last_name)}
          </p>
          <p>{owner.email}</p>
        </Section>
      </WrapperSection>
    </Inner>
  );
}

export const getStaticPaths = async () => {
  const projects = await getProjects(0, 100).then((response) => response);
  const paths = projects.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const project = await getProject(id);

  return {
    props: { project },
  };
};
