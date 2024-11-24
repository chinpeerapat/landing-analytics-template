import React from 'react';

export default function ContactPage() {
  return (
    <div className="page-content">
      <header className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">We&apos;re here to help and answer any question you might have</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
            <p className="mb-8 text-gray-600">
              We&apos;d love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Analytics Street, Data City, 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@analyticspro.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
