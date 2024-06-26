import { GraphQLClient, gql } from 'graphql-request';
import { NextResponse } from 'next/server';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder app/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

export async function POST(req, res) {
  const body = await req.json();
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: body.name,
    email: body.email,
    comment: body.comment,
    slug: body.slug,
  });

  return NextResponse.json(result);
}