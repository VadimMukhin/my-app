let store = {

    getState() {
        return this._state
    },

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi!", likesCount: 0},
                {id: 2, message: "How are u?", likesCount: 0},
                {id: 3, message: "Amazing!!", likesCount: 0},
                {id: 4, message: "Happy codding!", likesCount: 0},
                {id: 5, message: "Simple is better than complex!", likesCount: 0},
            ],
            newPostText: '',
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Misha"},
                {id: 4, name: "Lexa"},
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are u?"},
                {id: 3, message: "Amazing!!"},
                {id: 4, message: "Happy codding!"},
                {id: 5, message: "Simple is better than complex!"},
            ],
            newMessageText: ''
        },
    },

    _callSubscriber() {
        console.log("state changed")
    },

    addMessage() {
        let newMessage = {
            id: 8,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 4,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)

    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)

    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
}

window.store = store
export default store