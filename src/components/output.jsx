import React from 'react'

function Output ({input}) {

  return (
      <div className="col-6">
        <div className="text-justify" id="copied">
          <p>Dear {input.hiringManager === '' ? 'Hiring Manager' : input.hiringManager},</p>
          <p>I’m submitting my application for the {input.appliedPosition} position at {input.companyName}. I am a recent graduate of Hacktiv8 Fullstack Javascript Bootcamp, having completed courses in frontend, backend and databases with score 101.41 of 105. I have a strong aptitude for problem solving and fullstack developing a web{input.forBackend ? " with specialty in the frontend." : "."}</p>
          <p>During my last 4 months at Hacktiv8 Indonesia, I was tasked to build many portfolios using different tech stacks. On the frontend I learn React.JS and Vue.js state management, life cycles, and learn about client & server side rendering methods. On the backend, I learn Express.js and implement RESTful API, microservices, and MVC programming patterns. About  databases, I am learning PostgreSQL and MongoDB. I am a fast learner and have confidence in my ability to learn a new tech stack and communicate with others.</p>
          <p>Thank you for your time and thoughtfulness. I look forward to learning more information at {input.companyName} about the role of {input.appliedPosition}. I am excited about the opportunity to exploit my unique set of expertise, and I am ready to prove my dedication to {input.companyName}{input.appliedCity === '' ? '.' : `, and if needed, I can move to ${input.appliedCity} to work onsite.`}</p>
          <p>Regards,</p>
          <br/>
          <p>Jalu Wibowo Aji</p>
        </div>
      </div>
  )
}

export default Output