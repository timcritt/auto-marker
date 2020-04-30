import React from 'react';
import EditSection from './EditSection'
import { Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import LoadingBar from './LoadingBar'

class CreateQuiz extends React.Component {

  state = {
    editedTitle: this.props.title ? this.props.title : ''
  }
  updateTitle = (e) => {
    const title = e.currentTarget.value;
    this.props.saveTitle(title)
  }
  
  render() {   
    if(this.props.loading) {
      return (
      <div className="loading-bar">
          <LoadingBar ></LoadingBar>
      </div>
      )
    }
    return (
      <React.Fragment>
        <Col id="title-field-row" >
          <InputGroup >
            <FormControl  
              className="edit-title-field"
              placeholder="enter a title"
              defaultValue={this.props.title}
              onChange={this.updateTitle}
            />
          </InputGroup>
        </Col>
        <Col className="fixed-container">
          {Object.keys(this.props.sections).map( key=> {
                        
            return ( 
              <EditSection 
                section={this.props.sections[key]}
                key={this.props.sections[key].id}
                id={this.props.sections[key].id}
                index={key}
              />
            )
          })}
        </Col>
        <Col className="add-question-button-container">
          <Button className="add-question-button" onClick={this.props.addSection}>+section</Button>
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
    saveTitle: (title) => {dispatch({type: 'SAVE_TITLE', title: title})},
    loadQuiz: () => dispatch({type: "LOAD_QUIZ"}),
    addSection: () => dispatch({type: "ADD_SECTION"})
  }
}

export default connect(mapStateToProps, mapActionsToProps)(CreateQuiz);

