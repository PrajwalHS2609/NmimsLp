import React from 'react'
import "./HomeFee.css"
const HomeFee = () => {
  return (
 <section className="fee-section">

      <div className="fee-container">

        <h2 className="fee-title">
          NMIMS Online MBA Fee Structure
        </h2>

        <div className="fee-table">

          <div className="fee-header">
            Online MBA Fee Breakdown
          </div>

          <div className="fee-row">
            <div>Full Program Fee</div>
            <div>₹ 1,96,000</div>
          </div>

          <div className="fee-row">
            <div>Annual Fee</div>
            <div>₹ 1,05,000</div>
          </div>

          <div className="fee-row">
            <div>Per-Semester Fee</div>
            <div>₹ 55,000</div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default HomeFee
