import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import {connect} from 'react-redux';
import {createEvent, deleteEvent, updateEvent} from '../eventActions';

class EventDashboard extends Component {

  handleDeleteEvent = (eventId) =>() => {
    this.props.deleteEvent(eventId)
  } 

  render() {
    const {events} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const actions = {
  createEvent, 
  deleteEvent,
  updateEvent
}

export default connect(mapStateToProps, actions)(EventDashboard);