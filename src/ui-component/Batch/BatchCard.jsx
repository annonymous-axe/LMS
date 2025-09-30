import React from 'react';
import { Calendar, Users, BookOpen, Clock } from 'lucide-react';

// Batch Card Component - For displaying batch information
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
  status = 'ongoing', // ongoing, upcoming, completed
  progress,
  onViewDetails,
  onEnroll,
  className = ''
}) => {
  const statusConfig = {
    ongoing: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      label: 'Ongoing'
    },
    upcoming: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      label: 'Upcoming'
    },
    completed: {
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      label: 'Completed'
    }
  };

  const statusStyle = statusConfig[status] || statusConfig.ongoing;

  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
          <p className="text-gray-600 flex items-center gap-2">
            <BookOpen size={16} />
            {course}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle.bg} ${statusStyle.text}`}>
          {statusStyle.label}
        </span>
      </div>

      {/* Batch Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-start gap-2">
          <Calendar className="text-gray-400 mt-1" size={18} />
          <div>
            <p className="text-xs text-gray-500">Start Date</p>
            <p className="text-sm font-medium text-gray-800">{startDate}</p>
          </div>
        </div>

        {endDate && (
          <div className="flex items-start gap-2">
            <Calendar className="text-gray-400 mt-1" size={18} />
            <div>
              <p className="text-xs text-gray-500">End Date</p>
              <p className="text-sm font-medium text-gray-800">{endDate}</p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2">
          <Users className="text-gray-400 mt-1" size={18} />
          <div>
            <p className="text-xs text-gray-500">Students</p>
            <p className="text-sm font-medium text-gray-800">
              {students}{maxStudents ? `/${maxStudents}` : ''}
            </p>
          </div>
        </div>

        {schedule && (
          <div className="flex items-start gap-2">
            <Clock className="text-gray-400 mt-1" size={18} />
            <div>
              <p className="text-xs text-gray-500">Schedule</p>
              <p className="text-sm font-medium text-gray-800">{schedule}</p>
            </div>
          </div>
        )}
      </div>

      {/* Instructor */}
      {instructor && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-xs text-gray-500 mb-1">Instructor</p>
          <p className="text-sm font-medium text-gray-800">{instructor}</p>
        </div>
      )}

      {/* Progress Bar (for ongoing batches) */}
      {status === 'ongoing' && progress !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Course Progress</span>
            <span className="font-medium text-gray-800">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Seat Availability (for upcoming batches) */}
      {status === 'upcoming' && maxStudents && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Seats Available</span>
            <span className="font-medium text-gray-800">{maxStudents - students} left</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(students / maxStudents) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            View Details
          </button>
        )}
        {onEnroll && status === 'upcoming' && (
          <button
            onClick={onEnroll}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Enroll Now
          </button>
        )}
        {status === 'ongoing' && (
          <button
            onClick={onViewDetails}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium"
          >
            Continue Learning
          </button>
        )}
      </div>
    </div>
  );
};

// Batch List Component - Container for multiple batches
export const BatchList = ({ 
  batches = [], 
  title = 'Batches',
  emptyMessage = 'No batches available',
  showFilter = true,
  className = ''
}) => {
  const [filter, setFilter] = React.useState('all');

  const filteredBatches = batches.filter(batch => {
    if (filter === 'all') return true;
    return batch.status === filter;
  });

  return (
    <div className={className}>
      {/* Header with Filter */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {showFilter && (
          <div className="flex gap-2">
            {['all', 'ongoing', 'upcoming', 'completed'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Batch Cards Grid */}
      {filteredBatches.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBatches.map((batch, index) => (
            <BatchCard key={index} {...batch} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-gray-600 text-lg">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
};