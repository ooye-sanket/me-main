

import graphImg from "../media/result-anylt.png";
import tableImg from "../media/result-anylt2.png";

const ClientResults = () => {
  return (
    <div className="client-results-container">
      <div className="gradient-bg"></div>
      <div className="client-results-wrapper">
        {/* Header */}
        <div className="client-results-header">
          <p className="client-results-label">
            CLIENT RESULTS
          </p>
          <h1 className="client-results-title">
            In just 2 months, I <br />
            helped a fintech brand
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="analytics-images">
          <img src={graphImg} alt="Analytics Graph" className="analytic-img" />
          <img src={tableImg} alt="Analytics Table" className="analytic1-img" />
        </div>
        
      </div>
    </div>
  );
};

export default ClientResults;