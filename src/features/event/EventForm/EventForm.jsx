import React, { Component } from 'react'
import {Segment, Form, Button} from 'semantic-ui-react';

class EventForm extends Component {

  state = {
    event: {
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: ''
    }
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.createEvent(this.state.event);
  }

  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({event: newEvent});
  }

  render() {
    const {hadnleCancel} = this.props;
    const {event} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name="title" value={event.title} onChange={this.onInputChange} placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name="date" value={event.date} onChange={this.onInputChange} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city" value={event.city} onChange={this.onInputChange} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name="venue" value={event.venue} onChange={this.onInputChange} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name="hostedBy" value={event.hostedBy} onChange={this.onInputChange} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={hadnleCancel} type="button">Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default EventForm;