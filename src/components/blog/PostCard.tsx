import React, { FC } from 'react'

const PostCard: FC<any> = ({post, key}) => {
  console.log(post)
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
    </>
  )
}

export default PostCard