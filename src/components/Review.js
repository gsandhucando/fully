import React from "react";

const Review = () => {
  return (
    <div className="review-container">
      <div className="review-company">
        <div className="review-list">
          <h1>"Best Overall Standing Desk"</h1>
          <img
            className="review-1"
            src="/images/content/reviewslogo.png"
            alt="logo"
          />
        </div>
        <div className="review-list">
          <h1>"Editor's Choice/Best Adjustable Standing Desk"</h1>
          <img
            className="review-2"
            src="/images/content/gadgetreviewlogo.png"
            alt="logo"
          />
        </div>
        <div className="review-list">
          <h1>
            "Complete package of reasonable price, beautiful design, and
            stability"
          </h1>
          <img
            className="review-3"
            src="/images/content/business_insider.png"
            alt="logo"
          />
        </div>
        <a href="#-">Read more press</a>
      </div>
      <div className="review-customer">
        <div className="stars">
          <img src="/images/content/star.png" alt="stars" />
          <h1>Average customer review</h1>
        </div>
        <p>
          The product is perfect!!! The customer service makes you feel that you
          are talking to a friend who understands exactly what you need. Very
          attentive and professional Congratulations I will recommend you
          everywhere. - Ester B.
        </p>
        <p>
          Love, love, love my new standing desk! It arrived VERY quickly, was
          easy to put together --- totally fantastic experience. - Anne H.
        </p>
        <p>
          My last desk was wobbly and ugly. My new Jarvis is beautiful,
          well-designed, and solid at every height. Could it be love? - Patrick
          R.
        </p>
        <a href="#-">Read more customer reviews</a>
      </div>
    </div>
  );
};

export default Review;
