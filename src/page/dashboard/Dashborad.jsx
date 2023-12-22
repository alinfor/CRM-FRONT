import React, { useState } from "react";
import TicketsTable from "../ticket-table/TicketTable";
import SearchForm from "../searchform/SearchForm";
import ticketData from "../../../data/ticketdata.json";

export default function Dashboard() {
  const [filteredTickets, setFilteredTickets] = useState(ticketData.tickets || []);

  const filterTickets = (searchTerm) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    const filtered = ticketData.tickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(lowerCaseSearch)
    );
    setFilteredTickets(filtered);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-between p-4">
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
            Add new ticket
          </button>
        </div>
        <SearchForm onSearch={filterTickets} />
      </div>

      <TicketsTable tickets={filteredTickets} />
    </div>
  );
}
