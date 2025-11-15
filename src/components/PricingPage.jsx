import React, { useEffect } from 'react';
import './PricingPage.css';
import { useInView } from 'react-intersection-observer';

const PricingPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className="pricing-container bg-gradient-to-b from-gray-950 to-gray-900" ref={ref}>
      <div className="pricing-header">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" role="heading" aria-level="1">Pricing Plans</h1>
        <p className="text-lg text-gray-400 mb-8" role="description">Choose the perfect plan for your needs</p>
      </div>

      <div className="pricing-grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 pb-20" aria-label="Pricing plans grid">
        {/* Basic Plan */}
        <div className="pricing-card bg-white/5 backdrop-blur-md border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300">
          <div className="card-header bg-blue-500/10 border-b border-blue-500/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-4" role="heading" aria-level="2">Basic</h3>
            <div className="price">
              <span className="dollar">₹</span>1999<span className="period">/mo</span>
            </div>
          </div>
          <div className="features p-6">
            <ul>
              <li><i className="fas fa-check"></i> 5 Websites</li>
              <li><i className="fas fa-check"></i> Basic Mobile App Support</li>
              <li><i className="fas fa-check"></i> Basic SEO Optimization</li>
              <li><i className="fas fa-check"></i> 1 Developer</li>
            </ul>
          </div>
          <button className="select-button w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">Select Plan</button>
        </div>

        {/* Professional Plan */}
        <div className="pricing-card featured bg-white/10 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
          <div className="card-header bg-blue-500/10 border-b border-blue-500/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-4" role="heading" aria-level="2">Professional</h3>
            <div className="price">
              <span className="dollar">₹</span>3999<span className="period">/mo</span>
            </div>
            <span className="featured-badge">Most Popular</span>
          </div>
          <div className="features p-6">
            <ul>
              <li><i className="fas fa-check"></i> 20 Websites</li>
              <li><i className="fas fa-check"></i> Full Mobile App Development</li>
              <li><i className="fas fa-check"></i> Advanced SEO</li>
              <li><i className="fas fa-check"></i> 3 Developers</li>
              <li><i className="fas fa-check"></i> Custom UI/UX Design</li>
            </ul>
          </div>
          <button className="select-button w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">Select Plan</button>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card bg-white/5 backdrop-blur-md border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300">
          <div className="card-header bg-blue-500/10 border-b border-blue-500/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-4" role="heading" aria-level="2">Enterprise</h3>
            <div className="price">
              <span className="dollar">₹</span>7999<span className="period">/mo</span>
            </div>
          </div>
          <div className="features p-6">
            <ul>
              <li><i className="fas fa-check"></i> Unlimited Websites</li>
              <li><i className="fas fa-check"></i> 24/7 Support Team</li>
              <li><i className="fas fa-check"></i> All Features</li>
              <li><i className="fas fa-check"></i> Unlimited Developers</li>
              <li><i className="fas fa-check"></i> Dedicated Project Manager</li>
              <li><i className="fas fa-check"></i> Enterprise API Access</li>
            </ul>
          </div>
          <button className="select-button w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">Contact Us</button>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="text-3xl font-bold text-white mb-8" role="heading" aria-level="1">FAQ</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>What's included in the free trial?</h3>
            <p>Our free trial includes all basic features for 14 days.</p>
          </div>
          <div className="faq-item">
            <h3>Can I upgrade my plan later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div className="faq-item">
            <h3>What happens after the trial?</h3>
            <p>You can choose to continue with a paid plan or cancel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
