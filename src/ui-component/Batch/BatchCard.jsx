import React, { useState } from 'react';
import { Calendar, Users, BookOpen, Clock, Eye, Play, UserPlus, TrendingUp, X, CheckCircle } from 'lucide-react';

/**
 * BatchCard Component - Clean & Informative Berry Style
 * Simple, scannable, and easy to understand at a glance
 */
export const BatchCard = ({
  id,
  name = 'Batch Name',
  course = 'Course Name',
  startDate,
  endDate,
  students = 0,
  maxStudents,
  instructor,
  schedule,
  status = 'ongoing',
  progress,
  className = ''
}) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const statusConfig = {
    ongoing: {
      color: '#2196F3',
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      label: 'Ongoing'
    },
    upcoming: {
      color: '#FF9800',
      bg: 'bg-orange-50',
      text: 'text-orange-700',
      label: 'Upcoming'
    },
    completed: {
      color: '#4CAF50',
      bg: 'bg-green-50',
      text: 'text-green-700',
      label: 'Completed'
    }
  };

  const statusStyle = statusConfig[status] || statusConfig.ongoing;
  const enrollmentPercentage = maxStudents ? (students / maxStudents) * 100 : 0;

  return (
    <div className={`bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Status Bar */}
      <div className="h-1" style={{ backgroundColor: statusStyle.color }} />

      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
            <p className="text-sm text-gray-600">{course}</p>
          </div>
          <span className={`${statusStyle.bg} ${statusStyle.text} px-3 py-1 rounded-full text-xs font-medium ml-3`}>
            {statusStyle.label}
          </span>
        </div>

        {/* Info Grid - Simple 2x2 */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Duration</span>
            </div>
            <span className="font-medium text-gray-900">{startDate} - {endDate || 'Ongoing'}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>Students</span>
            </div>
            <span className="font-medium text-gray-900">
              {students}{maxStudents ? ` / ${maxStudents}` : ''}
            </span>
          </div>

          {schedule && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Schedule</span>
              </div>
              <span className="font-medium text-gray-900">{schedule}</span>
            </div>
          )}

          {instructor && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-4 h-4" />
                <span>Instructor</span>
              </div>
              <span className="font-medium text-gray-900">{instructor}</span>
            </div>
          )}
        </div>

        {/* Progress for Ongoing */}
        {status === 'ongoing' && progress !== undefined && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600">Progress</span>
              <span className="text-xs font-semibold" style={{ color: statusStyle.color }}>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, backgroundColor: statusStyle.color }}
              />
            </div>
          </div>
        )}

        {/* Enrollment for Upcoming */}
        {status === 'upcoming' && maxStudents && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600">Enrollment</span>
              <span className="text-xs font-semibold text-gray-900">{maxStudents - students} seats left</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{ width: `${enrollmentPercentage}%`, backgroundColor: statusStyle.color }}
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          {status === 'upcoming' && (
            <button 
              className="flex-1 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200"
              style={{ 
                borderColor: statusStyle.color,
                color: statusStyle.color
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = statusStyle.color;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = statusStyle.color;
              }}
            >
              Enroll
            </button>
          )}
          {status === 'ongoing' && (
            <button 
              className="flex-1 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200"
              style={{ 
                borderColor: statusStyle.color,
                color: statusStyle.color
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = statusStyle.color;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = statusStyle.color;
              }}
            >
              Continue
            </button>
          )}
          <button
            onClick={() => setDetailsOpen(true)}
            className="flex-1 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: statusStyle.color }}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {detailsOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4 animate-fadeIn" 
          onClick={() => setDetailsOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{course}</p>
              </div>
              <button
                onClick={() => setDetailsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-medium">Start Date</span>
                  </div>
                  <p className="font-semibold text-gray-900">{startDate}</p>
                </div>

                {endDate && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-medium">End Date</span>
                    </div>
                    <p className="font-semibold text-gray-900">{endDate}</p>
                  </div>
                )}

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">Students</span>
                  </div>
                  <p className="font-semibold text-gray-900">{students}{maxStudents ? ` / ${maxStudents}` : ''}</p>
                </div>

                {schedule && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-medium">Schedule</span>
                    </div>
                    <p className="font-semibold text-gray-900">{schedule}</p>
                  </div>
                )}
              </div>

              {instructor && (
                <div className="p-4 bg-gray-50 rounded-lg mb-5">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-medium">Instructor</span>
                  </div>
                  <p className="font-semibold text-gray-900">{instructor}</p>
                </div>
              )}

              {status === 'ongoing' && progress !== undefined && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-medium">Course Progress</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: statusStyle.color }}>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%`, backgroundColor: statusStyle.color }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-gray-200 flex justify-end gap-3 bg-gray-50">
              <button
                onClick={() => setDetailsOpen(false)}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Close
              </button>
              <button
                className="px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: statusStyle.color }}
              >
                Edit Batch
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

/**
 * BatchList Component - Clean & Simple
 */
export const BatchList = ({
  batches = [],
  title = 'Batches',
  emptyMessage = 'No batches available',
  showFilter = true,
  className = ''
}) => {
  const [filter, setFilter] = useState('all');

  const filteredBatches = batches.filter(batch => {
    if (filter === 'all') return true;
    return batch.status === filter;
  });

  const filterOptions = [
    { value: 'all', label: 'All', count: batches.length },
    { value: 'ongoing', label: 'Ongoing', count: batches.filter(b => b.status === 'ongoing').length },
    { value: 'upcoming', label: 'Upcoming', count: batches.filter(b => b.status === 'upcoming').length },
    { value: 'completed', label: 'Completed', count: batches.filter(b => b.status === 'completed').length }
  ];

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        
        {/* Filter Tabs */}
        {showFilter && (
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${filter === option.value
                    ? 'bg-secondary text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                {option.label}
                <span className={`ml-2 ${filter === option.value ? 'text-white' : 'text-gray-500'}`}>
                  {option.count}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      {filteredBatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {filteredBatches.map((batch, index) => (
            <BatchCard key={batch.id || index} {...batch} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-900 font-medium mb-1">{emptyMessage}</p>
          <p className="text-gray-500 text-sm">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
};

// Demo
const sampleBatches = [
  {
    id: 1,
    name: 'Web Development Bootcamp',
    course: 'Full Stack Development',
    startDate: 'Jan 15, 2024',
    endDate: 'Apr 15, 2024',
    students: 28,
    maxStudents: 30,
    instructor: 'John Doe',
    schedule: 'Mon, Wed, Fri - 6 PM',
    status: 'ongoing',
    progress: 65
  },
  {
    id: 2,
    name: 'Data Science Masters',
    course: 'Data Science & ML',
    startDate: 'Feb 1, 2024',
    endDate: 'May 1, 2024',
    students: 20,
    maxStudents: 25,
    instructor: 'Jane Smith',
    schedule: 'Tue, Thu - 7 PM',
    status: 'upcoming'
  },
  {
    id: 3,
    name: 'React Advanced Course',
    course: 'Frontend Development',
    startDate: 'Nov 1, 2023',
    endDate: 'Jan 1, 2024',
    students: 30,
    maxStudents: 30,
    instructor: 'Mike Johnson',
    schedule: 'Sat, Sun - 10 AM',
    status: 'completed'
  },
  {
    id: 4,
    name: 'Python for Beginners',
    course: 'Programming Fundamentals',
    startDate: 'Jan 20, 2024',
    endDate: 'Mar 20, 2024',
    students: 22,
    maxStudents: 25,
    instructor: 'Sarah Williams',
    schedule: 'Mon, Wed - 5 PM',
    status: 'ongoing',
    progress: 45
  },
  {
    id: 5,
    name: 'UI/UX Design Workshop',
    course: 'Design Principles',
    startDate: 'Feb 10, 2024',
    endDate: 'Apr 10, 2024',
    students: 18,
    maxStudents: 20,
    instructor: 'Emily Davis',
    schedule: 'Sat - 2 PM',
    status: 'upcoming'
  },
  {
    id: 6,
    name: 'Mobile App Development',
    course: 'React Native',
    startDate: 'Jan 25, 2024',
    endDate: 'Apr 25, 2024',
    students: 16,
    maxStudents: 20,
    instructor: 'David Brown',
    schedule: 'Tue, Thu - 6 PM',
    status: 'ongoing',
    progress: 32
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <BatchList batches={sampleBatches} />
    </div>
  );
}