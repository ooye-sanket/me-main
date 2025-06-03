import React from 'react';

const BlueStripDemo = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Your existing bio section would be here */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        
      </div>

      {/* The problematic section - FIXED */}
      <div className="full-white-section">
        <div className="clean-blue-strip">
          <div className="stats-row">
            <div className="stat-box">
              <h2>50+</h2>
              <p>Brands helped</p>
            </div>
            <div className="stat-box">
              <h2>$55M+</h2>
              <p>Revenue generated</p>
            </div>
            <div className="stat-box">
              <h2>$20M+</h2>
              <p>Budget Managed</p>
            </div>
          </div>
        </div>
        
        <div className="workbrands">
          <h2>Some brands I have worked with</h2>
        </div>
      </div>

      <style jsx>{
        
      }</style>
    </div>
  );
};

export default BlueStripDemo;