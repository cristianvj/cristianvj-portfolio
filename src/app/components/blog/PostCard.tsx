import Link from 'next/link'
import React, { FC } from 'react'

const PostCard: FC<any> = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <p>{post.excerpt}</p>
    <Link href={`/blog/${post.slug}`}>
      <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-orange-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
        Continue Reading
      </span>
    </Link>
  </>
)

export default PostCard