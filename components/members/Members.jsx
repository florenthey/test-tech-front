import React from "react";
import Link from "next/link";
import { A, Section, SubSection } from "@root/styles/Global";
import { prettyName } from "@utils/upperCase";

export default function Members({ members }) {
  const membersList = members?.map((member) => {
    const { first_name, last_name, id } = member;
    return (
      <li>
        <SubSection background="red">
          <Link href={`/membres/${id}`} passHref>
            <A>
              <b>{prettyName(last_name)}</b> {prettyName(first_name)}
            </A>
          </Link>
        </SubSection>
      </li>
    );
  });

  const membersDisplay =
    members?.length > 0 ? (
      <ul>
        <Section>{membersList}</Section>
      </ul>
    ) : (
      <Section>
        <p>Non renseignés</p>
      </Section>
    );

  return membersDisplay;
}
