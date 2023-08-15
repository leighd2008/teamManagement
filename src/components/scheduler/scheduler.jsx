import React, { Component } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_recurring.js';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_minical.js';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_collision.js';
import "./scheduler.scss";
import { firestore } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectFieldData } from "../../redux/field/field.selectors";


const scheduler = window.scheduler;
class Scheduler extends Component {

  initSchedulerEvents() {
    if (scheduler._$initialized) {
      return;
    }

    const onDataUpdated = this.props.onDataUpdated;

    scheduler.attachEvent("onClick", function (id, e){
		scheduler.showLightbox(id);
		return true;
    });

    let a=1
    scheduler.attachEvent('onEventCollision', (ev, evs) => {
      if (a){
        alert("Sorry, only 1 event per time slot is allowed. Please choose a different Date/Time")
        window.location = 'Adminpage'
      }
    })

    // scheduler.attachEvent("onBeforeEventChanged", function (ev, e, is_new, original) {
    //   a = 1;
    //   return true;
    // });
    
    scheduler.attachEvent('onEventAdded', (id, ev) => {
      a=0
      let eventCreator = this.props.currentUser.email;
      let type = this.props.currentUser.displayName;
      
      let newEvent = { end_date: ev.end_date, start_date: ev.start_date, text: ev.text, id: ev.id, eventCreator, type, rec_type: ev.rec_type, event_length: ev.event_length, event_pid: ev.event_pid }

      let events1 = [
        newEvent,
        ...this.props.events
      ];

      events1.forEach((item) => (
        // eslint-disable-next-line no-sequences
        item.end_date = item.end_date.toJSON(),
        item.start_date = item.start_date.toJSON()
      ))

      const fieldId = this.props.fieldId;
      firestore.collection("fields").doc(fieldId).update({
        schedule: events1,
      })
      
        .then(response => {
          window.location = 'Adminpage'
        })
      if (onDataUpdated) {
        onDataUpdated('create', ev, id);
      }

    });

    scheduler.attachEvent('onEventChanged', (id, ev) => {
      let evChanger = this.props.currentUser.email;
      
      let changedEvent = { end_date: ev.end_date, start_date: ev.start_date, text: ev.text, id: ev.id, eventCreator: ev.eventCreator, type: ev.type, rec_type: ev.rec_type, event_length: ev.event_length, event_pid: ev.event_pid }
      let changeEventId = ev.id;
      let evCreator = ev.eventCreator;
      let { events } = this.props;
      let events1 = [];
      let events2 = [];


      if (evChanger === evCreator | evChanger === 'fire.fastpitch.softball@gmail.com' | evChanger === 'leighd2008@gmail.com') {
        events.filter(event => event.id !== changeEventId).map(filteredEvent => (events1.push(filteredEvent)))
        events2 = [
          changedEvent,
          ...events1
        ];
        
        events2.forEach((item) => (
          // eslint-disable-next-line no-sequences
          item.end_date = item.end_date.toJSON(),
          item.start_date = item.start_date.toJSON()
          ))
          const fieldId = this.props.fieldId;
          firestore.collection("fields").doc(fieldId).update({
            schedule: events2,
          })
            .then(response => {
              window.location = 'Adminpage'
            })
        if (onDataUpdated) {
            onDataUpdated('update', ev, id);
        }
        } else {
          alert(`You do not have permission to change this event. Please contact Diane Leigh to have the event deleted`)
          window.location = 'Adminpage'
        }
    });

    scheduler.attachEvent('onEventDeleted', (id, ev) => {
      let evDeleter = this.props.currentUser.email;
      let delEventId = ev.id;
      let evCreator = ev.eventCreator;
      let { events } = this.props;
      let events1 = [];

      if (evDeleter === evCreator | evDeleter === 'fire.fastpitch.softball@gmail.com' | evDeleter === 'leighd2008@gmail.com') {
        events.filter(event => event.id !== delEventId).map(filteredEvent => (events1.push(filteredEvent)))
      } else {
        events1 = events;
        alert(`You do not have permission to delete this event. Please contact Diane Leigh to have the event deleted`)
      };

      events1.forEach((item) => (
        // eslint-disable-next-line no-sequences
        item.end_date = item.end_date.toJSON(),
        item.start_date = item.start_date.toJSON()
      ))

      const fieldId = this.props.fieldId;
      firestore.collection("fields").doc(fieldId).update({
        schedule: events1,
      })
        .then(response => {
          window.location = 'Adminpage'
        })
      if (onDataUpdated) {
            onDataUpdated('delete', ev, id);
        }
    });

    scheduler._$initialized = true;
  }

  componentDidMount() {
    scheduler.skin = 'material';
    scheduler.config.header = [
      'day',
      'week',
      'month',
      'date',
      'prev',
      'today',
      'next'
    ];

    scheduler.config.hour_date = '%g:%i %A';
    scheduler.config.time_step = 15;
    scheduler.config.first_hour = 9;
    scheduler.config.last_hour = 21;
    scheduler.xy.scale_width = 70;
    scheduler.config.day_date = "%D %m/%d";
    scheduler.config.default_date = "%m/%d/%y";

    scheduler.config.lightbox_recurring = 'series';
    scheduler.config.responsive_lightbox = true;
    scheduler.config.details_on_dblclick = true;
    scheduler.config.details_on_create = true;

    scheduler.config.lightbox.sections=[
      { name: "description", height: 50, type: "textarea", map_to: "text", focus: true },
      {name:"recurring", height:50, type:"recurring", map_to:"rec_type", button:"recurring"},
      {name:"time", height:50, type:"time", map_to:"auto"}
    ];

    scheduler.templates.event_class = function (start, end, event) {
      if (event.type === 'Diane') return 'Diane_event';
      else if (event.type === 'Rich') return 'Rich_event';
      else if (event.type === 'Nikki') return 'Nikki_event';
      else if (event.type === 'Rich Greene') return 'Rich_Greene_event';
      else if (event.type === 'Stan') return 'Stan_event';
      else if (event.type === 'Jim') return 'Jim_event';
      else if (event.type === 'Heather') return 'Heather_event';
      else if (event.type === 'Andy') return 'Andy_event';
      else if (event.type === 'Lance') return 'Lance_event';
      else if (event.type === 'Traci DeMattia-Toth') return 'Traci_event';
      else if (event.type === 'Matt') return 'Matt_event';
      else if (event.type === 'Taylor Rowe') return 'Taylor_event';
    
    }

    this.initSchedulerEvents();

    const { events } = this.props;
    scheduler.init(this.schedulerContainer, new Date());
    scheduler.clearAll();
    scheduler.parse(events);
  }
  
render() {
    return (
      <div
        ref={(input) => { this.schedulerContainer = input }}
        style={{ width: '90%', height: '90%' }}
      ></div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  fieldData: selectFieldData
})

export default connect(mapStateToProps)(Scheduler);
