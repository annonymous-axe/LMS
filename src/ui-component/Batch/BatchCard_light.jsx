import React, { useState } from 'react';
import { Calendar, Users, BookOpen, Clock, Eye, Play, UserPlus, Sparkles } from 'lucide-react';
import OpenBatchDetail from './BatchDetail';

/**
 * BatchCard Component - Light Mode Optimized
 * Stunning, Professional, and Highly Captivating Design for Light Themes
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
  const [isHovered, setIsHovered] = useState(false);

  const statusConfig = {
    ongoing: {
      bg: 'bg-gradient-to-r from-green-100 to-emerald-100',
      text: 'text-green-700',
      label: 'Ongoing',
      glow: 'shadow-green-500/20',
      border: 'border-green-200'
    },
    upcoming: {
      bg: 'bg-gradient-to-r from-blue-100 to-cyan-100',
      text: 'text-blue-700',
      label: 'Upcoming',
      glow: 'shadow-blue-500/20',
      border: 'border-blue-200'
    },
    completed: {
      bg: 'bg-gradient-to-r from-gray-100 to-slate-100',
      text: 'text-gray-700',
      label: 'Completed',
      glow: 'shadow-gray-500/20',
      border: 'border-gray-200'
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
          rounded-2xl 
          border border-gray-200
          shadow-lg shadow-gray-200/60
          hover:shadow-2xl hover:shadow-gray-300/70
          transition-all duration-500 ease-out 
          hover:-translate-y-2 hover:scale-[1.01]
          overflow-hidden 
          ${className}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorative animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/8 group-hover:via-purple-500/8 group-hover:to-pink-500/8 transition-all duration-700 pointer-events-none" />
        
        {/* Sparkle effect on hover */}
        {isHovered && (
          <div className="absolute top-4 right-4 animate-pulse">
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </div>
        )}

        {/* Header Section */}
        <div className="relative px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50/50 via-transparent to-transparent">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              {/* Stunning Icon with glow effect */}
              <div className="flex-shrink-0 relative group/icon">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl blur-md opacity-50 group-hover/icon:opacity-75 transition-opacity" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/40 transform group-hover/icon:scale-110 group-hover/icon:rotate-3 transition-all duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Badge */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {name}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} border shadow-sm ${statusStyle.glow}`}>
                    {statusStyle.label}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {course}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative px-6 py-5">
          {/* Batch Details Grid with stunning cards */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {/* Start Date */}
            <div className="group/item flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover/item:scale-110 transition-transform">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-blue-600">Start Date</p>
                <p className="text-sm font-bold text-gray-900 truncate">
                  {startDate}
                </p>
              </div>
            </div>

            {/* End Date */}
            {endDate && (
              <div className="group/item flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover/item:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-purple-600">End Date</p>
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {endDate}
                  </p>
                </div>
              </div>
            )}

            {/* Students */}
            <div className="group/item flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-100 hover:shadow-md hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover/item:scale-110 transition-transform">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-green-600">Students</p>
                <p className="text-sm font-bold text-gray-900 truncate">
                  {students}{maxStudents ? `/${maxStudents}` : ''}
                </p>
              </div>
            </div>

            {/* Schedule */}
            {schedule && (
              <div className="group/item flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover/item:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-orange-600">Schedule</p>
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {schedule}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Instructor with elegant styling */}
          {instructor && (
            <div className="mb-5 p-4 rounded-xl bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border border-indigo-100/50">
              <p className="text-xs font-medium text-indigo-600 mb-1 flex items-center gap-2">
                <Users className="w-3 h-3" />
                Instructor
              </p>
              <p className="text-sm font-bold text-gray-900">
                {instructor}
              </p>
            </div>
          )}

          {/* Progress Bar (for ongoing batches) */}
          {status === 'ongoing' && progress !== undefined && (
            <div className="mb-0">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-gray-600 flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  Course Progress
                </p>
                <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {progress}%
                </p>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>
          )}

          {/* Seat Availability (for upcoming batches) */}
          {status === 'upcoming' && maxStudents && (
            <div className="mb-0">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-gray-600 flex items-center gap-2">
                  <UserPlus className="w-3 h-3" />
                  Seats Available
                </p>
                <p className="text-sm font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {maxStudents - students} left
                </p>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                  style={{ width: `${(students / maxStudents) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Section with stunning buttons */}
        <div className="relative px-6 py-4 bg-gradient-to-br from-gray-50/80 to-gray-100/40 border-t border-gray-100 backdrop-blur-sm">
          <div className="flex gap-3 justify-end">
            {status === 'upcoming' && (
              <button className="group/btn px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
                <UserPlus className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                Enroll Now
              </button>
            )}
            {status === 'ongoing' && (
              <button className="group/btn px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
                <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                Continue Learning
              </button>
            )}
            <button
              onClick={() => setLargeModalOpen(true)}
              className="group/btn px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
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

      {/* Add shimmer animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

/**
 * BatchList Component - Light Mode Optimized
 * Beautiful filter system and empty states for Light Themes
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
    { value: 'all', label: 'All', icon: '📚', color: 'blue' },
    { value: 'ongoing', label: 'Ongoing', icon: '🚀', color: 'green' },
    { value: 'upcoming', label: 'Upcoming', icon: '⏰', color: 'blue' },
    { value: 'completed', label: 'Completed', icon: '✅', color: 'gray' }
  ];

  return (
    <div className={className}>
      {/* Header with stunning filter */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">
            {title}
          </h2>
          <p className="text-gray-600">
            {filteredBatches.length} {filteredBatches.length === 1 ? 'batch' : 'batches'} found
          </p>
        </div>
        
        {showFilter && (
          <div className="flex gap-2 flex-wrap">
            {filterButtons.map(btn => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`
                  group px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm
                  flex items-center gap-2
                  ${filter === btn.value
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/40 scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:shadow-md hover:scale-105'
                  }
                `}
              >
                <span className="text-base group-hover:scale-125 transition-transform">{btn.icon}</span>
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
        <div className="relative bg-gradient-to-br from-white to-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-16 text-center overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
          </div>
          
          <div className="relative">
            <div className="text-7xl mb-6 animate-bounce">📚</div>
            <p className="text-gray-600 text-xl font-semibold mb-2">
              {emptyMessage}
            </p>
            <p className="text-gray-500 text-sm">
              Try adjusting your filters or check back later
            </p>
          </div>
        </div>
      )}
    </div>
  );
};