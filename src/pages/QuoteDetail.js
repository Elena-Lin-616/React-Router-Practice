import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
function QuoteDetail() {
  const { quoteId } = useParams();

  return (
    <div>
      <h1>quote detail</h1>
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetail;
