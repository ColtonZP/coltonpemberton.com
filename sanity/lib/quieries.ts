import { groq } from "next-sanity";

const projectFeilds = groq`
  _id,
  title,
  description,
  liveURL,
  codeURL,
  tags,
  mainImage
`;

export type MainImage = {
  _type: string;
  asset: {
    _type: string;
    _ref: string;
  };
};

export type Project = {
  title: string;
  description: string;
  liveURL: string;
  codeURL: string;
  tags: string[];
  mainImage: MainImage;
};

export const projectsQuery = groq`
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFeilds}
}`;
