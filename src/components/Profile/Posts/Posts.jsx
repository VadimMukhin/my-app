import React from "react";
import s from "./Posts.module.css";
import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";


const Posts = (props) => {

    let postElement = props.posts.map(m => <Post id={m.id} message={m.message} likesCount={m.likesCount}/>)

    return (
        <div className={s.container}>
            <MyPost addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText}/>
            {postElement}
        </div>
    );
}

export default Posts;