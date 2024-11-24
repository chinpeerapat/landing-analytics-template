import React from 'react';
import Image from 'next/image';

const teamMembers = [
  { name: 'John Doe', position: 'CEO & Founder', image: '/images/john-doe.jpg' },
  { name: 'Jane Smith', position: 'CTO', image: '/images/jane-smith.jpg' },
  { name: 'Mike Johnson', position: 'Head of Product', image: '/images/mike-johnson.jpg' },
  { name: 'Emily Brown', position: 'Lead Designer', image: '/images/emily-brown.jpg' },
];

export default function AboutPage() {
  return (
    <div className="page-content">
      <header className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800">About Analytics Pro</h1>
          <p className="mt-4 text-xl text-gray-600">Empowering businesses with data-driven insights</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="mb-6 text-gray-600">
              At Analytics Pro, our mission is to democratize data analytics, making powerful insights accessible to businesses of all sizes. We believe that data-driven decision-making should be within reach for everyone, not just large corporations with extensive resources.
            </p>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-gray-600">
              We envision a future where every business, regardless of its size or industry, can harness the power of advanced analytics to drive growth, innovation, and success. Our goal is to be at the forefront of this data revolution, continuously pushing the boundaries of what&apos;s possible in analytics technology.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Team</h2>
            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image src={member.image} alt={member.name} width={128} height={128} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-medium text-gray-800">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Innovation', 'Integrity', 'Customer-Centric'].map((value, index) => (
              <div key={index} className="border p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value}</h3>
                <p className="text-gray-600">We are committed to {value.toLowerCase()} in everything we do, from product development to customer support.</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
