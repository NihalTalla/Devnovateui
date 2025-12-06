import { Target, Users, Trophy, Lightbulb } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Solve real-world problems with cutting-edge technology',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work with talented individuals and build lasting connections',
    },
    {
      icon: Trophy,
      title: 'Exciting Prizes',
      description: 'Win amazing prizes and recognition for your innovative solutions',
    },
    {
      icon: Lightbulb,
      title: 'Learn & Grow',
      description: 'Gain hands-on experience and mentorship from industry experts',
    },
  ];

  const themes = [
    'Healthcare & Wellness',
    'Education Technology',
    'Sustainability & Green Tech',
    'FinTech & Blockchain',
    'AI & Machine Learning',
    'IoT & Smart Solutions',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Devnovate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Devnovate is a premier 24-hour hackathon bringing together the brightest minds to innovate, 
            collaborate, and create solutions that matter. Whether you're a seasoned developer or just 
            starting your tech journey, this is your platform to shine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4 text-purple-600">Hackathon Themes</h3>
              <div className="grid grid-cols-1 gap-3">
                {themes.map((theme, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{theme}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-purple-600">Who Can Participate?</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  ✓ Students from any college or university
                </p>
                <p>
                  ✓ Working professionals passionate about innovation
                </p>
                <p>
                  ✓ Teams of exactly 3 members
                </p>
                <p>
                  ✓ All skill levels welcome - from beginners to experts
                </p>
                <p>
                  ✓ Find teammates or register with your existing team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}