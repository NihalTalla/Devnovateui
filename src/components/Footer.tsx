export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">D</span>
              </div>
              <span className="text-xl">Devnovate</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering innovation and creativity through technology. 
              Join us for an unforgettable 24-hour hackathon experience.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#schedule" className="block text-gray-400 hover:text-white transition-colors">Schedule</a>
              <a href="#register" className="block text-gray-400 hover:text-white transition-colors">Register</a>
              <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Important Dates</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Registration Deadline: Jan 5, 2026</p>
              <p>Early Bird Deadline: Dec 25, 2025</p>
              <p>Hackathon: Jan 7-8, 2026</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 Devnovate - CMR Technical Campus. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}