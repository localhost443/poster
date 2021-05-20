import React from "react";

function CommentsList({ commentsList }) {
  console.log(commentsList);
  const renderComments = Object.values(commentsList).map((comment) => {
    let z = "";
    let classes = "";
    if (comment.status === "pending") {
      z = "WARNING!!! WAITING for moderation";
      classes = "list-disc text-green-600 underline";
    }
    if (comment.status === "Approved") {
      z = comment.comment;
      classes = "list-disc";
    }
    if (comment.status === "Rejected") {
      z = "WARNING!!! This comment has been REJECTED";
      classes = "list-disc text-red-700 line-through";
    }

    return (
      <li className={classes} key={comment.commentId}>
        {z}
      </li>
    );
  });
  return <ul className="pl-4">{renderComments}</ul>;
}

export default CommentsList;
