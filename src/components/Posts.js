import React from "react";

const Posts = ({posts, loading}) => {
    return (
        <div>
            <h2>Users' Posts</h2>
            { loading ? 
                <p style={{fontWeight: "bolder"}}>Loading....</p>
                :
                <ul>
                    {posts && posts.map((post, ind) => {
                        return (
                            <li key={ind} style={{marginBottom: "20px"}}>
                               <span style={{fontWeight: "bolder"}}>{post.title}</span>
                               <br />
                               <br />
                               <span>{post.body}</span>
                            </li>
                        )
                    })}
                </ul>
                
            } 
        </div>
    )
}

export default Posts

