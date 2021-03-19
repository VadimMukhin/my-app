import React from "react";
import s from "./Profile.module.css";

import About from "./About/About";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return (
        <div>
            <About/>
            <Posts posts={props.state.posts}
                   addPost={props.addPost}
                   newPostText={props.state.newPostText}
                   updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;