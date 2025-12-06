import { CreditCard, CheckCircle, QrCode } from 'lucide-react';

export function Registration() {
  return (
    <section id="register" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Register Now
          </h2>
          <p className="text-xl text-gray-600">
            Secure your spot at Devnovate 2026
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Registration Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="mb-6 text-purple-600">Registration Details</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Registration Fee: <span className="text-purple-600">₹500 per team</span></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Team size: Exactly 3 members</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Early bird discount: Register before Dec 25</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <h4 className="text-purple-600 mb-4">Registration Form</h4>
              <p className="text-gray-600 mb-4">
                Complete the form below with your team details, project preferences, and payment confirmation.
              </p>
            </div>

            {/* Embedded Google Form */}
            <div className="rounded-lg overflow-hidden border-2 border-purple-200">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfXpM4eFG0Ly9l9P_CQwCPOq7s529GXOh6SvUgQqI3S_1dIXg/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Devnovate Registration Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-purple-600" />
                <h3 className="text-purple-600">Payment Instructions</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 text-gray-800">Payment Methods</h4>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">UPI ID</p>
                      <p className="text-purple-600">devnovate@upi</p>
                      <p className="text-xs text-gray-500 mt-2">* Replace with actual UPI ID</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Account Details</p>
                      <p className="text-sm">Account: XXXX XXXX XXXX</p>
                      <p className="text-sm">IFSC: XXXX0000XXX</p>
                      <p className="text-xs text-gray-500 mt-2">* Replace with actual bank details</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <QrCode className="w-5 h-5 text-purple-600" />
                    <h4 className="text-gray-800">Scan to Pay</h4>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="w-48 h-48 bg-white rounded-lg mx-auto flex items-center justify-center">
                      <p className="text-gray-400 text-sm">QR Code Placeholder</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Add your payment QR code here</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-lg p-8">
              <h4 className="mb-4">After Payment</h4>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">1</span>
                  <span>Take a screenshot of your payment confirmation</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">2</span>
                  <span>Upload it in the registration form</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">3</span>
                  <span>Wait for confirmation email within 24 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">4</span>
                  <span>You're all set for the hackathon!</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}