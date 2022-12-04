import { useRef, useState, Fragment } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [formIsFocused, setFormIsFocused] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  // todo 1: determine user start work with this form
  const handleFormFocused = () => {
    setFormIsFocused(true);
  };
  const handleFinishEnter = () => {
    setFormIsFocused(false);
  };

  return (
    <Fragment>
      <Prompt
        when={formIsFocused}
        message={(location) => "Are you sure you want to leave?"}
      />
      <Card>
        <form
          onFocus={handleFormFocused}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={handleFinishEnter}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
