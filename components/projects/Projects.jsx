import React from "react";
import Link from "next/link";
import { Section, SubSection, Text } from "@root/styles/Global";
import { prettyName } from "@utils/upperCase";

export default function Projects({ projects }) {
  const projectsList = projects?.map((project) => {
    const { code, description, id } = project;
    return (
      <li>
        <Link href={`/projets/${id}`} passHref>
          <a color="#a13580">
            <SubSection flexDirection="row">
              <Text color="#a13580">
                <b>{prettyName(code)}</b>
              </Text>
              <p>{prettyName(description)}</p>
              <Link href={`/projets/${id}`} passHref>
                <Text>Accéder au projet</Text>
              </Link>
            </SubSection>
          </a>
        </Link>
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
