import React, { useState, useRef } from 'react';
import { Calendar, Users, BookOpen, Clock, Eye, Play, UserPlus, TrendingUp, GraduationCap, Sparkles, ChevronRight, X, Plus, Save } from 'lucide-react';

/**
 * CreateBatchModal Component - Berry Style
 * Animated, user-friendly batch creation form
 */
export const CreateBatchModal = ({ 
  isOpen, 
  onClose, 
  onSubmit,
  initialData = {}
}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    course: initialData.course || '',
    startDate: initialData.startDate || '',
    endDate: initialData.endDate || '',
    students: initialData.students || 0,
    maxStudents: initialData.maxStudents || '',
    instructor: initialData.instructor || '',
    schedule: initialData.schedule || '',
    status: initialData.status || 'upcoming'
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const steps = [
    {
      title: 'Batch Info',
      icon: BookOpen,
      fields: ['name', 'course']
    },
    {
      title: 'Schedule',
      icon: Calendar,
      fields: ['startDate', 'endDate', 'schedule']
    },
    {
      title: 'Details',
      icon: Users,
      fields: ['instructor', 'maxStudents', 'status']
    }
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    const fieldsToValidate = steps[step].fields;

    fieldsToValidate.forEach(field => {
      if (!formData[field] && field !== 'schedule') {
        newErrors[field] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      onSubmit(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  const CurrentStepIcon = steps[currentStep].icon;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn backdrop-blur-sm"
      onClick={onClose}
      style={{ padding: '2rem' }}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-auto animate-slideUp"
        style={{ 
          maxHeight: 'calc(100vh - 8rem)',
          margin: '4rem auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <Plus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Create New Batch</h3>
                <p className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg hover:bg-white hover:bg-opacity-50 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 flex gap-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                  index <= currentStep
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 20rem)' }}>
          <div className="p-6">
            {/* Step Indicator */}
            <div className="mb-6 flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
              <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                <CurrentStepIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{steps[currentStep].title}</h4>
                <p className="text-sm text-gray-600">Fill in the {steps[currentStep].title.toLowerCase()} details</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 0: Batch Info */}
              {currentStep === 0 && (
                <div className="space-y-4 animate-slideIn">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-500" />
                      Batch Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                      } focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none`}
                      placeholder="e.g., Web Development Bootcamp"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 animate-shake">{errors.name}</p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-purple-500" />
                      Course Name *
                    </label>
                    <input
                      type="text"
                      value={formData.course}
                      onChange={(e) => handleChange('course', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.course ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                      } focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none`}
                      placeholder="e.g., Full Stack Development"
                    />
                    {errors.course && (
                      <p className="mt-1 text-sm text-red-600 animate-shake">{errors.course}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 1: Schedule */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-slideIn">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-indigo-500" />
                        Start Date *
                      </label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleChange('startDate', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.startDate ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                        } focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none`}
                      />
                      {errors.startDate && (
                        <p className="mt-1 text-sm text-red-600 animate-shake">{errors.startDate}</p>
                      )}
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-500" />
                        End Date *
                      </label>
                      <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => handleChange('endDate', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.endDate ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                        } focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none`}
                      />
                      {errors.endDate && (
                        <p className="mt-1 text-sm text-red-600 animate-shake">{errors.endDate}</p>
                      )}
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500" />
                      Schedule
                    </label>
                    <input
                      type="text"
                      value={formData.schedule}
                      onChange={(e) => handleChange('schedule', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                      placeholder="e.g., Mon, Wed, Fri - 6 PM"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Details */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-slideIn">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-indigo-500" />
                      Instructor Name *
                    </label>
                    <input
                      type="text"
                      value={formData.instructor}
                      onChange={(e) => handleChange('instructor', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.instructor ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                      } focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none`}
                      placeholder="e.g., John Doe"
                    />
                    {errors.instructor && (
                      <p className="mt-1 text-sm text-red-600 animate-shake">{errors.instructor}</p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <UserPlus className="w-4 h-4 text-teal-500" />
                      Maximum Students *
                    </label>
                    <input
                      type="number"
                      value={formData.maxStudents}
                      onChange={(e) => handleChange('maxStudents', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.maxStudents ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                      } focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none`}
                      placeholder="e.g., 30"
                      min="1"
                    />
                    {errors.maxStudents && (
                      <p className="mt-1 text-sm text-red-600 animate-shake">{errors.maxStudents}</p>
                    )}
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      Status *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['upcoming', 'ongoing', 'completed'].map((statusOption) => (
                        <button
                          key={statusOption}
                          type="button"
                          onClick={() => handleChange('status', statusOption)}
                          className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 capitalize font-medium ${
                            formData.status === statusOption
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'
                          }`}
                        >
                          {statusOption}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
            }`}
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Previous
          </button>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-all duration-200"
            >
              Cancel
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Create Batch
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        .animate-shake {
          animation: shake 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};