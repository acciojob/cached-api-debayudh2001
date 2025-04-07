import React from "react";

const Posts = ({posts, loading}) => {
    return (
        <div>
            <h2>Users' Posts</h2>
            { loading ? 
                <p style={{fontWeight: "bolder"}}>Loading....</p>
                :
                <ul>
                    {posts && posts.map(post => {
                        return (
                            <li key={post.id} style={{marginBottom: "20px"}}>
                               <h4>{post.title}</h4>
                               <p>{post.body}</p>
                            </li>
                        )
                    })}
                </ul>
            } 
        </div>
    )
}

export default Posts

