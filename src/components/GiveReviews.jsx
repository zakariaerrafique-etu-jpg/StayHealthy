import React, { useState } from "react";

function GiveReviews() {
  const [review, setReview] = useState("");
  const [disabled, setDisabled] = useState(false);

  const submit = () => {
    setDisabled(true);
  };

  return (
    <div>
      <input onChange={(e) => setReview(e.target.value)} />
      <button disabled={disabled} onClick={submit}>
        Submit Review
      </button>
    </div>
  );
}

export default GiveReviews;

