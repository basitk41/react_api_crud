import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "../UI/Card";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/helper/Posts";
import Spinner from "../UI/Spinner";
const Post = ({ setPost, post, loading }) => {
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    setPost(id);
  }, [id, setPost]);
  return (
    <div>
      <p style={{ textAlign: "right" }}>
        <button className="btn btn-info" onClick={() => history.goBack()}>
          Back
        </button>
      </p>
      {loading ? <Spinner /> : <Card post={post} />}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
