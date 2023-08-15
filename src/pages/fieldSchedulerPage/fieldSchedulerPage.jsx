import React, { Component } from 'react';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFieldData } from "../../redux/field/field.selectors";
import Scheduler from '../../components/scheduler/scheduler';
import { selectCurrentUser } from "../../redux/user/user.selectors";

import './fieldSchedulerPage.scss';

class FieldScheduler extends Component {
  
  render() {
    const { fieldname, fieldData, title } = this.props;
    let today = new Date();
    let events = fieldData[title].schedule.filter(item => {
      return new Date(item.end_date) >= today
    });

    return (
      <div>
        <button onClick={(event) => { window.location = 'Adminpage' }} >
          <h4>Back to field List</h4>
        </button>
        <div className="tool-bar">
          <h1 className="title">
            {fieldname}
          </h1>
        </div>
        <div className='scheduler-container'>
          <Scheduler
            events={events}
            title={title}
            fieldId={fieldData[title].id}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  fieldData: selectFieldData
})

export default connect(mapStateToProps)(FieldScheduler);