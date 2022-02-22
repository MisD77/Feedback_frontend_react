function FeedbackStats({ feedback}) {
  // Calculate ratings avg
  let average = feedback.reduce((acc, curr) => {
      return acc + curr.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
  <div className="feedback-stats">
      <h4> {feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
      <p>Hello</p>
  </div>
  );
}
export default FeedbackStats;
