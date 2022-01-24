import React from "react";
import Link from "next/link";
import { A, Section, SubSection } from "@root/styles/Global";
import { prettyName } from "@utils/upperCase";

export default function Projects({ projects }) {
  const projectsList = projects?.map((project) => {
    const { code, description, id } = project;
    return (
      <li>
        <SubSection flexDirection="row">
          <Link href={`/projets/${id}`} passHref>
            <A color="#a13580">
              <b>{prettyName(code)}</b>
            </A>
          </Link>
          <p>{prettyName(description)}</p>
          <Link href={`/projets/${id}`} passHref>
            <A>Accéder au projet</A>
          </Link>
        </SubSection>
      </li>
    );
  });

  const projectsDisplay =
    projects?.length > 0 ? (
      <ul>{projectsList}</ul>
    ) : (
      <Section>
        <p>Non renseignés</p>
      </Section>
    );

  return projectsDisplay;
}
