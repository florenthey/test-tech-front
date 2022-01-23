import React from "react";
import { getOrganizations } from "@services/organizations";
import Organizations from "@components/organizations/Organizations";
import Meta from "@root/components/core/Meta";
import { Inner } from "@root/styles/Global";

const meta = {
  name: "Microbiome studio - organisations",
  description: "Liste des organisations et entreprises clientes",
};

export default function index({ organizations }) {
  return (
    <Inner>
      <Meta meta={meta} />
      <Organizations organizations={organizations} />
    </Inner>
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
