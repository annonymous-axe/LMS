import React from 'react';

import {CourseCard} from '../course/CourseCard';

const CourseCardDemo = () => {
  const demoData = {
    enrolled: {
      thumbnail: '🎨',
      title: 'Web Development Mastery',
      instructor: 'John Doe',
      progress: 65,
      duration: '12 weeks',
      nextLesson: 'React Hooks Advanced',
      actionLabel: 'Continue Learning'
    },
    purchase: {
      thumbnail: '📱',
      title: 'Mobile App Development with React Native',
      instructor: 'Jane Smith',
      price: 4999,
      rating: 4.8,
      students: 1250,
      actionLabel: 'Enroll Now'
    },
    default: {
      thumbnail: '💻',
      title: 'Python Programming Fundamentals',
      instructor: 'Mike Johnson',
      actionLabel: 'View Details'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Course Card Component</h1>
        <p className="text-gray-600 mb-8">Reusable card component with multiple variants</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Enrolled Course</h2>
            <CourseCard 
              thumbnail={demoData.enrolled.thumbnail}
              title={demoData.enrolled.title}
              instructor={demoData.enrolled.instructor}
              progress={demoData.enrolled.progress}
              duration={demoData.enrolled.duration}
              nextLesson={demoData.enrolled.nextLesson}
              actionLabel={demoData.enrolled.actionLabel}
              variant="enrolled"
              onAction={() => alert('Continue Learning clicked!')}
            />
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Purchase Course</h2>
            <CourseCard 
              thumbnail={demoData.purchase.thumbnail}
              title={demoData.purchase.title}
              instructor={demoData.purchase.instructor}
              price={demoData.purchase.price}
              rating={demoData.purchase.rating}
              students={demoData.purchase.students}
              actionLabel={demoData.purchase.actionLabel}
              variant="purchase"
              onAction={() => alert('Enroll Now clicked!')}
            />
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Default Course</h2>
            <CourseCard 
              thumbnail={demoData.default.thumbnail}
              title={demoData.default.title}
              instructor={demoData.default.instructor}
              actionLabel={demoData.default.actionLabel}
              variant="default"
              onAction={() => alert('View Details clicked!')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardDemo;