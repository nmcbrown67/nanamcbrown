import React, { useState } from 'react';
import './Resume.css';

const experienceCategories = [
  {
    label: 'Technical',
    experiences: [
            {
            title: 'Software Developer Intern',
            company: 'U.S. News and World Report',
            time: 'June 2025 - Aug 2025',
            description: [
              `Completed and deployed 2-3 full-stack feature enhancement tickets
              per week for the U.S. News Money vertical using a Java backend and a React/JS frontend, 
              driving CI/CD deployments across test, staging, and production environments
              within a Jira-managed workflow.`,
               `Intern Project: Enabled an internal AI chatbot to 
               generate and return graph visualizations in response 
               to user prompts by integrating Plotly and D3.js, allowing 
               non-technical employees to easily generate and interpret real-time insights from the 
               company’s large data repository.`,
               `Delivered backend enhancements to the CMS, improved API data
                handling using Postman, and performed security upgrades using Snyk.`
                 
            ],
          },
            {
            title: 'Software Team Engineer',
            company: 'LegisLoom (Harvard Machine Learning Community)',
            time: 'Feb 2025 - May 2025',
            description: [
              `Developed the LegisLoom AI tool, which allows users to easily 
              find relevant bills based on keyword searches or ideas, through AI and NLP`,
              `Collaborated with Harvard Kennedy School by delivering structured 
              and analyzed datasets, enabling their forthcoming published paper on AI policy.`
            ],
            taught: `This experience gave me a really insighful introduction into applied ML and
            how to work with and transform data so that non-technical 
            users/people are able to effectively understand and use it.`
          },
            {
            title: 'Graphics Software Engineer',
            company: 'The Harvard Crimson',
            time: 'Feb 2024 - May 2025',
            description: [
              `Developed data visualizations and interactive elements using Typescript, React, 
              and D3.js, enhancing digital storytelling on the Harvard Crimson’s online newspaper; a 
              source that caters to an audience of over 21 million page viewers`,
              'Reviewed code, debuged issues, and maintained the codebase for the full-stack development team'
            ],
            taught: 'Aside from hackathons, this was my first real work opportunity to apply my programming knowledge to real-world deliverables. To apply for this role, I had just under a week and a half to quickly teach myself React, Git, and Typescript to create an assigned interactive website. While at the time daunting, this experience made me realize just how much I enjoy learning through hands-on practice. Since then, the role has provided me with an incredible insight into the process of collaborating with others on deliverables. Additionally, my position on the graphics team gave me the creative freedom to experiment with visual storytelling and user interactivity.'
            },
            {
            title: 'Software Summer Engineer Intern',
            company: 'Comet',
            time: 'Summer 2022',
            description: [
                'Designed and implemented UI/UX prototypes using tools such as Figma',
                `Developed a comprehensive mock-up of the front-end and back-end architecture for a proposed 
                application, applying principles of computer architecture and system design to ensure 
                 scalability and performance`
            ],
            taught: `This experience gave me a comprehensive view of 
            software development and helped me realize that this is the field I 
            want to pursue. Additionally, because the experience focused heavily
             on user behavior and product development, it taught me the valuable
              skill of always keeping the user in mind when designing 
              and implementing features. `

            },
    ]
  },
  
  {
    label: 'Teaching',
    experiences: [
      {
        title: 'STEM Camp Counselor',
        company: 'Camp Invention',
        time: 'June 2022 - July 2022',
        description: [
          `Supervised and engaged a group of 12 children 
           in daily STEM-based activities`,
            `Designed and led interactive workshops in coding, robotics, and
             simple engineering projects`,
            `Mediated conflicts, supported emotional well-being, and encouraged 
            collaboration and problem solving skills among campers`
        ],
        taught: `I got my start in technology thanks to a teacher who went out
         of her way to inspire and share her knowledge with young learners.
          That experience left a lasting impact on me, and I’ve been committed
           to doing the same for others ever since. Over the years, 
           I’ve informally taught coding to young learners, often through referrals
            from parents and teachers who hired me to work with their children. 
            My experience at Camp Invention allowed me to continue this work in a 
            more structured setting, helping me refine my ability to design workshops 
            and develop organized and engaging classroom plans. `
      }
    ]
  }
];

function Resume() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="resume-container">
      <div className="resume-content">
        <h1 className="resume-title">Work Experience</h1>
        <div className="mini-navbar">
          {experienceCategories.map((cat, idx) => (
            <button
              key={cat.label}
              className={selectedCategory === idx ? "mini-tab active" : "mini-tab"}
              onClick={() => setSelectedCategory(idx)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="experience-chart">
          {experienceCategories[selectedCategory].experiences.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              <div className="exp-header">
                <span className="exp-title">{exp.title}</span>
                <span className="exp-company">@ {exp.company}</span>
              </div>
              <div className="exp-time">{exp.time}</div>
              <ul className="exp-desc">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="taught">{exp.taught}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume; 