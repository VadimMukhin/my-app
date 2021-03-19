import React from "react";
import s from "./MyPost.module.css";


const MyPost = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.content}>
            <div className={s.myPost}>
                <span>My post</span>
            </div>
            <div className={s.text}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div className={s.button}>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}

export default MyPost;