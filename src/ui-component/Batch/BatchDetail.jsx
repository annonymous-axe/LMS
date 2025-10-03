import { CheckCircle } from 'lucide-react';
import { Modal } from '../Modal.jsx';
import batches from '../../data/batches.json';
import { Button } from '@mui/material';

export default function OpenBatchDetail({ largeModalOpen, setLargeModalOpen, batchId }){

    const batch = batches.find(
        (batch) => batch.id === batchId
    );

    return (
        <Modal
          isOpen={largeModalOpen}
          onClose={() => setLargeModalOpen(false)}
          title="Batch Details"
          size="lg"
        >
          <div className="space-y-5">
            <div className="flex gap-6">
              <div className="text-6xl">🎨</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{batch.name}</h3>
                <p className="text-gray-600 mb-4">{batch.course}</p>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>⏱️ {batch.duration}</span>
                  <span>👥 1,250 students</span>
                  <span>⭐ 4.8 rating</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">What you'll learn:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1" size={16} />
                  <span className="text-gray-700">Build full-stack web applications from scratch</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1" size={16} />
                  <span className="text-gray-700">Master React, Node.js, Express, and MongoDB</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1" size={16} />
                  <span className="text-gray-700">Deploy applications to production</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">

                {(batch.status === 'ongoing') &&
                    <Button className="flex-1 px-6 py-3" color='warning' variant='outlined'>
                        Join
                    </Button>
                }
                {(batch.status === 'upcoming') &&
                    <Button className="flex-1 px-6 py-3" color='primary' variant='outlined'>
                        Enroll Now
                    </Button>
                }
                {(batch.status === 'completed') &&
                    <Button className="flex-1 px-6 py-3" color='success' variant='outlined'>
                        Completed
                    </Button>
                }                                
              <button 
                onClick={() => setLargeModalOpen(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
    );
}