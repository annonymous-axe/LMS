import React, { useState } from 'react';
import { FileText, Download, Send, Eye, Edit, Trash2, Plus, Search, Filter, Clock, CheckCircle, XCircle, DollarSign, Calendar, Printer } from 'lucide-react';

// Invoice Card Component
const InvoiceCard = ({ invoice, onView, onEdit, onDelete, onDownload, onSend }) => {
  const statusConfig = {
    paid: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle, label: 'Paid' },
    pending: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: Clock, label: 'Pending' },
    overdue: { bg: 'bg-red-100', text: 'text-red-700', icon: XCircle, label: 'Overdue' },
    cancelled: { bg: 'bg-gray-100', text: 'text-gray-700', icon: XCircle, label: 'Cancelled' }
  };

  const status = statusConfig[invoice.status] || statusConfig.pending;
  const StatusIcon = status.icon;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="text-blue-600" size={20} />
            <h3 className="font-bold text-gray-800">{invoice.invoiceNumber}</h3>
          </div>
          <p className="text-sm text-gray-600">{invoice.studentName}</p>
          <p className="text-xs text-gray-500">{invoice.studentEmail}</p>
        </div>
        <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.text}`}>
          <StatusIcon size={14} />
          {status.label}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Issue Date</span>
          <span className="font-medium text-gray-800">{invoice.issueDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Due Date</span>
          <span className="font-medium text-gray-800">{invoice.dueDate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Course</span>
          <span className="font-medium text-gray-800">{invoice.courseName}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Total Amount</span>
          <span className="text-2xl font-bold text-gray-800">₹{invoice.amount.toLocaleString('en-IN')}</span>
        </div>
        {invoice.paidAmount > 0 && invoice.status !== 'paid' && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-500">Paid Amount</span>
            <span className="text-sm font-semibold text-green-600">₹{invoice.paidAmount.toLocaleString('en-IN')}</span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onView(invoice)}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          <Eye size={16} />
          View
        </button>
        <button
          onClick={() => onDownload(invoice)}
          className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          title="Download"
        >
          <Download size={16} className="text-gray-600" />
        </button>
        <button
          onClick={() => onSend(invoice)}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          title="Send Email"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

// Invoice Preview Modal
const InvoicePreview = ({ invoice, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Invoice Preview</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          {/* Invoice Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">LearnHub Academy</h1>
              <p className="text-gray-600">123 Education Street</p>
              <p className="text-gray-600">Surat, Gujarat 395007</p>
              <p className="text-gray-600">contact@learnhub.com</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">INVOICE</h2>
              <p className="text-gray-600">#{invoice.invoiceNumber}</p>
            </div>
          </div>

          {/* Bill To & Invoice Details */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Bill To:</h3>
              <p className="font-semibold text-gray-800">{invoice.studentName}</p>
              <p className="text-gray-600">{invoice.studentEmail}</p>
            </div>
            <div className="text-right">
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">Issue Date:</span>
                  <span className="font-medium text-gray-800">{invoice.issueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Due Date:</span>
                  <span className="font-medium text-gray-800">{invoice.dueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${
                    invoice.status === 'paid' ? 'text-green-600' :
                    invoice.status === 'overdue' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>
                    {invoice.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Items */}
          <table className="w-full mb-8">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="text-left p-3 text-gray-700 font-semibold">Description</th>
                <th className="text-right p-3 text-gray-700 font-semibold">Quantity</th>
                <th className="text-right p-3 text-gray-700 font-semibold">Price</th>
                <th className="text-right p-3 text-gray-700 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <p className="font-semibold text-gray-800">{invoice.courseName}</p>
                  <p className="text-sm text-gray-600">Course Enrollment Fee</p>
                </td>
                <td className="text-right p-3 text-gray-800">1</td>
                <td className="text-right p-3 text-gray-800">₹{invoice.amount.toLocaleString('en-IN')}</td>
                <td className="text-right p-3 font-semibold text-gray-800">₹{invoice.amount.toLocaleString('en-IN')}</td>
              </tr>
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-64">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium text-gray-800">₹{invoice.amount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax (0%):</span>
                <span className="font-medium text-gray-800">₹0</span>
              </div>
              <div className="flex justify-between pt-2 border-t-2 border-gray-200">
                <span className="font-bold text-gray-800">Total:</span>
                <span className="font-bold text-xl text-gray-800">₹{invoice.amount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600">Thank you for your business!</p>
            <p className="text-xs text-gray-500 mt-2">
              Payment is due within 15 days. Please make checks payable to LearnHub Academy.
            </p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Printer size={18} />
            Print
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Invoice Management Component
const InvoiceManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showPreview, setShowPreview] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const invoices = [
    {
      id: 1,
      invoiceNumber: 'INV-2025-001',
      studentName: 'Rahul Sharma',
      studentEmail: 'rahul@email.com',
      courseName: 'Full Stack Web Development',
      amount: 4999,
      paidAmount: 4999,
      issueDate: '2025-03-01',
      dueDate: '2025-03-15',
      status: 'paid'
    },
    {
      id: 2,
      invoiceNumber: 'INV-2025-002',
      studentName: 'Priya Patel',
      studentEmail: 'priya@email.com',
      courseName: 'Data Science Fundamentals',
      amount: 5499,
      paidAmount: 0,
      issueDate: '2025-03-05',
      dueDate: '2025-03-20',
      status: 'pending'
    },
    {
      id: 3,
      invoiceNumber: 'INV-2025-003',
      studentName: 'Amit Kumar',
      studentEmail: 'amit@email.com',
      courseName: 'Mobile App Development',
      amount: 4799,
      paidAmount: 2000,
      issueDate: '2025-02-15',
      dueDate: '2025-03-01',
      status: 'overdue'
    },
    {
      id: 4,
      invoiceNumber: 'INV-2025-004',
      studentName: 'Sneha Desai',
      studentEmail: 'sneha@email.com',
      courseName: 'Cloud Computing AWS',
      amount: 5999,
      paidAmount: 5999,
      issueDate: '2025-03-10',
      dueDate: '2025-03-25',
      status: 'paid'
    },
    {
      id: 5,
      invoiceNumber: 'INV-2025-005',
      studentName: 'Vijay Singh',
      studentEmail: 'vijay@email.com',
      courseName: 'UI/UX Design Pro',
      amount: 3999,
      paidAmount: 0,
      issueDate: '2025-03-12',
      dueDate: '2025-03-27',
      status: 'pending'
    },
    {
      id: 6,
      invoiceNumber: 'INV-2025-006',
      studentName: 'Anjali Mehta',
      studentEmail: 'anjali@email.com',
      courseName: 'Python Programming',
      amount: 3499,
      paidAmount: 0,
      issueDate: '2025-02-20',
      dueDate: '2025-03-06',
      status: 'overdue'
    }
  ];

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0);

  const handleView = (invoice) => {
    setSelectedInvoice(invoice);
    setShowPreview(true);
  };

  const handleDownload = (invoice) => {
    alert(`Downloading invoice ${invoice.invoiceNumber}`);
  };

  const handleSend = (invoice) => {
    alert(`Sending invoice ${invoice.invoiceNumber} to ${invoice.studentEmail}`);
  };

  const handleEdit = (invoice) => {
    alert(`Editing invoice ${invoice.invoiceNumber}`);
  };

  const handleDelete = (invoice) => {
    if (confirm(`Delete invoice ${invoice.invoiceNumber}?`)) {
      alert(`Deleted ${invoice.invoiceNumber}`);
    }
  };

  const handleCreateInvoice = () => {
    alert('Opening invoice creation form...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Invoice Management</h1>
          <p className="text-gray-600">Create, manage, and track all invoices</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <p className="text-blue-100 text-sm mb-1">Total Invoiced</p>
            <h3 className="text-3xl font-bold">₹{(totalAmount / 1000).toFixed(0)}K</h3>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <p className="text-green-100 text-sm mb-1">Paid</p>
            <h3 className="text-3xl font-bold">₹{(paidAmount / 1000).toFixed(0)}K</h3>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
            <p className="text-yellow-100 text-sm mb-1">Pending</p>
            <h3 className="text-3xl font-bold">₹{(pendingAmount / 1000).toFixed(0)}K</h3>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
            <p className="text-red-100 text-sm mb-1">Overdue</p>
            <h3 className="text-3xl font-bold">₹{(overdueAmount / 1000).toFixed(0)}K</h3>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search invoices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <button
                onClick={handleCreateInvoice}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Plus size={18} />
                Create Invoice
              </button>
            </div>
          </div>
        </div>

        {/* Invoice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInvoices.map((invoice) => (
            <InvoiceCard
              key={invoice.id}
              invoice={invoice}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onDownload={handleDownload}
              onSend={handleSend}
            />
          ))}
        </div>

        {filteredInvoices.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No invoices found</p>
          </div>
        )}

        {/* Invoice Preview Modal */}
        {showPreview && selectedInvoice && (
          <InvoicePreview
            invoice={selectedInvoice}
            onClose={() => {
              setShowPreview(false);
              setSelectedInvoice(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default InvoiceManagement;