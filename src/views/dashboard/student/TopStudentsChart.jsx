
export default function TopScoringChart(){

    const recentActivities = [
        {
        id: 1,
        type: 'enrollment',
        message: 'Bansari Pethani',
        time: '100%',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        },
        {
        id: 2,
        type: 'completion',
        message: 'Kamlesh Baviksar',
        time: '97%',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        },
        {
        id: 3,
        type: 'assignment',
        message: 'Sweta Kunadiya',
        time: '90%',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        }
    ];    

    return(
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold text-gray-900">High Scoring Batchmates</h2>
                {/* <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button> */}
            </div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-md font-semibold text-gray-600">According to assignments</h2>
            </div>
            <div className="space-y-4">
            {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <img
                    src={activity.avatar}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                {/* <div className="w-2 h-2 bg-blue-500 rounded-full"></div> */}
                </div>
            ))}
            </div>
        </div>
    );
}