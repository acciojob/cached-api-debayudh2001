
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';
import Posts from "./Posts";

const App = () => {
  //const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  function fetchPosts() {
    //console.log("Function called")
    let arr = []
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => arr.push(...data))
      .then(() => setLoading(false))
      .catch(err => console.log(err))
    console.log(arr)
    return arr
  }

  let posts = useMemo(() => {
    return fetchPosts()
  }, [])

  // useEffect(() => {
  //   fetchUsers()
  // }, [])
  
  return (
    <div>
      <Posts posts={posts} loading={loading} />
    </div>
  )
}

export default App
