import React from 'react'
import "./HomeLearning.css"
import one from "@/Images/1.png"
import two from "@/Images/2.png"
import Image from 'next/image'

const HomeLearning = () => {
  return (
<section className="learning-container">
  <h2 className="learning-title">Learning Experience at NMIMS Online</h2>

  <div className="learning-grid">

    <div className="learningCard-large">
      <div className="card-content">
        <h3>Study at your own convenience</h3>
        <p>
          You can access the Student Zone on the portal and mobile app and learn at your convenience.
        </p>
      </div>
      <Image src={one} alt="study" />
    </div>

    <div className="learningCard">
      <h3>Learn using advanced online resources</h3>
      <p>
        Avail study material like e-books, journals, and lecture transcripts, at any time.
      </p>
    </div>

    <div className="learningCard">
      <h3>Dedicated student success team</h3>
      <p>
        You can submit your queries via Ticketing Tool under Student Support and schedule a call back option.
      </p>
    </div>

    <div className="learningCard-large">
      <div className="learningCard-content">
        <h3>Integrated industry and best academic practices</h3>
        <p>
          Learn with industry-focused curriculum taught by doctorates, researchers and industry practitioners.
        </p>
      </div>
      <Image src={two} alt="industry" />
    </div>

  </div>
</section>

  )
}

export default HomeLearning
