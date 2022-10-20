import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getCommentById(id) {
  //get comment by id
    return comments.find((comment) => comment.id === id);
  }
  
 export function getCommentsByPostId(postId) { 
    //get comments by comment id

    // return comments.filter(comment => {
    //   return comment.postId === postId;
    // })

    //Other Solution
    return comments.filter(comment => comment.postId === postId)

  }

export function updateCommentBody(id, body) {
  //update comment body

  // comments = comments.map((comment) => {
  //   if (comment.id === id) {
  //     return {
  //       ...comment,
  //       ...body,
  //     };
  //   }
  //   return comment;
  // });

  //Other Solution1
  // comments.map(comment => {
  //   if (comment.id === id) {
  //     comment.body = body
  //   }
  //   return comment
  // });

  //Other Solution2
  let x = comments.find(c => c.id === id)
  x && (c.body = body)

}


export function deleteCommentById(id) {
  //delete comment by id
  //return comments.delete(id)

//   return comments.filter((comment) => {
//     return comment.id !== id ;
// });

  //Other Solution
  comments = comments.filter(comment => comment.id !== id)

}

export function addComment(comment) {
  //add comment to comments array

  // comments = comments.push(comment);
  // return comments;

  // use generateId function and pass comments array as the argument to generate a unique id.

  //Correct Solution
  comments.push({id:generatedId(comments),...comment})
}
