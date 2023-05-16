import { FC } from 'react';

import { Categories, PostWidget, PostDetail } from '../../components';

import { GetStaticPaths, GetStaticProps } from 'next';
import { PropsPostContent } from '../../interfaces';

import { getPosts, getPostDetails } from '../../services';

const PostDetails: FC<PropsPostContent> = ({ post }) => (
  <div className="container mx-auto px-10 mb-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="col-span-1 lg:col-span-8">
        <PostDetail post={post} />
        <h1>{post.title}</h1>
        <p>{post.slug}</p>
      </div>
      <div className="col-span-1 lg:col-span-4">
        <div className="relative lg:sticky top-8">
          <PostWidget 
            slug={post.slug} 
            categories={post.categories.map(category => category.slug)} 
          />
          <Categories/>
        </div>
      </div>
    </div>
  </div>
);

export default PostDetails;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = params?.slug && await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
};

export const getStaticPaths: GetStaticPaths = async() => {
  const posts: {node: {slug: string}}[] = await getPosts();
  
  return {
    paths: posts.map(({node: {slug}}) => ({params: {slug}})),
    fallback: false,
  };
};