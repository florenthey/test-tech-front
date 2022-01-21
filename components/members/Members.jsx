import React from "react";
import Link from "next/link";

export default function Members({ members }) {
  const membersList = members?.map((member) => {
    const { first_name, last_name, id } = member;
    return (
      <li>
        <Link href={`/membres/${id}`} passHref>
          <a>{`${last_name} ${first_name}`}</a>
        </Link>
      </li>
    );
  });

  const membersDisplay =
    members?.length > 0 ? <ul>{membersList}</ul> : <p>Non renseignés</p>;

  return membersDisplay;
}
