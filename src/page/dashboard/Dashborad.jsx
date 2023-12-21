import React from "react";
import TicketsTable from "../ticket-table/TicketTable";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="hover:underline">Accueil</span>
          <span>/</span>
          <span className="text-gray-700">Dashboard</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow">
        <button className="bg-purple-600 text-white px-4 py-2 mt-4 hover:bg-purple-700">
          Cliquez-moi
        </button>

        <div className="my-8 text-center">
          <div>
            <p>Total tickets:</p>
          </div>
          <div>
            <p>Pending tickets:</p>
          </div>
        </div>
      </div>
      
      <TicketsTable />
    </div>
  );
}
