import React from 'react';
import PageBreadcrumb from '../../component/PageBreadcrumb';
import ticketData from "../../../data/ticketdata.json";
import { useParams } from 'react-router-dom';

export default function Ticket() {
  // Use useParams to get the "id" parameter from the URL
  const { id } = useParams();
  
  // Find the ticket with the matching id from the data
  const selectedTicket = ticketData.tickets.find(ticket => ticket.id === parseInt(id));

  // Check if a ticket with the given id was found
  if (!selectedTicket) {
    return (
      <div>
        <PageBreadcrumb page="ticket"/>
        <div>
          <p>Invalid Ticket ID</p>
        </div>
      </div>
    );
  }

  // Destructure the ticket details
  const { openDate, subject, status } = selectedTicket;

  return (
    <div>
      <PageBreadcrumb page="ticket"/>
      <div>
        <p>{id}</p>
        <p>{openDate}</p>
        <p>{subject}</p>
        <p>{status}</p>
      </div>
    </div>
  );
}
