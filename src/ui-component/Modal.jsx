import React, { useState } from 'react';
import { X, Plus, Trash2, Save, Menu } from 'lucide-react';
import { Box } from '@mui/material';

/**
 * CenteredModal Component - Berry Template Style
 * Stays centered with proper margins, grows dynamically
 */
export const Modal = ({
  isOpen,
  onClose,
  title = 'Modal Title',
  children,
  footer,
  maxWidth = 'max-w-2xl',
  className = ''
}) => {
  if (!isOpen) return null;

  return (
    <Box>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-fadeIn"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={onClose}
      >
        <div 
          className={`
            bg-white rounded-lg shadow-2xl w-full ${maxWidth}
            max-h-[calc(100vh-3rem)] md:max-h-[calc(100vh-6rem)]
            flex flex-col animate-slideUp
            ${className}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200 flex-shrink-0">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-5">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="flex-shrink-0 p-5 border-t border-gray-200 bg-gray-50">
              {footer}
            </div>
          )}
        </div>

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
    </Box>
  );
};