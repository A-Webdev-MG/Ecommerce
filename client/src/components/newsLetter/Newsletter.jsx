import { Send } from '@material-ui/icons';
import React from 'react';
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
        <h1 className="newsletter-title">Newsletter</h1>
        <p className="newsletter-desc">Get timely updates from your favorite products.</p>
        <div className="newsletterInput-container">
            <input type="email" placeholder="Your email" />
            <button>
                <Send />
            </button>
        </div>
    </div>
  )
}

export default Newsletter