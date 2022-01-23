import { login } from "@root/services/authentification";
import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const body = { username: email, password };
    await login(body);
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          placeholder="email"
          {...register("email")}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          {...register("password")}
          required
        ></input>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
