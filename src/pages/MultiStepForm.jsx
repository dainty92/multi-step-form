import { useState } from "react";
import Sidebar from "../components/Sidebar";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import ThankYou from "../components/ThankYou";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (values) => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "This field is required";
    if (!values.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!values.phone.trim()) newErrors.phone = "This field is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined })); // clear error on change
  };

  const nextStep = () => {
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      setStep((prev) => prev + 1);
    } else {
      setErrors(validationErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
      });
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [billing, setBilling] = useState("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  const planPrices = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  };

  const addOnDetails = [
    { id: "online-service", name: "Online Service", price: { monthly: 1, yearly: 10 } },
    { id: "larger-storage", name: "Larger storage", price: { monthly: 2, yearly: 20 } },
    { id: "custom-profile", name: "Customizable profile", price: { monthly: 2, yearly: 20 } },
  ];

  const handleConfirm = () => setConfirmed(true);
  const handleChangePlan = () => setStep(2);

  return (
    <div className="sm:min-h-screen min-h-screen bg-magnolia flex sm:items-center items-start justify-center font-ubuntu">
      <div className="sm:bg-white bg-transparent sm:shadow-md sm:rounded-xl w-full max-w-4xl flex flex-col sm:flex-row sm:overflow-hidden">
        <Sidebar currentStep={step} />
        <div className="flex-1 flex flex-col items-center sm:mt-2 mx-3 px-4 -mt-16 sm:p-6 py-6 sm:pb-6 relative bg-white rounded-xl sm:pt-12 sm:w-full min-w-[350px] sm:min-h-[550px]">
          {confirmed ? (
            <ThankYou />
          ) : (
            <>
              {step === 1 && (
                <>
                  <StepOne
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                    touched={touched}
                    nextStep={nextStep}
                  />
                  <div className="hidden sm:flex justify-end w-full mt-6">
                    <button
                      className="bg-marine text-white px-6 py-2 rounded-md hover:bg-marine hover:bg-opacity-75 transition"
                      onClick={nextStep}
                    >
                      Next Step
                    </button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <StepTwo
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                    billing={billing}
                    setBilling={setBilling}
                  />
                  <div className="hidden sm:flex justify-between w-full mt-6">
                    <button className="text-coolGray hover:text-marine" onClick={prevStep}>
                      Go Back
                    </button>
                    <button className="bg-marine text-white px-6 py-2 rounded-md hover:bg-purplish" onClick={nextStep}>
                      Next Step
                    </button>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <StepThree
                    billing={billing}
                    selectedAddOns={selectedAddOns}
                    setSelectedAddOns={setSelectedAddOns}
                  />
                  <div className="hidden sm:flex justify-between w-full mt-6">
                    <button className="text-coolGray hover:text-marine" onClick={prevStep}>
                      Go Back
                    </button>
                    <button className="bg-marine text-white px-6 py-2 rounded-md hover:bg-purplish" onClick={nextStep}>
                      Next Step
                    </button>
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <StepFour
                    selectedPlan={{
                      name: selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1),
                      billing,
                      price: planPrices[selectedPlan][billing],
                    }}
                    selectedAddOns={addOnDetails
                      .filter((addon) => selectedAddOns.includes(addon.id))
                      .map((addon) => ({
                        ...addon,
                        price: addon.price[billing],
                      }))}
                    handleChangePlan={handleChangePlan}
                  />
                  <div className="hidden sm:flex justify-between w-full mt-6">
                    <button className="text-coolGray hover:text-marine" onClick={prevStep}>
                      Go Back
                    </button>
                    <button className="bg-purplish text-white px-6 py-2 rounded-md hover:bg-pastel" onClick={handleConfirm}>
                      Confirm
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {!confirmed && step < 5 && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white px-3 py-4 flex justify-between items-center">
          {step > 1 ? (
            <button className="text-coolGray hover:text-marine" onClick={prevStep}>
              Go Back
            </button>
          ) : (
            <div />
          )}
          <button
            className="bg-marine text-white px-6 py-2 rounded-md hover:bg-purplish"
            onClick={step === 4 ? handleConfirm : nextStep}
          >
            {step === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
