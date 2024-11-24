import React from 'react';

const features = [
  {
    title: "Real-time Analytics",
    description: "Get instant insights with our powerful real-time analytics. Track user behavior, engagement, and conversions as they happen."
  },
  {
    title: "Custom Dashboards",
    description: "Create personalized dashboards tailored to your specific needs. Visualize data in a way that makes sense for your business."
  },
  {
    title: "A/B Testing",
    description: "Optimize your website with built-in A/B testing tools. Experiment with different designs and content to improve conversion rates."
  },
  {
    title: "User Segmentation",
    description: "Segment your audience based on behavior, demographics, or custom criteria. Target your marketing efforts more effectively."
  },
  {
    title: "Integration Ecosystem",
    description: "Connect with your favorite tools seamlessly. Our platform integrates with a wide range of marketing and analytics services."
  },
  {
    title: "Predictive Analytics",
    description: "Leverage machine learning to forecast trends and user behavior. Stay ahead of the curve with data-driven predictions."
  }
];

export default function FeaturesPage() {
  return (
    <div className="page-content">
      <header className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800">Powerful Features for Your Analytics Needs</h1>
          <p className="mt-4 text-xl text-gray-600">Discover how our analytics platform can transform your business insights</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
