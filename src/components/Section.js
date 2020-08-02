import React from 'react';
import Question from './Question';

const Section = (props) => {
  
  return (
    <React.Fragment>
        <div className="section-title">{props.section.sectionTitle}</div>
        <div  >
        {Object.keys(props.section.questions)
          .map(key => 
            <Question 
              key={key}
              index={key}
              question={props.section.questions[key]}
              >
            </Question>
          )
        }
      </div>
    </React.Fragment>
  )
  
}

export default Section;