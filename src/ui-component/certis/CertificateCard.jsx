
import { Download, Share2, Award, CheckCircle, Eye } from 'lucide-react';

// Certificate Card Component - Display earned certificates
export const CertificateCard = ({
  courseName = 'Course Name',
  studentName = 'Student Name',
  issueDate,
  credentialId,
  grade,
  instructor,
  organization = 'LearnHub',
  onDownload,
  onShare,
  variant = 'card', // 'card' or 'preview'
  className = ''
}) => {

  if (variant === 'preview') {
    return (
      <div className={`bg-white border-4 border-yellow-500 rounded-lg p-8 shadow-xl ${className}`}>
        <div className="text-center">
          {/* Header */}
          <div className="mb-6">
            <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Certificate of Completion</h1>
            <p className="text-gray-600">{organization}</p>
          </div>

          {/* Content */}
          <div className="my-8">
            <p className="text-gray-600 mb-2">This is to certify that</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{studentName}</h2>
            <p className="text-gray-600 mb-2">has successfully completed</p>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">{courseName}</h3>
            
            {grade && (
              <div className="inline-block bg-yellow-100 px-6 py-3 rounded-lg mb-6">
                <p className="text-sm text-gray-600">Grade Achieved</p>
                <p className="text-3xl font-bold text-yellow-700">{grade}</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="text-gray-500">Issue Date</p>
                <p className="font-semibold text-gray-800">{issueDate}</p>
              </div>
              {instructor && (
                <div>
                  <p className="text-gray-500">Instructor</p>
                  <p className="font-semibold text-gray-800">{instructor}</p>
                </div>
              )}
              <div>
                <p className="text-gray-500">Credential ID</p>
                <p className="font-semibold text-gray-800">{credentialId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${className}`}>
      {/* Header with Icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 p-3 rounded-lg">
            <Award className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{courseName}</h3>
            <p className="text-sm text-gray-600">{organization}</p>
          </div>
        </div>
        <CheckCircle className="text-green-600" size={24} />
      </div>

      {/* Certificate Details */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Student Name</span>
          <span className="font-semibold text-gray-800">{studentName}</span>
        </div>
        
        {grade && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Grade</span>
            <span className="font-bold text-yellow-700 text-lg">{grade}</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Issue Date</span>
          <span className="font-semibold text-gray-800">{issueDate}</span>
        </div>

        {instructor && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Instructor</span>
            <span className="font-semibold text-gray-800">{instructor}</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Credential ID</span>
          <span className="font-mono text-xs text-gray-600">{credentialId}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t border-yellow-200">      
        {onDownload && (
          <button
            onClick={onDownload}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium"
          >
            <Download size={18} />
            Download
          </button>
        )}
        {onShare && (
          <button
            onClick={onShare}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-yellow-600 text-yellow-700 rounded-lg hover:bg-yellow-50 transition-colors font-medium"
          >
            <Share2 size={18} />
            Share
          </button>
        )}
      </div>
    </div>
  );
};

export const CertificateGallery = ({
  certificates = [],
  columns = 3,
  emptyMessage = 'No certificates earned yet',
  className = ''
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={className}>
      {certificates.length > 0 ? (
        <div className={`grid ${gridCols[columns] || gridCols[3]} gap-6`}>
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
          <Award className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-lg mb-2">{emptyMessage}</p>
          <p className="text-gray-500 text-sm">Complete courses to earn certificates</p>
        </div>
      )}
    </div>
  );
};

