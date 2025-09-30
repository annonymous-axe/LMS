import { BatchCard, BatchList } from './BatchCard';
import batches from '../../data/batches.json';
import { useAuth } from '../../contexts/AuthContext';

// Demo Component
const BatchListDemo = () => {

  const {user} = useAuth();
  const sampleBatches = batches.filter(
    (batch) => user.id == batch.userId
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
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