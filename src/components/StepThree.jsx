import { useState } from "react";

const StepThree = ({ billing, selectedAddOns, setSelectedAddOns, nextStep, prevStep }) => {
  const addons = [
    {
      id: "online-service",
      title: "Online service",
      desc: "Access to multiplayer games",
      price: { monthly: "+$1/mo", yearly: "+$10/yr" },
    },
    {
      id: "larger-storage",
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: { monthly: "+$2/mo", yearly: "+$20/yr" },
    },
    {
      id: "custom-profile",
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: { monthly: "+$2/mo", yearly: "+$20/yr" },
    },
  ];

  const toggleAddOn = (id) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  return (
    <div className="flex flex-col sm:gap-8 gap-4 sm:w-full h-full">
      <div>
        <h2 className="text-2xl text-marine font-bold mb-2">Pick add-ons</h2>
        <p className="text-coolGray">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="flex flex-col gap-4">
        {addons.map((addon) => (
          <label
            key={addon.id}
            className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer transition
              ${selectedAddOns.includes(addon.id) ? "border-marine bg-alabaster" : "border-lightGray hover:border-marine"}
            `}
          >
            <div className="flex items-start gap-4">
                <div border-lightGray>
                <input
                type="checkbox"
                checked={selectedAddOns.includes(addon.id)}
                onChange={() => toggleAddOn(addon.id)}
                className="mt-1 w-4 h-4 accent-purplish border-lightGray cursor-pointer"
              />
                </div>
              
              <div>
                <p className="text-marine font-medium">{addon.title}</p>
                <p className="text-coolGray text-sm">{addon.desc}</p>
              </div>
            </div>
            <p className="text-purplish font-medium">{addon.price[billing]}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StepThree;
