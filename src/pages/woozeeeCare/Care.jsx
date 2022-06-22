import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import Input from "../../component/Input";
import MiniLoader from "../../component/MiniLoader";

const Care = () => {
  const startValidating = useRef(false);
  const [registerError, setRegisterError] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    care: "",
  });
  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    care: "",
  });
  const { email, firstName, lastName, phone } = inputs;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const removeMessageBanner = () => {
    setSuccess(false);
    setError(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log(inputs);
    // removeMessageBanner();
  };
  //   console.log(inputs, "inputs");
  const handleSubmit = (e) => {
    e.preventDefault();
    const registerData = {
      email: inputs.email,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      phone: inputs.phone,
      care: inputs.care,
    };
    console.log(registerData);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = validateRegisterFormData(inputs);
  //   if (result.noOfError !== 0) {
  //     setRegisterError((prevState) => {
  //       return { ...prevState, ...result.validationErrors };
  //     });
  //     startValidating.current = true;
  //     return;
  //   }
  //   // console.log(inputs);

  //   setRegisterError((prevState) => {
  //     return {
  //       ...prevState,
  //       email: "",
  //       firstName: "",
  //       lastName: "",
  //       phone: "",
  //       care: "",

  //     };
  //   });

  //   try {
  //     setIsLoading(true);

  //     const registerData = {
  //       email: inputs.email,
  //       firstName: inputs.firstName,
  //       lastName: inputs.lastName,
  //       phone: inputs.phone,
  //       care: inputs.care,

  //     };
  //     const {
  //       data: { data },
  //     } = await register(registerData);

  //     setIsLoading(false);
  //     setSuccess(true);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setErrorMessage(error.response?.data.error);
  //     setError(true);
  //   }
  // };

  const successMessage =
    "A verification mail has been sent to you, kindly check your email to verify your account.";

  return (
    <>
      <div className="tw-flex tw-items-center tw-justify-between tw-my-8 tw-ml-8 tw-w-2/4">
        <div
          className="tw-cursor-pointer tw-flex tw-items-center "
          onClick={() => history.goBack()}
        >
          <svg
            className="tw-w-6 tw-mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <p>Go back</p>
        </div>
        <h4 className="tw-text-center tw-text-lg">
          Please Fill In Your Details
        </h4>
      </div>
      <div className="tw-bg-white container tw-w-3/4 tw-mt-8 tw-py-4 tw-shadow-lg tw-shadow-gray-500/40 tw-border-slate-100 tw-rounded">
        <form onSubmit={handleSubmit}>
          <div className="container tw-grid tw-gap-y-4 tw-space-y-2">
            <div className="tw-grid tw-gap-4 tw-grid-cols-2">
              <div className="form">
                <Input
                  placeholder="firstname"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
                <label for="firstname" className="form__label">
                  Firstname
                </label>
              </div>
              <div className="form">
                <Input
                  placeholder="lastname"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
                <label for="lastname" className="form__label">
                  Lastname
                </label>
              </div>
            </div>
            {/* <div className="form">
          <Input placeholder="woozeee Care Plan" type="text" />
          <label for="care" className="form__label">
            woozeee Care Plan
          </label>
        </div> */}
            <div className="form">
              <select
                className="select__input"
                // required
                onChange={(e) => {
                  const { value } = e.target;
                  // console.log(value);
                  setInputs((prevState) => {
                    return { ...prevState, care: value };
                  });
                }}
                name="care"
              >
                <option value="" disabled>
                  Select care
                </option>
                <option value="elite care">elite care</option>
                <option value="pro care">pro care</option>
                {/* {countries.map(({ name }) => {
                        return <option value={name}>{name}</option>;
                      })} */}
              </select>
              <label for="care" className="form__label">
                woozeee Care Plan
              </label>
            </div>
            <div className="form">
              <Input
                placeholder="Mobile Number"
                type="number"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
              <label for="phone" className="form__label">
                Mobile Number
              </label>
            </div>
            {/* <div className="form">
          <Input placeholder="Date of Birth" type="date" />
          <label for="dob" className="form__label">
            Date of Birth
          </label>
        </div> */}
            {/* <div className="form">
          <select className="select__input" required>
            <option>Male</option>
            <option>Male</option>
          </select>
          <label for="gender" className="form__label">
            Gender
          </label>
        </div> */}
            <div className="form">
              <Input
                placeholder="Email"
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
              <label for="email" className="form__label">
                Email
              </label>
            </div>
            {/* <div className="form">
          <Input placeholder="Address" type="text" />
          <label for="address" className="form__label">
            Address
          </label>
        </div> */}
            {/* <div className="form">
          <select class="select__input" required>
            <option>Married</option>
            <option>Divoced</option>
          </select>
          <label for="marital" className="form__label">
            Marital Status
          </label>
        </div> */}
            {/* <div className="form">
          <Input placeholder="Profession" type="text" />
          <label for="profession" className="form__label">
            Profession
          </label>
        </div> */}

            {/* <div className="form">
          <select className="select__input" required>
            <option disabled>Country</option>
            <option>Divoced</option>
          </select>
          <label for="country" className="form__label">
            Country
          </label>
        </div> */}

            {/* <div className="form">
          <select className="select__input" required>
            <option>Alimosho</option>
            <option>Mosaan</option>
          </select>
          <label for="lga" className="form__label">
            LGA
          </label>
        </div> */}
          </div>
          {isLoading ? (
            <button
              type="submit"
              className=" btn-login tw-space-y-2 tw-w-1/4  tw-text-white tw-font-bold tw-mx-auto tw-flex tw-justify-center tw-items-center tw-my-8"
            >
              <MiniLoader />
            </button>
          ) : (
            <button
              type="submit"
              className=" btn-login tw-space-y-2 tw-w-1/4  tw-text-white tw-font-bold tw-mx-auto tw-flex tw-justify-center tw-items-center tw-my-8"
            >
              Proceed
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Care;
