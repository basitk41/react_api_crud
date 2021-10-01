import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Form from "../UI/Form";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/helper/Posts";
import Spinner from "../UI/Spinner";
const UpdatePost = ({ setPost, post, loading, updatePost, userId }) => {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    setPost(id);
    setTitle(post.title);
    setBody(post.body);
  }, [id, setPost, post.title, post.body]);
  const handleSubmit = () => {
    updatePost({ id, title, body, userId }, history);
  };
  return (
    <div>
      <p style={{ textAlign: "right" }}>
        <button className="btn btn-info" onClick={() => history.goBack()}>
          Back
        </button>
      </p>
      {loading ? (
        <Spinner />
      ) : (
        <Form
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          handleSubmit={handleSubmit}
          btnText="Update"
        />
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
