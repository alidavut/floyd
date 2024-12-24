import { GraphQLClient } from 'graphql-request';

export const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

export interface PostObject {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: {
    url: string;
  };
  content: string;
  date: string;
}
