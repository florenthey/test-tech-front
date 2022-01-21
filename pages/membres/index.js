import React, { useEffect, useState } from "react";
import Members from "@components/members/Members";
import Meta from "@root/components/core/Meta";
import { getMembers } from "@services/members";
import { getOrganizations } from "@root/services/organizations";

const meta = {
  name: "Microbiome studio - membres",
  description: "Liste des membres des différentes organisations et entreprises",
};

export default function index({ members, organizations }) {
  const [organizationId, setOrganizationId] = useState(null);
  const [filteredMembers, setFilteredMembers] = useState();

  const filters = organizations.map((organisation) => {
    const { name, id } = organisation;

    return <button onClick={() => setOrganizationId(id)}>{name}</button>;
  });

  filters.unshift(
    <button onClick={() => setOrganizationId(null)}>Tout les membres</button>
  );

  useEffect(() => {
    if (organizationId !== null) {
      const filterMembers = members?.filter((member) => {
        return member.organization.id === organizationId;
      });
      setFilteredMembers(filterMembers);
    } else {
      setFilteredMembers(members);
    }
  }, [organizationId]);

  return (
    <div>
      <Meta meta={meta} />
      <h1>Members</h1>
      {filters}
      <Members members={filteredMembers} />
    </div>
  );
}

export const getStaticProps = async () => {
  const members = await getMembers(0, 100);
  const organizations = await getOrganizations(0, 100).then(
    (response) => response
  );

  return {
    props: { members, organizations },
  };
};
