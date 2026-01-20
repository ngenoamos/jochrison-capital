import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [authorized, setAuthorized] = useState(false);
const handleDelete = async (id: number) => {
if (!confirm("Are you sure you want to delete this lead?")) return;

const response = await fetch('/api/delete-lead', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
});

if (response.ok) {
    // Refresh the list locally so the deleted item disappears immediately
    setLeads(leads.filter((lead: any) => lead.id !== id));
}
};

  useEffect(() => {
    const password = prompt("Enter Admin Password:");
    if (password === "Jochrison2026") { // Change this to your preferred password
      setAuthorized(true);
      fetch('/api/get-leads')
        .then(res => res.json())
        .then(data => setLeads(data));
    }
  }, []);

  if (!authorized) return <div className="p-20 text-center">Unauthorized Access</div>;

  return (
    <div className="p-10 bg-slate-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Jochrison Capital Leads</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-800">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Message</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead: any) => (
            <tr key={lead.id} className="border-b border-slate-700">
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.email}</td>
              <td className="p-3">{lead.message}</td>
              <td className="p-3">{new Date(lead.created_at).toLocaleDateString()}</td>
              <td className="p-3">
                <button 
                    onClick={() => handleDelete(lead.id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition"
                >
                    Delete
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}