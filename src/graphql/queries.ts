/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      description
      archived
      thumbnail {
        bucket
        region
        key
      }
      liveURL
      sourceURL
      tags
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        archived
        thumbnail {
          bucket
          region
          key
        }
        liveURL
        sourceURL
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
