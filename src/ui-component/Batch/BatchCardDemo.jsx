import { BatchCard, BatchList } from './BatchCard_v4';
import demoBatches from '../../data/batches.json';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@mui/material';
import { CreateBatchForm } from './CreateBatchForm';
import { useState } from 'react';
import { CreateBatchModal } from '../Modals/BatchModal';
import { Plus } from 'lucide-react';

// Demo Component
const BatchListDemo = () => {

  const {user} = useAuth();
  const sampleBatches = demoBatches.filter(
    (batch) => user.id == batch.userId
  );

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [batches, setBatches] = useState(sampleBatches);

  const handleCreateBatch = (newBatch) => {
    const batch = {
      ...newBatch,
      id: batches.length + 1,
      students: 0
    };
    setBatches([...batches, batch]);
  };  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Create Button */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Batch Management</h1>
          </div>
          <button
            onClick={() => setCreateModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Batch
          </button>
        </div>

        <BatchList batches={batches} />

        <CreateBatchModal
          isOpen={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateBatch}
        />
      </div>
    </div>
  );
};

export default BatchListDemo;