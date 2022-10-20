//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, getUserById } from "./services/users";
import { getCommentById, getCommentsByPostId, updateCommentBody, deleteCommentById, addComment } from "./services/comments";
import { getPosts, getPostById, getPostsByUser, deletePostBy, deletePostsByUserId, updatePost } from './services/posts'

//USERS
updateUser(1, { email: "roger@77.com" });
console.log(getAllUsers());
console.log(getUserById(2))


//COMMENTS
console.log(getCommentById(2));
console.log(getCommentsByPostId(2));
updateCommentBody(1, { body: "sample body"})
console.log(getCommentById(1))
console.log(deleteCommentById(1));
addComment({name: "Name", title: "Sample Title", body: "Sample body"})


//POSTS
console.log(getPosts());
console.log(getPostById(2));
console.log(getPostsByUser(3))
console.log(deletePostBy(2));
console.log(deletePostsByUserId(1));
updatePost(1, {title: "sample title"});
console.log(getPosts());

