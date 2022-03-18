import React from 'react'
import getAllBlogPosts from './getAllBlogPosts'


const getBlogPostIdByUrl = (posts) => {
  const baseUrl = `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/posts/`
  return await fetch(baseUrl)

}

export default getBlogPostIdByUrl