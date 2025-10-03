import { BatchCard, BatchList } from './BatchCard';
import batches from '../../data/batches.json';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@mui/material';
import { CreateBatchForm } from './CreateBatchForm';
import { useState } from 'react';

// Demo Component
const BatchListDemo = () => {

  const {user} = useAuth();
  const sampleBatches = batches.filter(
    (batch) => user.id == batch.userId
  );

  const [showBatchForm, setShowBatchForm] = useState(false);  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {user.role === 'admin' && 
        <div className="flex items-center mb-6">
          <Button variant='outlined' color='primary' onClick={() => setShowBatchForm(true)}>+ Add Batch</Button>
        </div>
      }      
      <div className="max-w-7xl mx-auto">
        <BatchList batches={sampleBatches} />
      </div>

      <CreateBatchForm isOpen={showBatchForm} onClose={() => setShowBatchForm(false)}/>      
    </div>
  );
};

export default BatchListDemo;