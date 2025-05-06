import React from "react";

const StepFour = ({ selectedPlan, selectedAddOns, goBack, confirm, handleChangePlan }) => {
  const planPrice = selectedPlan.price;
  const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
  const total = planPrice + addOnsTotal;

  return (
    <div className="flex flex-col gap-2 sm:w-full h-full px-4">
      <div>
        <h2 className="text-2xl font-bold text-marine mb-2">Finishing up</h2>
        <p className="text-coolGray mb-4">
            Double-check everything looks OK before confirming.
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-alabaster p-6 rounded-lg">
        <div className="flex justify-between items-center border-b border-lightGray pb-4">
          <div>
            <p className="font-medium text-marine">
              {selectedPlan.name} ({selectedPlan.billing})
            </p>
            <button
              className="text-coolGray underline hover:text-purplish text-sm"
              onClick={handleChangePlan}
            >
              Change
            </button>
          </div>
          <p className="font-bold text-marine">${planPrice}/{selectedPlan.billing === "yearly" ? "yr" : "mo"}</p>
        </div>

        {/* Add-ons */}
        <div className="pt-4 space-y-2">
          {selectedAddOns.map((addon) => (
            <div key={addon.id} className="flex justify-between text-sm">
              <p className="text-coolGray">{addon.name}</p>
              <p className="text-marine">+${addon.price}/{selectedPlan.billing === "yearly" ? "yr" : "mo"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-4 px-5">
        <p className="text-sm text-coolGray">Total (per month)</p>
        <p className="text-lg font-bold text-purplish">+${total}/{selectedPlan.billing === "yearly" ? "yr" : "mo"}</p>
      </div>
    </div>
  );
};

export default StepFour;
