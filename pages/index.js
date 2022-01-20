import styled from "styled-components";
import Organizations from "../componants/organizations/Organizations";
import { getOrganizations } from "../services/organizations";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home({ organizations }) {
  return (
    <div>
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
