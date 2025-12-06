import { Clock } from 'lucide-react';

export function Schedule() {
  const scheduleDay1 = [
    { time: '01:00 PM', event: 'Registration & Check-in' },
    { time: '02:00 PM', event: 'Opening Ceremony & Welcome Address' },
    { time: '03:00 PM', event: 'Hackathon Begins! 🚀' },
    { time: '05:00 PM', event: 'Evening Snacks' },
    { time: '07:00 PM', event: 'Mentor Check-in Session' },
    { time: '09:00 PM', event: 'Dinner' },
    { time: '12:00 AM', event: 'Midnight Snacks & Energy Drinks' },
  ];

  const scheduleDay2 = [
    { time: '08:00 AM', event: 'Breakfast' },
    { time: '10:00 AM', event: 'Final Mentor Round' },
    { time: '12:00 PM', event: 'Lunch' },
    { time: '01:00 PM', event: 'Code Freeze - Hackathon Ends' },
    { time: '01:30 PM', event: 'Project Submission Deadline' },
    { time: '02:00 PM', event: 'Presentations & Judging Begins' },
    { time: '05:00 PM', event: 'Results & Prize Distribution' },
    { time: '06:00 PM', event: 'Closing Ceremony' },
  ];

  const ScheduleDay = ({ title, schedule, gradient }: { 
    title: string; 
    schedule: typeof scheduleDay1;
    gradient: string;
  }) => (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className={`inline-block px-6 py-2 rounded-full mb-6 ${gradient}`}>
        <h3 className="text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex items-center gap-2 min-w-[120px] text-purple-600">
              <Clock className="w-4 h-4" />
              <span>{item.time}</span>
            </div>
            <div className="flex-1 text-gray-700">
              {item.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600">
            A jam-packed 24 hours of coding, learning, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScheduleDay 
            title="Day 1 - January 7, 2026"
            schedule={scheduleDay1}
            gradient="bg-gradient-to-r from-purple-600 to-purple-500"
          />
          <ScheduleDay 
            title="Day 2 - January 8, 2026"
            schedule={scheduleDay2}
            gradient="bg-gradient-to-r from-blue-600 to-blue-500"
          />
        </div>
      </div>
    </section>
  );
}