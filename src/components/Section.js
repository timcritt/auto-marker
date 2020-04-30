import React from 'react';
import Question from './Question';
import {Col, Row} from 'react-bootstrap'

class Section extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="section-title">{this.props.section.sectionTitle}</div>
          {Object.keys(this.props.section.questions)
            .map(key => 
              <Question 
                key={key}
                index={key}
                question={this.props.section.questions[key]}
                >
              </Question>   
            )
          }
      </React.Fragment>
    )
  }
}

export default Section;