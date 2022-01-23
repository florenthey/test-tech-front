import React from "react";
import Link from "next/link";
import { A, Section, SubSection } from "@root/styles/Global";
import { prettyName } from "@utils/upperCase";

export default function Members({ members }) {
  const membersList = members?.map((member) => {
    console.log(member);
    const { first_name, last_name, email, id } = member;
    return (
      <li>
        <SubSection background="#d9d7d7" flexDirection="row">
          <p>
            <b>{prettyName(last_name)}</b> {prettyName(first_name)}
          </p>
          <p>{email}</p>
          <Link href={`/membres/${id}`} passHref>
            <A>Accéder au profil</A>
          </Link>
        </SubSection>
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
