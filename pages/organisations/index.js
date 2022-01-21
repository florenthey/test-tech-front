import React from "react";
import { getOrganizations } from "@services/organizations";
import Organizations from "@components/organizations/Organizations";
import Meta from "@root/components/core/Meta";

const meta = {
  name: "Microbiome studio - organisations",
  description: "Liste des organisations et entreprises clientes",
};

export default function index({ organizations }) {
  return (
    <div>
      <Meta meta={meta} />
      <Organizations organizations={organizations} />
    </div>
  );
}

export async function getStaticProps() {
  const organizations = await getOrganizations(0, 100).then(
    (response) => response
  );

  return {
    props: {
      organizations,
    },
  };
}
