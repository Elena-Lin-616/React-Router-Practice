import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
  // give back a history object
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    //push -> push a new page on the stack of pages
    //replace -> replace the current page
    // push can go back with back button, replace can't
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
