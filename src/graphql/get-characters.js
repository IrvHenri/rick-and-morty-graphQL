import gql from "graphql-tag";

export const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
      results {
        id
        name
        origin {
          name
        }
        image
        species
      }
    }
  }
`;
