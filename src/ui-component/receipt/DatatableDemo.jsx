import { DataTable } from "./Datatable";
import receipts from '../../data/receipts.json';
import { User } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const DataTableDemo = () => {
  const columns = [
    { key: 'id', label: 'Receipt ID', render: (val) => `#${val.toString().padStart(6, '0')}` },
    { key: 'course', label: 'Course Name' },
    { key: 'amount', label: 'Amount', render: (val) => `₹${val.toLocaleString('en-IN')}` },
    { key: 'date', label: 'Payment Date' },
    { key: 'method', label: 'Payment Method' },
    { 
      key: 'status', 
      label: 'Status',
      render: (val) => (
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
          val === 'paid' ? 'bg-green-100 text-green-700' : 
          val === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
          'bg-red-100 text-red-700'
        }`}>
          {val}
        </span>
      )
    },
    {
      key: 'action',
      label: 'Action',
      sortable: false,
      render: (val, row) => (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            alert(`Downloading receipt for ${row.course}`);
          }}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Download
        </button>
      )
    }
  ];

  const {user} = useAuth();

  const sampleData = receipts.filter(
    (rec) => ( user.id ===rec.userId )
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <DataTable
          columns={columns}
          data={sampleData}
          sortable={true}
          searchable={true}
          exportable={true}
          onRowClick={(row) => console.log('Row clicked:', row)}
        />
      </div>
    </div>
  );
};

export default DataTableDemo;