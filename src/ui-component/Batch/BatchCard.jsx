import React, { useState, useRef } from 'react';
import { Calendar, Users, BookOpen, Clock, Eye, Play, UserPlus, TrendingUp, GraduationCap, Sparkles, ChevronRight } from 'lucide-react';

/**
 * BatchCard Component - Advanced Berry Design
 * Sophisticated animations, micro-interactions, and layered visual depth
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const statusConfig = {
    ongoing: {
      primary: 'bg-purple-500',
      light: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      gradient: 'from-purple-400 via-purple-500 to-purple-600',
      glowColor: 'rgba(139, 92, 246, 0.3)',
      particleColor: 'secondary',
      label: 'Ongoing'
    },
    upcoming: {
      primary: 'bg-blue-500',
      light: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      particleColor: '#60a5fa',
      label: 'Upcoming'
    },
    completed: {
      primary: 'bg-gray-500',
      light: 'bg-gray-50',
      border: 'border-gray-200',
      text: 'text-gray-700',
      gradient: 'from-gray-400 via-gray-500 to-gray-600',
      glowColor: 'rgba(107, 114, 128, 0.3)',
      particleColor: '#9ca3af',
      label: 'Completed'
    }
  };

  const statusStyle = statusConfig[status] || statusConfig.ongoing;
  const enrollmentPercentage = maxStudents ? (students / maxStudents) * 100 : 0;

  // Parallax mouse tracking
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <>
      <div 
        ref={cardRef}
        className={`
          group
          relative 
          bg-white
          rounded-2xl
          border border-gray-200
          shadow-sm
          hover:shadow-2xl
          transition-all duration-500 ease-out
          overflow-hidden
          hover:-translate-y-1
          ${className}
        `}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)` 
            : 'none',
          transition: 'transform 0.3s ease-out, shadow 0.5s ease-out'
        }}
      >
        {/* Animated gradient background overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${statusStyle.glowColor}, transparent 60%)`
          }}
        />

        {/* Floating particles effect */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: statusStyle.particleColor,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </>
        )}

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"
            style={{
              transform: 'translateX(-100%)',
              width: '200%'
            }}
          />
        </div>

        {/* Top accent line with glow */}
        <div className={`h-1 bg-gradient-to-r ${statusStyle.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 group-hover:animate-pulse" />
        </div>

        {/* Subtle top gradient wash */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${statusStyle.glowColor}, transparent)`
          }}
        />

        {/* Content */}
        <div className="relative">
          {/* Header with micro-interactions */}
          <div className="p-5 pb-4">
            <div className="flex items-start gap-4">
              {/* Animated icon */}
              <div className="relative">
                <div className={`absolute inset-0 ${statusStyle.light} rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                <div className={`relative w-14 h-14 rounded-xl ${statusStyle.light} flex items-center justify-center border ${statusStyle.border} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <GraduationCap className={`w-7 h-7 ${statusStyle.text} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                {/* Pulse ring effect */}
                <div className={`absolute inset-0 rounded-xl ${statusStyle.border} border-2 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700`} />
              </div>

              {/* Title with staggered animation */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight transform transition-all duration-300 group-hover:text-gray-900">
                    {name}
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${statusStyle.light} ${statusStyle.text} ${statusStyle.border} border flex-shrink-0 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-md`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.primary} animate-pulse`} />
                    {statusStyle.label}
                  </span>
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-1.5 transform transition-all duration-300 group-hover:translate-x-1">
                  <BookOpen className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                  {course}
                </p>
              </div>
            </div>
          </div>

          {/* Info Grid with staggered hover effects */}
          <div className="px-5 pb-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Start Date */}
              <div className="group/card bg-gradient-to-br from-indigo-50 to-white p-3.5 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-12 shadow-sm group-hover/card:shadow-lg">
                    <Calendar className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-indigo-600 font-medium mb-0.5 transition-all duration-300 group-hover/card:text-indigo-700">Start Date</p>
                    <p className="text-sm font-semibold text-gray-800 truncate transition-all duration-300 group-hover/card:text-gray-900">{startDate}</p>
                  </div>
                </div>
              </div>

              {/* End Date */}
              {endDate && (
                <div className="group/card bg-gradient-to-br from-purple-50 to-white p-3.5 rounded-xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-12 shadow-sm group-hover/card:shadow-lg">
                      <Calendar className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-purple-600 font-medium mb-0.5 transition-all duration-300 group-hover/card:text-purple-700">End Date</p>
                      <p className="text-sm font-semibold text-gray-800 truncate transition-all duration-300 group-hover/card:text-gray-900">{endDate}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Students */}
              <div className="group/card bg-gradient-to-br from-teal-50 to-white p-3.5 rounded-xl border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-12 shadow-sm group-hover/card:shadow-lg">
                    <Users className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-teal-600 font-medium mb-0.5 transition-all duration-300 group-hover/card:text-teal-700">Students</p>
                    <p className="text-sm font-semibold text-gray-800 truncate transition-all duration-300 group-hover/card:text-gray-900">
                      {students}{maxStudents ? `/${maxStudents}` : ''}
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              {schedule && (
                <div className="group/card bg-gradient-to-br from-amber-50 to-white p-3.5 rounded-xl border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-12 shadow-sm group-hover/card:shadow-lg">
                      <Clock className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-amber-600 font-medium mb-0.5 transition-all duration-300 group-hover/card:text-amber-700">Schedule</p>
                      <p className="text-sm font-semibold text-gray-800 truncate transition-all duration-300 group-hover/card:text-gray-900">{schedule}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Instructor with reveal animation */}
          {instructor && (
            <div className="px-5 pb-4">
              <div className="bg-gradient-to-r from-gray-50 to-transparent p-3.5 rounded-xl border border-gray-100 transition-all duration-300 hover:border-indigo-200 hover:shadow-md group/instructor">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-md opacity-0 group-hover/instructor:opacity-50 transition-opacity duration-500" />
                    <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 transition-transform duration-300 group-hover/instructor:scale-110">
                      {instructor.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium transition-colors duration-300 group-hover/instructor:text-indigo-600">Instructor</p>
                    <p className="text-sm font-semibold text-gray-800 truncate transition-all duration-300 group-hover/instructor:text-gray-900">{instructor}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/instructor:opacity-100 transition-all duration-300 transform group-hover/instructor:translate-x-1" />
                </div>
              </div>
            </div>
          )}

          {/* Animated Progress Section */}
          {status === 'ongoing' && progress !== undefined && (
            <div className="px-5 pb-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-purple-500 group-hover:scale-110" />
                    <p className="text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Course Progress</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    <p className="text-sm font-bold text-purple-600 transition-all duration-300 group-hover:scale-110">{progress}%</p>
                  </div>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r ${statusStyle.gradient} rounded-full transition-all duration-700 ease-out relative`}
                    style={{ 
                      width: `${progress}%`,
                      boxShadow: `0 0 10px ${statusStyle.glowColor}`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer-fast" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enrollment Progress */}
          {status === 'upcoming' && maxStudents && (
            <div className="px-5 pb-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110" />
                    <p className="text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Seats Filled</p>
                  </div>
                  <p className="text-sm font-bold text-blue-600 transition-all duration-300 group-hover:scale-110">
                    {students}/{maxStudents}
                  </p>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r ${statusStyle.gradient} rounded-full transition-all duration-700 ease-out relative`}
                    style={{ 
                      width: `${enrollmentPercentage}%`,
                      boxShadow: `0 0 10px ${statusStyle.glowColor}`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer-fast" />
                  </div>
                </div>
                {enrollmentPercentage >= 80 && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium pt-1 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                    <span className="animate-bounce-subtle">Only {maxStudents - students} seats remaining!</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-transparent border-t border-gray-100 flex gap-2 justify-end transition-all duration-300 group-hover:bg-gray-50">
            {status === 'upcoming' && (
              <button className="group/btn px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2 hover:shadow-lg hover:scale-105 active:scale-95">
                <UserPlus className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12" />
                <span>Enroll Now</span>
                <ChevronRight className="w-0 opacity-0 group-hover/btn:w-4 group-hover/btn:opacity-100 transition-all duration-300" />
              </button>
            )}
            {status === 'ongoing' && (
              <button className="group/btn px-4 py-2 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-2 hover:shadow-lg hover:scale-105 active:scale-95">
                <Play className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:translate-x-0.5" />
                <span>Continue</span>
              </button>
            )}
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              className={`group/btn px-4 py-2 ${statusStyle.primary} text-white rounded-lg hover:opacity-90 transition-all duration-300 text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
              <Eye className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110 relative z-10" />
              <span className="relative z-10">Details</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {detailsOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn backdrop-blur-sm" 
          onClick={() => setDetailsOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-slideUp" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">Batch Details</h3>
                <button
                  onClick={() => setDetailsOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 hover:rotate-90"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-xl ${statusStyle.light} ${statusStyle.border} border flex items-center justify-center flex-shrink-0 animate-bounce-subtle`}>
                  <GraduationCap className={`w-8 h-8 ${statusStyle.text}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{name}</h4>
                  <p className="text-gray-600 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    {course}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <p className="text-xs text-gray-500 font-medium mb-1">Start Date</p>
                  <p className="font-semibold text-gray-800">{startDate}</p>
                </div>
                {endDate && (
                  <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <p className="text-xs text-gray-500 font-medium mb-1">End Date</p>
                    <p className="font-semibold text-gray-800">{endDate}</p>
                  </div>
                )}
                <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <p className="text-xs text-gray-500 font-medium mb-1">Students</p>
                  <p className="font-semibold text-gray-800">{students}{maxStudents ? `/${maxStudents}` : ''}</p>
                </div>
                {schedule && (
                  <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <p className="text-xs text-gray-500 font-medium mb-1">Schedule</p>
                    <p className="font-semibold text-gray-800">{schedule}</p>
                  </div>
                )}
              </div>
              {instructor && (
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
                  <p className="text-xs text-indigo-600 font-medium mb-2">Instructor</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                      {instructor.charAt(0).toUpperCase()}
                    </div>
                    <p className="font-semibold text-gray-800">{instructor}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setDetailsOpen(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm font-medium hover:scale-105 active:scale-95"
              >
                Close
              </button>
              <button className={`px-4 py-2 ${statusStyle.primary} text-white rounded-lg hover:opacity-90 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-xl hover:scale-105 active:scale-95`}>
                Take Action
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 1.5s infinite;
        }
        .animate-float {
          animation: float forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </>
  );
};

/**
 * BatchList Component
 */
export const BatchList = ({
  batches = [],
  title = 'My Batches',
  emptyMessage = 'No batches available',
  showFilter = true,
  className = ''
}) => {
  const [filter, setFilter] = useState('all');

  const filteredBatches = batches.filter(batch => {
    if (filter === 'all') return true;
    return batch.status === filter;
  });

  const filterButtons = [
    { value: 'all', label: 'All', count: batches.length },
    { value: 'ongoing', label: 'Ongoing', count: batches.filter(b => b.status === 'ongoing').length },
    { value: 'upcoming', label: 'Upcoming', count: batches.filter(b => b.status === 'upcoming').length },
    { value: 'completed', label: 'Completed', count: batches.filter(b => b.status === 'completed').length }
  ];

  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-600">Manage and track all your learning batches</p>
      </div>

      {showFilter && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {filterButtons.map(btn => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-200 text-sm whitespace-nowrap flex items-center gap-2 border ${
                filter === btn.value
                  ? 'bg-indigo-500 text-white border-indigo-500 shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              {btn.label}
              <span className={`px-2 py-0.5 rounded-lg text-xs font-semibold ${
                filter === btn.value ? 'bg-white bg-opacity-20' : 'bg-gray-100'
              }`}>
                {btn.count}
              </span>
            </button>
          ))}
        </div>
      )}

      {filteredBatches.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {filteredBatches.map((batch, index) => (
            <BatchCard key={batch.id || index} {...batch} />
          ))}
        </div>
      ) : (
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-10 h-10 text-indigo-300" />
          </div>
          <p className="text-gray-600 text-lg font-medium mb-2">{emptyMessage}</p>
          <p className="text-gray-500 text-sm">Try adjusting your filters or check back later</p>
        </div>
      )}
    </div>
  );
};

// Demo Data
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
    students: 22,
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