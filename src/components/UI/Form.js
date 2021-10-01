import React from "react";
const Form = ({ title, setTitle, body, setBody, btnText, handleSubmit }) => {
  return (
    <div>
      <div className="form-group">
        <label style={{ fontSize: "22px", fontWeight: "bold" }}>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control form-control-lg"
          type="text"
        />
      </div>
      <div className="form-group mt-3">
        <label style={{ fontSize: "22px", fontWeight: "bold" }}>Body</label>
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="form-control form-control-lg"
          type="text"
        />
      </div>
      <div className="form-group mt-3" style={{ textAlign: "right" }}>
        <button
          disabled={title.length > 0 && body.length > 0 ? false : true}
          className="btn btn-success"
          onClick={handleSubmit}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Form;
