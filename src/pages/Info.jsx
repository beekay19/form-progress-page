import { FormProvider, useForm, useWatch } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/shared/Button";
import { useState, useEffect } from "react";

function Info() {
  const methods = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  // Access the form state with the useForm hook instead of useState
  const name = useWatch({ name: "name", control: methods.control });
  const email = useWatch({ name: "email", control: methods.control });
  const number = useWatch({ name: "number", control: methods.control });

  // Enable the "Next Step" button when all required fields are filled
  useEffect(() => {
    if (name && email && number) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, email, number]);

  const handleSubmit = (data) => {
    console.log(data);
    navigate("/plan");
  };

  return (
    <div className="w-[80%] mx-auto pt-8">
      <h2 className="text-3xl font-bold pb-2 text-marineBlue">Personal info</h2>
      <p className="text-coolGray text-[.95rem]">
        Please provide your name, email address, and phone number.
      </p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          noValidate
          className="py-4 space-y-4"
        >
          <div className="name">
            <label htmlFor="name" className="pb-2 text-base">
              Name
            </label>
            <input
              onChange={(e) => {
                methods.setValue("name", e.target.value); // Update the form state with setValue
              }}
              type="text"
              name="name"
              id="name"
              className="w-full py-2 px-4 border-l-lightGray border rounded-md outline-pastelBlue text-marineBlue font-medium text-base"
              placeholder="e.g. Stephen King"
              value={name}
              {...methods.register("name", {
                required: {
                  value: true,
                  message: "required",
                },
              })}
            />
          </div>
          <div className="email">
            <div className="flex justify-between items-center">
              <label htmlFor="email" className="pb-2 text-base">
                Email Address
              </label>
              {methods.formState.errors.email && (
    <p className="text-red-500 text-sm">{methods.formState.errors.email.message}</p>
  )}
            </div>
            <input
              onChange={(e) => {
                methods.setValue("email", e.target.value); // Update the form state with setValue
              }}
              type="text"
              name="email"
              id="email"
              className="w-full py-2 px-4 border-l-lightGray border rounded-md outline-pastelBlue text-marineBlue font-medium text-base"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              {...methods.register("email", {
                required: {
                  value: true,
                  message: "required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>
          <div className="phone">
            <label htmlFor="phone" className="pb-2 text-base">
              Phone Number
            </label>
            <input
              onChange={(e) => {
                methods.setValue("number", e.target.value); // Update the form state with setValue
              }}
              type="number"
              name="phone"
              id="phone"
              className="w-full py-2 px-4 border-l-lightGray border rounded-md outline-pastelBlue text-marineBlue font-medium text-base"
              placeholder="e.g. +1 234 567 890"
              value={number}
              {...methods.register("number", {
                required: {
                  value: true,
                  message: "required",
                },
              })}
            />
          </div>
          <div className="flex justify-end items-center pt-6">
            <Button
              handleClick={methods.handleSubmit(handleSubmit)}
              setStyle="bg-marineBlue hover:opacity-80"
              setDisabled={isButtonDisabled} // Enable/disable the button based on form validity
            >
              Next Step
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default Info;
