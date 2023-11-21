import { gql } from "@apollo/client";

const GET_STORAGE_SPACE_LIST = gql`
  query getSpaces {
    spaces {
      spaceName,
      rate,
      thumbnailImage
    }
  }
`;

export { GET_STORAGE_SPACE_LIST };