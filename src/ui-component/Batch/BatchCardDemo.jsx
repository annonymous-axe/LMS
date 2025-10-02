import { BatchCard, BatchList } from './BatchCard';
import batches from '../../data/batches.json';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@mui/material';

// Demo Component
const BatchListDemo = () => {

  const {user} = useAuth();
  const sampleBatches = batches.filter(
    (batch) => user.id == batch.userId
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {user.role === 'admin' && 
        <div className="flex items-center mb-6">
          <Button variant='outlined' color='primary'>+ Add Batch</Button>
        </div>
      }
      <div className="max-w-7xl mx-auto">
        
        {/* Batch List with Filter */}
        <BatchList 
          batches={sampleBatches}
          title="All Batches"
          showFilter={true}
        />
      </div>
    </div>
  );
};

export default BatchListDemo;