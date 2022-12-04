import { useParams } from "react-router-dom";

function QuoteDetail() {
  const { quoteId } = useParams();

  return (
    <div>
      <h1>quote detail</h1>
      <p>{quoteId}</p>
    </div>
  );
}

export default QuoteDetail;
