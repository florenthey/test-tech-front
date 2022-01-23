import React, { useEffect, useState } from "react";
import Meta from "@root/components/core/Meta";
import Projects from "@root/components/projects/Projects";
import { getMembers } from "@root/services/members";
import { getProjects } from "@root/services/projects";
import { Inner, Section, Select } from "@root/styles/Global";
import { useForm } from "react-hook-form";

const meta = {
  name: "Microbiome studio - projets",
  description: "Liste des projets des différents membres",
};

export default function index({ projects, members }) {
  const [filteredProjects, setFilteredProjects] = useState();

  const { register, watch } = useForm();
  const filterValue = watch("filters");

  const filters = members.map((member) => {
    const { last_name, first_name, id } = member;
    return (
      <option value={id}>
        {last_name} {first_name}
      </option>
    );
  });

  filters.unshift(<option value={0}>Tout les membres</option>);

  useEffect(() => {
    if (filterValue !== "0" && filterValue !== 0) {
      const filterProjects = projects?.filter((project) => {
        return project.id === parseInt(filterValue, 10);
      });
      setFilteredProjects(filterProjects);
    } else {
      setFilteredProjects(projects);
    }
  }, [filterValue]);

  return (
    <Inner>
      <Meta meta={meta} />
      <h1>Projets</h1>
      <form>
        <Select defaultValue={0} name="filters" {...register("filters")}>
          <option value="">filtrer par membre:</option>
          {filters}
        </Select>
      </form>
      <Section>
        <Projects projects={filteredProjects} />
      </Section>
    </Inner>
  );
}

export async function getStaticProps() {
  const projects = await getProjects(0, 100).then((response) => response);
  const members = await getMembers(0, 100);

  return {
    props: {
      projects,
      members,
    },
  };
}
