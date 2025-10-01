import { Calendar, Clock } from 'lucide-react';

export default function UpcomingEvents(){

    const upcomingEvents = [
        {
        id: 1,
        title: 'React Workshop',
        date: 'Feb 15, 2024',
        time: '2:00 PM',
        type: 'workshop'
        },
        {
        id: 2,
        title: 'Assignment Due: Portfolio Project',
        date: 'Feb 18, 2024',
        time: '11:59 PM',
        type: 'deadline'
        },
        {
        id: 3,
        title: 'Monthly Review Meeting',
        date: 'Feb 20, 2024',
        time: '10:00 AM',
        type: 'meeting'
        }
    ];    

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="p-3 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                <h3 className="text-sm font-medium text-gray-900 mb-1">{event.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date}</span>
                  <Clock className="w-3 h-3 ml-2" />
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>        
    );
}