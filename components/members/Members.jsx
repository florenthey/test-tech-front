import React from "react";
import Link from "next/link";
import { A, Section, SubSection } from "@root/styles/Global";

export default function Members({ members }) {
  const membersList = members?.map((member) => {
    const { first_name, last_name, id } = member;
    return (
      <li>
        <SubSection>
          <Link href={`/membres/${id}`} passHref>
            <A>
              <b>{last_name}</b> {first_name}
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
      <p>Non renseignés</p>
    );

  return membersDisplay;
}
