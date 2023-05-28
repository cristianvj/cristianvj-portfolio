'use client';

import { useEffect, useState } from 'react';

import { PostCard } from '../../components';
import { getPosts } from '../../services';
import { Post } from '../../interfaces';

const Posts = () => {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
      getPosts()
        .then((result) => setPosts(result));
  }, []);

  return (
    <div className='
      flex
      flex-wrap
      justify-between
      gap-5
    '>
      { posts.map((post, id) => <PostCard post={post.node} key={id} />) }
    </div>
  )
}

export default Posts