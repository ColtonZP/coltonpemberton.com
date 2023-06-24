import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

import { type Project, projectsQuery } from "./quieries";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getAllProjects(): Promise<Project[]> {
  if (client) {
    return (await client.fetch(projectsQuery)) || [];
  }
  return [];
}

export const urlForImage = (source: any) =>
  createImageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  })
    .image(source)
    .auto("format")
    .fit("max");
