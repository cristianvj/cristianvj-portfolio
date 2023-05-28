'use client';

import { useEffect, useState } from 'react';
import { PostCard, Jumbotron, Main } from '../../components';

import type { NextPage } from 'next';

import { getPosts } from '../../services';
import { Post } from '../../interfaces';

const Blog: NextPage = () => {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
      getPosts()
        .then((result) => setPosts(result));
  }, []);

  return (
    <Main>
      <div className="flex flex-col gap-4 container mx-auto text-white">
        <Jumbotron />
        <div className='
          flex
          flex-wrap
          justify-between
          gap-5
        '>
          { posts.map((post, id) => <PostCard post={post.node} key={id} />) }
        </div>
      </div>
    </Main>
)};

export default Blog;