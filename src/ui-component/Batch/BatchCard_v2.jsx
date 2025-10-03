import React, { useState } from 'react';
import { Calendar, Users, BookOpen, Clock, Eye, Play, UserPlus, Award } from 'lucide-react';
import OpenBatchDetail from './BatchDetail';

/**
 * BatchCard Component - Professional Enterprise Grade
 * Clean, Modern, Production-Ready Design for Educational Platforms
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
  const [largeModalOpen, setLargeModalOpen] = useState(false);

  const statusConfig = {
    ongoing: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      label: 'Active',
      dot: 'bg-green-500'
    },
    upcoming: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      label: 'Upcoming',
      dot: 'bg-blue-500'
    },
    completed: {
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      border: 'border-gray-300',
      label: 'Completed',
      dot: 'bg-gray-500'
    }
  };

  const statusStyle = statusConfig[status] || statusConfig.ongoing;

  return (
    <>
      <div 
        className={`
          group
          relative
          bg-white
          rounded-lg
          border border-gray-200
          shadow-sm
          hover:shadow-md
          transition-all duration-200
          hover:-translate-y-0.5
          overflow-hidden
          ${className}
        `}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <BookOpen className="w-6 h-6" />
            </div>

            {/* Title & Status */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {name}
                </h3>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} border whitespace-nowrap`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                  {statusStyle.label}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {course}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {/* Start Date */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">Start Date</p>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {startDate}
                </p>
              </div>
            </div>

            {/* End Date */}
            {endDate && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">End Date</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {endDate}
                  </p>
                </div>
              </div>
            )}

            {/* Students */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">Enrolled</p>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {students}{maxStudents ? `/${maxStudents}` : ''}
                </p>
              </div>
            </div>

            {/* Schedule */}
            {schedule && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">Schedule</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {schedule}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Instructor */}
          {instructor && (
            <div className="mb-5 p-4 rounded-lg bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Instructor</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {instructor}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Progress Bar (ongoing) */}
          {status === 'ongoing' && progress !== undefined && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-700">Course Progress</p>
                <p className="text-sm font-semibold text-blue-600">{progress}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Seat Availability (upcoming) */}
          {status === 'upcoming' && maxStudents && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-700">Seats Available</p>
                <p className="text-sm font-semibold text-green-600">
                  {maxStudents - students} of {maxStudents}
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full transition-all duration-300"
                  style={{ width: `${(students / maxStudents) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex gap-3 justify-end">
            {status === 'upcoming' && (
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Enroll Now
              </button>
            )}
            {status === 'ongoing' && (
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium flex items-center gap-2">
                <Play className="w-4 h-4" />
                Continue
              </button>
            )}
            <button
              onClick={() => setLargeModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
          </div>
        </div>
      </div>

      <OpenBatchDetail
        largeModalOpen={largeModalOpen}
        setLargeModalOpen={setLargeModalOpen}
        batchId={id}
      />
    </>
  );
};

/**
 * BatchList Component - Professional Enterprise Grade
 * Clean Filter System with Modern Design
 */
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

  const filterButtons = [
    { value: 'all', label: 'All' },
    { value: 'ongoing', label: 'Active' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {title}
          </h2>
          <p className="text-sm text-gray-600">
            {filteredBatches.length} {filteredBatches.length === 1 ? 'batch' : 'batches'}
          </p>
        </div>
        
        {showFilter && (
          <div className="flex gap-2">
            {filterButtons.map(btn => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-colors text-sm
                  ${filter === btn.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }
                `}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Batch Cards Grid */}
      {filteredBatches.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBatches.map((batch, index) => (
            <BatchCard key={batch.id || index} {...batch} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <div className="text-gray-400 text-5xl mb-4">📚</div>
          <p className="text-gray-900 text-lg font-semibold mb-2">
            {emptyMessage}
          </p>
          <p className="text-gray-600 text-sm">
            Try adjusting your filters to see more results
          </p>
        </div>
      )}
    </div>
  );
};