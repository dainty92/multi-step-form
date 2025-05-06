const StepOne = ({ formData, handleChange, errors, touched, nextStep }) => {
  return (
    <div className="flex flex-col gap-4 sm:w-full h-full px-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-marine">Personal info</h1>
        <p className="text-coolGray text-sm sm:text-base mt-2 sm:tracking-tight tracking-wider">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {/* Name Field */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-marine">Name</label>
            {errors?.name && touched?.name && (
              <span className="text-sm text-strawberry font-medium">{errors.name}</span>
            )}
          </div>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            className={`
              border py-2 px-4 rounded-md font-medium outline-none
              ${errors?.name && touched?.name ? 'border-strawberry' : 'border'}
              focus:ring-2 focus:ring-purplish
            `}
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-marine">Email Address</label>
            {errors?.email && touched?.email && (
              <span className="text-sm text-strawberry font-medium">{errors.email}</span>
            )}
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            className={`
              border py-2 px-4 rounded-md font-medium outline-none
              ${errors?.email && touched?.email ? 'border-strawberry' : 'border'}
              focus:ring-2 focus:ring-purplish
            `}
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-marine">Phone Number</label>
            {errors?.phone && touched?.phone && (
              <span className="text-sm text-strawberry font-medium">{errors.phone}</span>
            )}
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            className={`
              border py-2 px-4 rounded-md font-medium outline-none
              ${errors?.phone && touched?.phone ? 'border-strawberry' : 'border'}
              focus:ring-2 focus:ring-purplish
            `}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
