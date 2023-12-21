import React from 'react';

// Assumez que vous avez importé le fichier JSON
import ticketData from '../../../data/ticketdata.json';

export default function TicketsTable() {
  const tickets = ticketData.tickets || [];

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">Liste des Tickets</h2>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border"> # </th>
            <th className="py-2 px-4 border"> Subject </th>
            <th className="py-2 px-4 border"> Status </th>
            <th className="py-2 px-4 border"> Open Date </th>
          </tr>
        </thead>
        <tbody>
          {tickets.length > 0 ? (
            tickets.map(ticket => (
              <tr key={ticket.id} className="border">
                <td className="py-2 px-4 border"> {ticket.id} </td>
                <td className="py-2 px-4 border"> {ticket.subject} </td>
                <td className="py-2 px-4 border"> {ticket.status} </td>
                <td className="py-2 px-4 border"> {ticket.openDate} </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-4 border text-center">
                Aucun ticket disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
