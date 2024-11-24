import React from 'react';

// Extend the Window interface to include the plausible function
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props: { [key: string]: string } }) => void;
  }
}

const pricingPlans = [
  {
    name: "Basic",
    price: 29.99,
    features: [
      "Real-time analytics dashboard",
      "Up to 10,000 monthly active users",
      "Data retention for 3 months",
      "Email support",
      "Basic integrations"
    ]
  },
  {
    name: "Pro",
    price: 79.99,
    features: [
      "All Basic features",
      "Up to 50,000 monthly active users",
      "Data retention for 12 months",
      "Priority email and chat support",
      "Advanced integrations",
      "Custom event tracking"
    ]
  },
  {
    name: "Enterprise",
    price: 199.99,
    features: [
      "All Pro features",
      "Unlimited monthly active users",
      "Unlimited data retention",
      "24/7 phone, email, and chat support",
      "Full API access",
      "Dedicated account manager",
      "Custom feature development"
    ]
  }
];

export default function PricingPage() {
  const handleChoosePlan = (planName: string) => {
    // Track the custom event with Plausible
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('Choose Plan', { props: { plan: planName } });
    }
    // Add your logic for what happens when a plan is chosen
    console.log(`${planName} plan chosen`);
  };

  return (
    <div className="page-content">
      <header className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Choose Your Plan</h1>
          <p className="mt-4 text-xl text-gray-600 text-center">Flexible pricing options to fit your analytics needs</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">{plan.name}</h2>
              <p className="text-3xl font-bold mb-6 text-gray-700">${plan.price}<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2 flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold"
                onClick={() => handleChoosePlan(plan.name)}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
