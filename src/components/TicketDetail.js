import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props) {
  const {ticket} = props;
  return (
    <>
    <h1>Ticket Detail</h1>
    <h3>{ticket.location} - {ticket.names}</h3>
    <p><em>{ticket.issue}</em></p>
    <p><em>{ticket.formattedWaitTime}</em></p>
    <button onClick={ props.onClickingEdit } className='btn btn-dark'>Update Ticket</button> 
    <button onClick={()=> props.onClickingDelete(ticket.id) } className='btn btn-dark'>Close Ticket</button>
    <hr />
    </>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TicketDetail;