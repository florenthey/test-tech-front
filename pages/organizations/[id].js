import { getOrganization, getOrganizations } from "@services/organizations";
import Link from "next/link";
import React from "react";

export default function index({ organization }) {
  const { name, description, members } = organization;

  const membersList = members.map((member) => {
    const { first_name, last_name, id } = member;

    return (
      <li>
        <Link href={`/members/${id}`} passHref>
          <a>{`${last_name} ${first_name}`}</a>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>membres:</p>
      <ul>{membersList}</ul>
    </div>
  );
}

export const getStaticPaths = async () => {
  const organizations = await getOrganizations(0, 100).then(
    (response) => response
  );
  const paths = organizations.map((organization) => {
    return {
      params: { id: organization.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const organization = await getOrganization(id);

  return {
    props: { organization },
  };
};
