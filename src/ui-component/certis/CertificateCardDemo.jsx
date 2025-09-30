import React from 'react';
import { Download, Share2, Award, CheckCircle } from 'lucide-react';
import { CertificateCard, CertificateGallery } from './CertificateCard';
import certies from '../../data/certies.json';
import { useAuth } from '../../contexts/AuthContext';

const CertificateDemo = () => {
  const [showPreview, setShowPreview] = React.useState(false);

  const {user} = useAuth();

  const sampleCertificates = certies.filter(
    (cer) => (cer.userId === user.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Toggle Preview Button */}
        {/* <div className="mb-6">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {showPreview ? 'Show Card View' : 'Show Preview View'}
          </button>
        </div> */}
        {(sampleCertificates != []) ?
          (  <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Certificate Gallery</h2>
              <CertificateGallery
                certificates={sampleCertificates}
                columns={3}
              />
            </div>):

            (<div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Certificate Gallery</h2>
              <CertificateGallery
                certificates={[]}
                emptyMessage="You haven't earned any certificates yet"
              />
            </div>)
          
        }
      </div>
    </div>
  );
};

export default CertificateDemo;