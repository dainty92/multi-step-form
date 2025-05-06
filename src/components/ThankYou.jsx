import React from "react";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-28 px-2">
      <img src="/images/icon-thank-you.svg" alt="Thank you" className="w-16 h-16" />
      <h2 className="text-2xl font-bold text-marine">Thank you!</h2>
      <p className="text-coolGray max-w-md">
        Thanks for confirming your subscription! We hope you have fun using our platform. 
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
