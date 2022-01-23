import React, { useEffect, useState } from "react";
import Members from "@components/members/Members";
import Meta from "@root/components/core/Meta";
import { getMembers } from "@services/members";
import { getOrganizations } from "@root/services/organizations";
import { Inner } from "@styles/Global";

import { useForm } from "react-hook-form";

const meta = {
  name: "Microbiome studio - membres",
  description: "Liste des membres des différentes organisations et entreprises",
};

export default function index({ members, organizations }) {
  const [filteredMembers, setFilteredMembers] = useState();

  const { register, watch } = useForm();
  const filterValue = watch("filters");

  const filters = organizations.map((organisation) => {
    const { name, id } = organisation;
    return <option value={id}>{name}</option>;
  });

  filters.unshift(<option value={0}>Tout les membres</option>);

  useEffect(() => {
    if (filterValue !== "0" && filterValue !== 0) {
      const filterMembers = members?.filter((member) => {
        return member.organization.id === parseInt(filterValue, 10);
      });
      setFilteredMembers(filterMembers);
    } else {
      setFilteredMembers(members);
    }
  }, [filterValue]);

  return (
    <Inner>
      <Meta meta={meta} />
      <h1>Membres</h1>
      <form>
        <select defaultValue={0} name="filters" {...register("filters")}>
          <option value="">filtrer par organisation:</option>
          {filters}
        </select>
      </form>
      <Members members={filteredMembers} />
    </Inner>
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
