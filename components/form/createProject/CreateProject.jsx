import { createProjectForMember } from "@root/services/members";
import React from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "./createProject.style";

export default function AddProject({ member, refreshData }) {
  const { register, handleSubmit } = useForm();
  const { id } = member;

  const onSubmit = async (data) => {
    const { code, description } = data;
    const body = {
      code: code,
      description: description,
    };
    await createProjectForMember(id, body);
    await refreshData();
  };

  return (
    <div>
      <h2>Ajouter un projet</h2>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <input
            type="text"
            name="code"
            placeholder="code"
            {...register("code")}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            {...register("description")}
            required
          ></input>
          <button type="submit">Envoyer</button>
        </Wrapper>
      </form>
    </div>
  );
}
