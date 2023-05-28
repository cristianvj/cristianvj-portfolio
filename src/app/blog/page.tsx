'use client';

import { Jumbotron, Main, Posts } from '../../components';

import type { NextPage } from 'next';

const Blog: NextPage = () => {
  return (
    <Main>
      <div className="flex flex-col gap-4 container mx-auto">
        <Jumbotron />
        <Posts />
      </div>
    </Main>
)};

export default Blog;