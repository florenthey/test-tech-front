import Head from "next/head";

export default function Meta({ meta }) {
  const { name, description } = meta;

  return (
    <Head key={name}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{name}</title>
    </Head>
  );
}
