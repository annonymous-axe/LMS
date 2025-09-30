import React, { useState } from 'react';
import { Search, Filter, Download, Upload, Plus, Edit, Trash2, Mail, Phone, Eye, MoreVertical, CheckCircle, XCircle, Clock } from 'lucide-react';

// Student Card Component
const StudentCard = ({ student, onEdit, onDelete, onViewDetails, onContact }) => {
  const [showMenu, setShowMenu] = useState(false);

  const statusConfig = {
    active: { bg: 'bg-green-100', text: 'text-green-700', label: 'Active' },
    inactive: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Inactive' },
    suspended: { bg: 'bg-red-100', text: 'text-red-700', label: 'Suspended' }
  };

  const status = statusConfig[student.status] || statusConfig.active;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {student.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{student.name}</h3>
            <p className="text-sm text-gray-500">{student.email}</p>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <MoreVertical size={18} className="text-gray-600" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => { onViewDetails(student); setShowMenu(false); }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
              >
                <Eye size={16} />
                View Details
              </button>
              <button
                onClick={() => { onEdit(student); setShowMenu(false); }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
              >
                <Edit size={16} />
                Edit
              </button>
              <button
                onClick={() => { onContact(student); setShowMenu(false); }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
              >
                <Mail size={16} />
                Send Email
              </button>
              <button
                onClick={() => { onDelete(student); setShowMenu(false); }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-red-600 border-t"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div>
          <p className="text-gray-500">Student ID</p>
          <p className="font-semibold text-gray-800">{student.studentId}</p>
        </div>
        <div>
          <p className="text-gray-500">Phone</p>
          <p className="font-semibold text-gray-800">{student.phone}</p>
        </div>
        <div>
          <p className="text-gray-500">Enrolled Courses</p>
          <p className="font-semibold text-gray-800">{student.enrolledCourses}</p>
        </div>
        <div>
          <p className="text-gray-500">Status</p>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.text}`}>
            {status.label}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onViewDetails(student)}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          View Profile
        </button>
        <button
          onClick={() => onContact(student)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Mail size={16} />
        </button>
      </div>
    </div>
  );
};

// Student Table View
const StudentTable = ({ students, onEdit, onDelete, onViewDetails }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedStudents = [...students].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Student</th>
              <th 
                className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('studentId')}
              >
                Student ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Contact</th>
              <th 
                className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('enrolledCourses')}
              >
                Courses
              </th>
              <th 
                className="px-6 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('joinDate')}
              >
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">{student.studentId}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{student.phone}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{student.enrolledCourses}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.joinDate}</td>
                <td className="px-6 py-4">
                  {student.status === 'active' ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      <CheckCircle size={14} />
                      Active
                    </span>
                  ) : student.status === 'inactive' ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      <Clock size={14} />
                      Inactive
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                      <XCircle size={14} />
                      Suspended
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onViewDetails(student)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye size={16} className="text-gray-600" />
                    </button>
                    <button
                      onClick={() => onEdit(student)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit size={16} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => onDelete(student)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Admin Student Management Component
const AdminStudentManagement = () => {
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const sampleStudents = [
    {
      id: 1,
      studentId: 'STU-2025-001',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@email.com',
      phone: '+91 98765 43210',
      enrolledCourses: 3,
      joinDate: '2025-01-15',
      status: 'active'
    },
    {
      id: 2,
      studentId: 'STU-2025-002',
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      phone: '+91 98765 43211',
      enrolledCourses: 2,
      joinDate: '2025-01-20',
      status: 'active'
    },
    {
      id: 3,
      studentId: 'STU-2025-003',
      name: 'Amit Kumar',
      email: 'amit.kumar@email.com',
      phone: '+91 98765 43212',
      enrolledCourses: 5,
      joinDate: '2025-02-01',
      status: 'active'
    },
    {
      id: 4,
      studentId: 'STU-2025-004',
      name: 'Sneha Desai',
      email: 'sneha.desai@email.com',
      phone: '+91 98765 43213',
      enrolledCourses: 1,
      joinDate: '2025-02-10',
      status: 'inactive'
    },
    {
      id: 5,
      studentId: 'STU-2025-005',
      name: 'Vijay Singh',
      email: 'vijay.singh@email.com',
      phone: '+91 98765 43214',
      enrolledCourses: 4,
      joinDate: '2025-02-15',
      status: 'active'
    },
    {
      id: 6,
      studentId: 'STU-2025-006',
      name: 'Anjali Mehta',
      email: 'anjali.mehta@email.com',
      phone: '+91 98765 43215',
      enrolledCourses: 0,
      joinDate: '2025-03-01',
      status: 'suspended'
    }
  ];

  const filteredStudents = sampleStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewDetails = (student) => {
    alert(`Viewing details for ${student.name}`);
  };

  const handleEdit = (student) => {
    alert(`Editing ${student.name}`);
  };

  const handleDelete = (student) => {
    if (confirm(`Are you sure you want to delete ${student.name}?`)) {
      alert(`Deleted ${student.name}`);
    }
  };

  const handleContact = (student) => {
    alert(`Sending email to ${student.email}`);
  };

  const handleExport = () => {
    alert('Exporting student data to CSV...');
  };

  const handleImport = () => {
    alert('Import students from CSV...');
  };

  const handleAddStudent = () => {
    alert('Opening add student form...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Management</h1>
          <p className="text-gray-600">Manage all students, enrollments, and activities</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <p className="text-blue-100 text-sm mb-1">Total Students</p>
            <h3 className="text-3xl font-bold">{sampleStudents.length}</h3>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <p className="text-green-100 text-sm mb-1">Active Students</p>
            <h3 className="text-3xl font-bold">{sampleStudents.filter(s => s.status === 'active').length}</h3>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
            <p className="text-orange-100 text-sm mb-1">New This Month</p>
            <h3 className="text-3xl font-bold">12</h3>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <p className="text-purple-100 text-sm mb-1">Avg Courses</p>
            <h3 className="text-3xl font-bold">2.5</h3>
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
                  placeholder="Search students..."
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
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>

              <button
                onClick={() => setViewMode(viewMode === 'table' ? 'grid' : 'table')}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                {viewMode === 'table' ? 'Grid View' : 'Table View'}
              </button>

              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <Download size={18} />
                Export
              </button>

              <button
                onClick={handleImport}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <Upload size={18} />
                Import
              </button>

              <button
                onClick={handleAddStudent}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Plus size={18} />
                Add Student
              </button>
            </div>
          </div>
        </div>

        {/* Student List */}
        {viewMode === 'table' ? (
          <StudentTable
            students={filteredStudents}
            onViewDetails={handleViewDetails}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onViewDetails={handleViewDetails}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onContact={handleContact}
              />
            ))}
          </div>
        )}

        {filteredStudents.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <p className="text-gray-500 text-lg">No students found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminStudentManagement;