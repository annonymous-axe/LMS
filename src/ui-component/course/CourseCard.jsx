import React from 'react';

// Course Card Component - Reusable card for displaying courses
export const CourseCard = ({ 
  thumbnail = '📚', 
  title = 'Course Title', 
  instructor = 'Instructor Name',
  price,
  rating,
  students,
  progress,
  duration,
  nextLesson,
  onAction,
  actionLabel = 'View',
  variant = 'default' // 'default', 'enrolled', 'purchase'
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 bg-white">
      {/* Thumbnail */}
      <div className="text-6xl mb-4 text-center">{thumbnail}</div>
      
      {/* Title and Instructor */}
      <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">By {instructor}</p>
      
      {/* Variant-specific content */}
      {variant === 'enrolled' && progress !== undefined && (
        <div className="mb-4">
          {nextLesson && (
            <p className="text-sm text-gray-500 mb-2">Next: {nextLesson}</p>
          )}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{progress}% Complete</span>
            {duration && <span className="text-gray-500">{duration}</span>}
          </div>
        </div>
      )}
      
      {variant === 'purchase' && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="font-semibold text-gray-800">{rating}</span>
            <span className="text-sm text-gray-500">({students} students)</span>
          </div>
          {price !== undefined && (
            <div className="text-2xl font-bold text-gray-800 mb-3">
              ₹{price.toLocaleString('en-IN')}
            </div>
          )}
        </div>
      )}
      
      {/* Action Button */}
      <button 
        onClick={onAction}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          variant === 'purchase' 
            ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
        }`}
      >
        {actionLabel}
      </button>
    </div>
  );
};