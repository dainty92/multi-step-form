import { useState } from "react";

const StepTwo = ({ selectedPlan, setSelectedPlan, billing, setBilling, nextStep, prevStep }) => {
  const plans = [
    {
      id: "arcade",
      label: "Arcade",
      price: { monthly: "$9/mo", yearly: "$90/yr" },
      icon: "/images/icon-arcade.svg",
    },
    {
      id: "advanced",
      label: "Advanced",
      price: { monthly: "$12/mo", yearly: "$120/yr" },
      icon: "/images/icon-advanced.svg",
    },
    {
      id: "pro",
      label: "Pro",
      price: { monthly: "$15/mo", yearly: "$150/yr" },
      icon: "/images/icon-pro.svg",
    },
  ];

  return (
    <div className="flex flex-col sm:gap-8 gap-4 sm:w-full h-full px-4 pb-10 mb-12">
      <div>
        <h2 className="text-2xl text-marine font-bold mb-2">Select your plan</h2>
        <p className="text-coolGray">You have the option of monthly or yearly billing.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedPlan(plan.id)}
            onClick={() => setSelectedPlan(plan.id)}
            className={`border rounded-lg p-4 cursor-pointer flex sm:flex-col flex-row sm:items-start items-center gap-4 transition-all duration-200 ease-in-out 
              ${selectedPlan === plan.id ? "border-marine bg-magnolia" : "border-lightGray hover:border-marine"}
            `}
          >
            <img src={plan.icon} alt={`${plan.label} icon`} className="w-10 h-10" />
            <div>
              <h3 className="font-bold text-marine">{plan.label}</h3>
              <p className="text-coolGray">{plan.price[billing]}</p>
              {billing === "yearly" && (
                <p className="text-marine text-xs font-medium">2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-alabaster p-3 rounded-lg flex items-center justify-center gap-4 text-sm font-medium">
        <span className={billing === "monthly" ? "text-marine" : "text-coolGray"}>Monthly</span>
        <label className="relative inline-block w-10 h-5">
          <input
            type="checkbox"
            className="opacity-0 w-0 h-0 peer"
            checked={billing === "yearly"}
            onChange={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-marine rounded-full peer-checked:bg-marine after:content-[''] after:absolute after:left-1 after:top-1 after:bg-white after:w-3 after:h-3 after:rounded-full after:transition peer-checked:after:translate-x-5"></span>
        </label>
        <span className={billing === "yearly" ? "text-marine" : "text-coolGray"}>Yearly</span>
      </div>
    </div>
  );
};

export default StepTwo;
