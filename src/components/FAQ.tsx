import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the team size requirement?',
      answer: 'Teams must consist of exactly 3 members. Please ensure you have a complete team of 3 when registering.',
    },
    {
      question: 'Who is eligible to participate?',
      answer: 'The hackathon is open to all students from any college or university, as well as working professionals. All skill levels are welcome, from beginners to experienced developers.',
    },
    {
      question: 'What is the registration fee?',
      answer: 'The registration fee is ₹500 per team (not per person). This covers meals, snacks, swag, and access to all hackathon facilities for the full 24 hours.',
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, chargers, any hardware you plan to use, student ID, and lots of enthusiasm! We\'ll provide food, drinks, and a great workspace.',
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Yes! Industry experts and experienced mentors will be available throughout the hackathon to guide you, answer questions, and help troubleshoot technical challenges.',
    },
    {
      question: 'What are the judging criteria?',
      answer: 'Projects will be judged based on: Innovation & Creativity (30%), Technical Implementation (25%), Impact & Usefulness (25%), Presentation & Demo (20%).',
    },
    {
      question: 'What prizes can we win?',
      answer: 'We have exciting cash prizes, tech gadgets, internship opportunities, and certificates. The top 3 teams will receive special recognition and prizes. Details will be announced at the opening ceremony.',
    },
    {
      question: 'Do I need to have a project idea before registering?',
      answer: 'No! You can come with an idea or develop one during the hackathon. We\'ll provide problem statements and themes at the opening ceremony to inspire you.',
    },
    {
      question: 'Is there any accommodation provided?',
      answer: 'The hackathon runs for 24 hours continuously from 1:00 PM Jan 7 to 1:00 PM Jan 8. You can work through the night at the venue. We recommend local participants arrange their own stay if needed.',
    },
    {
      question: 'How do I get the payment confirmation?',
      answer: 'After making the payment via UPI or bank transfer, take a screenshot showing the transaction details and upload it in the registration form. You\'ll receive a confirmation email within 24 hours.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="pr-8 text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="mb-4 text-purple-600">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to our team. We're here to help!
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}