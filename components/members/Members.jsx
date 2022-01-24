import React from "react";
import Link from "next/link";
import { Section, SubSection, Text } from "@root/styles/Global";
import { prettyName } from "@utils/upperCase";

export default function Members({ members }) {
  const membersList = members?.map((member) => {
    const { first_name, last_name, email, id } = member;

    return (
      <li>
        <Link href={`/membres/${id}`} passHref>
          <a>
            <SubSection flexDirection="row">
              <div>
                <Text color="#a13580">
                  <b>{prettyName(last_name)}</b> {prettyName(first_name)}
                </Text>
              </div>
              <Text color="black">{email}</Text>
              <Text>Accéder au profil</Text>
            </SubSection>
          </a>
        </Link>
      </li>
    );
  });

  const membersDisplay =
    members?.length > 0 ? (
      <ul>{membersList}</ul>
    ) : (
      <Section>
        <p>Non renseignés</p>
      </Section>
    );

  return membersDisplay;
}
