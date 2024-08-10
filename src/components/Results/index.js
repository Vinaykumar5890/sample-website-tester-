import './index.css'
function Results({data}) {
  if (!data) return null

  return (
    <div className="result">
      <div>
        <h3>Performance Analysis Results : </h3>
        <p>
          <strong>Page Load Time:</strong> {data.loadTime} ms
        </p>
        <p>
          <strong>Total Request Size:</strong> {data.totalRequestSize} KB
        </p>
        <p>
          <strong>Number of Requests:</strong> {data.numRequests}
        </p>
      </div>
      <img
        src="https://www.gstatic.com/pagespeed/insights/ui/img/graphic-home-hero.svg"
        alt="resultImg"
      />
    </div>
  )
}

export default Results
