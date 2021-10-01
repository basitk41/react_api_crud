import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "../UI/Form";
import { useHistory } from "react-router-dom";
import { mapDispatchToProps, mapStateToProps } from "../../store/helper/Posts";
const NewPost = ({ addPost, userId }) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = () => {
    addPost({ title, body, userId }, history);
  };
  return (
    <div>
      <Form
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleSubmit={handleSubmit}
        btnText="Add"
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
