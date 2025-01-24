import React from 'react'

export default async function GetAllPost () {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50")

  return result.json();
}
