/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  archived: boolean,
  thumbnail?: PhotoInput | null,
  liveURL: string,
  sourceURL: string,
  tags?: Array< string | null > | null,
};

export type PhotoInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelProjectConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  archived?: ModelBooleanInput | null,
  liveURL?: ModelStringInput | null,
  sourceURL?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  title: string,
  description?: string | null,
  archived: boolean,
  thumbnail?: Photo | null,
  liveURL: string,
  sourceURL: string,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Photo = {
  __typename: "Photo",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  archived?: boolean | null,
  thumbnail?: PhotoInput | null,
  liveURL?: string | null,
  sourceURL?: string | null,
  tags?: Array< string | null > | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  archived?: ModelBooleanInput | null,
  liveURL?: ModelStringInput | null,
  sourceURL?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    archived: boolean,
    thumbnail?:  {
      __typename: "Photo",
      bucket: string,
      region: string,
      key: string,
    } | null,
    liveURL: string,
    sourceURL: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    archived: boolean,
    thumbnail?:  {
      __typename: "Photo",
      bucket: string,
      region: string,
      key: string,
    } | null,
    liveURL: string,
    sourceURL: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    archived: boolean,
    thumbnail?:  {
      __typename: "Photo",
      bucket: string,
      region: string,
      key: string,
    } | null,
    liveURL: string,
    sourceURL: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    archived: boolean,
    thumbnail?:  {
      __typename: "Photo",
      bucket: string,
      region: string,
      key: string,
    } | null,
    liveURL: string,
    sourceURL: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      archived: boolean,
      thumbnail?:  {
        __typename: "Photo",
        bucket: string,
        region: string,
        key: string,
      } | null,
      liveURL: string,
      sourceURL: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    archived: boolean,
    thumbnail?:  {
      __typename: "Photo",
      bucket: string,
      region: string,
      key: string,
    } | null,
    liveURL: string,
    sourceURL: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    archived: boolean,
    thumbnail?:  {
      __typename: "Photo",
      bucket: string,
      region: string,
      key: string,
    } | null,
    liveURL: string,
    sourceURL: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    archived: boolean,
    thumbnail?:  {
      __typename: "Photo",
      bucket: string,
      region: string,
      key: string,
    } | null,
    liveURL: string,
    sourceURL: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
