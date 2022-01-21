import React from "react";
import Members from "@components/members/Members";
import Meta from "@root/components/core/Meta";
import { getMembers } from "@services/members";

const meta = {
  name: "Microbiome studio - membres",
  description: "Liste des membres des différentes organisations et entreprises",
};

export default function index({ members }) {
  return (
    <div>
      <Meta meta={meta} />
      <h1>Members</h1>
      <Members members={members} />
    </div>
  );
}

export const getStaticProps = async () => {
  const members = await getMembers(0, 100);

  return {
    props: { members },
  };
};
