import gql from "graphql-tag";

export const LEFT = gql`
  {
    images(tags: "개발자에게_필요한것") {
      title
      location
    }
  }
`;

export const RIGHT = gql`
  {
    images(tags: "개발자에게_필요한것") {
      title
      location
    }
  }
`;
