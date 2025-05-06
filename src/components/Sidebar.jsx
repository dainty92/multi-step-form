const steps = [
    { id: 1, title: "Your Info" },
    { id: 2, title: "Select Plan" },
    { id: 3, title: "Add-Ons" },
    { id: 4, title: "Summary" },
];
  
const Sidebar = ({ currentStep }) => {
    return (
      <div className="bg-[url('/images/bg-sidebar-mobile.svg')] sm:bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover text-white p-6 sm:p-8 flex sm:flex-col flex-row sm:gap-6 gap-4 w-full max-w-md sm:w-[280px] sm:rounded-xl rounded-none justify-center items-start sm:justify-start sm:m-4 sm:h-auto h-[160px]">

        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-4">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                currentStep === step.id
                  ? "bg-lightBlue text-marine"
                  : "border-lightGray"
              }`}
            >
              {step.id}
            </div>
            <div className="text-sm hidden sm:block">
              <div className="uppercase text-lightGray text-xs">Step {step.id}</div>
              <div className="font-bold uppercase">{step.title}</div>
            </div>
          </div>
        ))}
      </div>
    );
};
  
export default Sidebar;
  