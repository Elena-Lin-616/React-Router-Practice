import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory(); // give access to change or manage url
  const location = useLocation();
  // useLocation -> give access to location object, which has information about the currently loaded page, include currently loaded URL

  // todo 2 : get the query params
  // transform ?sort=asc -> object  -> default js constructor function build in browser
  const queryParams = new URLSearchParams(location.search);
  const isSortAscending = queryParams.get("sort") === "asc"; // value = null / asc / desc

  const handleChangeSorting = () => {
    // todo 1: update the url to ascending-sort  -> programmatically navigation -> useHistory
    // history.push() -> re-render this component which match /quotes route
    // push a page -> React router see the history has changed -> re-render the component that match the route
    history.push("/quotes?sort=" + (isSortAscending ? "desc" : "asc"));
  };

  const sortedQuotes = sortQuotes(props.quotes, isSortAscending);
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={handleChangeSorting}>
          Sort {isSortAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
