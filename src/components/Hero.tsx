import { Calendar, MapPin } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function Hero() {
  const scrollToRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1638202677704-b74690bb8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2Rpbmd8ZW58MXx8fHwxNzY1MDAzODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hackathon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/85 to-indigo-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
          <span className="text-sm uppercase tracking-wider">CMR Technical Campus Presents</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Devnovate 2026
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Join us for an extraordinary 24-hour hackathon where innovation meets creativity
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <Calendar className="w-5 h-5" />
            <span>January 7-8, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5" />
            <span>CMR Technical Campus</span>
          </div>
        </div>

        <div className="mb-12">
          <CountdownTimer />
        </div>

        <a
          href="#register"
          onClick={scrollToRegister}
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg transition-all hover:shadow-2xl hover:scale-105"
        >
          Register Now - ₹500 per team
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
    </section>
  );
}