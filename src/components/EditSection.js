import React from 'react';
import { connect } from 'react-redux';
import EditQuizItem from './EditQuizItem';
import { InputGroup, FormControl, Col, Row, Button} from 'react-bootstrap';

class EditSection extends React.Component {
  
  state = {
    restartNumbering: false
  }
  handleCheckBoxTick = (e) => {
    let restartNumbering;
    e.currentTarget.checked ? restartNumbering = true : restartNumbering = false;
    this.setState( {restartNumbering})
  }
    
  render() { 
    return(
      <React.Fragment>
        <Col className='section-container'>
          <div className="section-title-container flex-container flex-space-between">
            <InputGroup >
              <FormControl 
                className="section-title" 
                placeholder="enter section title" 
                defaultValue={this.props.section.sectionTitle} 
              />
            </InputGroup>
            <div>
              <label>
                <input type="checkbox" id="restartNumbering" name="restartNumbering" 
                  onClick={this.handleCheckBoxTick}
                />restart numbering
              </label>
            </div>
          </div>
            {Object.keys(this.props.section.questions)
              .map(key =>  
                <EditQuizItem 
                  key={this.props.section.questions[key].id}
                  index={key}
                  sectionId={this.props.section.id}
                  question={this.props.section.questions[key]}
                  restartNumbering={this.state.restartNumbering}
                  sectionIndex={this.props.index}
                  >
                </EditQuizItem>  
              ) 
            }
          <div className="flex-container">
            <Button className="add-question-button" onClick={ () => this.props.addNewQuestion("multi", this.props.id)}>+multiple choice</Button>
            <Button className="add-question-button" onClick={ () => this.props.addNewQuestion("", this.props.id)}>+free text</Button>
            <Button className="add-question-button flex-align-self-end" onClick={ () => this.props.removeSection(this.props.id)}>remove section</Button> 
          </div>
        </Col>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  sections: state.sections,
  title: state.title
})

const mapActionsToProps = (dispatch) => {
  return {
    addNewQuestion: (questionType, sectionId) => { dispatch({ type: 'ADD_NEW_QUESTION', questionType, sectionId})},
    addSection: (sectionId) => dispatch({type: "ADD_SECTION", sectionId}),
    removeSection: (sectionId) => {dispatch({type: "REMOVE_SECTION", sectionId})}
  }
}

export default connect(mapStateToProps, mapActionsToProps)(EditSection);

