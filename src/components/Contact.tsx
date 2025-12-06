import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nihaltalla3430@gmail.com',
      link: 'mailto:nihaltalla3430@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 63058 73430',
      link: 'tel:+916305873430',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'CMR Technical Campus, Kandlakoya, Hyderabad, Telangana',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', link: '#' },
    { icon: Twitter, label: 'Twitter', link: '#' },
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? Reach out to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-purple-600">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-gray-800">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-purple-600">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all group shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
              <h3 className="mb-4">Organizing Team</h3>
              <p className="mb-6">
                This hackathon is organized by the Devnovate team at CMR Technical Campus. 
                We're passionate about bringing together innovators and creating opportunities for learning and growth.
              </p>
              <p className="text-sm opacity-90">
                For sponsorship and partnership opportunities, please contact us at the email above.
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <h3>Venue Location</h3>
              <p className="text-sm opacity-90 mt-2">CMR Technical Campus, Kandlakoya, Hyderabad</p>
            </div>
            <div className="aspect-video bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.566179753864!2d78.32314107516935!3d17.56449398341874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f6e0c1a32ab%3A0x72e5e087675bcef!2sCMR%20Technical%20Campus!5e0!3m2!1sen!2sin!4v1733472000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CMR Technical Campus Location"
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="mb-3 text-purple-600">How to Reach</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🚇 Nearest Metro: Miyapur/JNTU Station</p>
                <p>🚌 Bus: Multiple buses available from major areas</p>
                <p>🚗 Parking: Ample parking space available on campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}