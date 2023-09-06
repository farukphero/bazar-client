import React, { useContext, useState, useRef } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { ModalRelatedContext } from "../../Context/ModalRelatedContext";

import image from "../../../../images/bdflag.jpg";
import Image from "next/image";

const NumberSignIn = () => {
  const [otpSend, setOtpSend] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [otp, setOtp] = useState("");
  const { signInModal, setSignInModal, setSignUpModal }: any =
    useContext(ModalRelatedContext);
  const handleSignInOpen = () => {
    setSignInModal(true);
  };
  const handleSignUpOpen = () => {
    setSignUpModal(true);
  };

  const handleNumberOtpSend = () => {
    const bangladeshiMobilePattern =
      /^(?:\+8801\d{9}|01\d{9}|\+880\d{10}|0\d{10})$/;
    if (bangladeshiMobilePattern.test(inputNumber)) {
      setOtpSend(inputNumber);
    } else {
      // 'e' is not a valid Bangladeshi mobile number
      console.log("Invalid Bangladeshi mobile number");
    }
  };

  const handleBack = () => {
    setOtpSend("");
  };

  const [inputValues, setInputValues] = useState<string[]>(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInputChange = (index: number, value: string) => {
    // Update the input value at the given index, limiting it to one character
    const newInputValues = [...inputValues];
    newInputValues[index] = value.charAt(0); // Only take the first character
    setInputValues(newInputValues);
  
    // Move focus to the next input field if available
    if (index < inputRefs.length - 1 && value.length === 1) {
      inputRefs[index + 1]?.current?.focus();
    }
  };
  

  const handleFinalSubmit = () => {
    const enteredNumbers = parseInt(inputValues.join(""))
    console.log("Entered Numbers:", enteredNumbers);
    console.log(typeof(enteredNumbers))
    setInputValues(['', '', '', '']);
    // You can set the enteredNumbers in state or perform any other action here.
  };
  return (
    <div className=" ">
      <div className="flex justify-between">
        <Link
          onClick={handleSignInOpen}
          href={"/signIn"}
          className="btn btn-primary btn-sm text-white mb-5"
        >
          Sign In
        </Link>
        <Link
          onClick={handleSignUpOpen}
          href={"/signUp"}
          className="text-xl underline"
        >
          Sign Up
        </Link>
      </div>
      <Card color="transparent" shadow={false}>
        {/* <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography> */}
        {otpSend ? (
          <button
            onClick={handleBack}
            className="flex justify-start underline -mb-2"
          >
            Back
          </button>
        ) : (
          <Typography color="gray" className="mt-1 font-normal">
            Log In without password.
          </Typography>
        )}
        <form className="mt-8 mb-2  w-full  ">
          <div className="mb-4 flex flex-col gap-6">
            {otpSend ? (
              <div>
                <div className="flex justify-center">
                  {inputValues.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      className="flex w-10 px-[14px] py-1 rounded border border-gray-500 mx-2"
                      value={value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      ref={inputRefs[index]}
                    />
                  ))}
                </div>
                <Button
                  onClick={handleFinalSubmit}
                  className="mt-6 bg-primary"
                  fullWidth
                >
                  Verify OTP{" "}
                </Button>
              </div>
            ) : (
              <>
                <div className="flex">
                  <Image
                    className={"h-11 w-14"}
                    src={image}
                    alt={"Male"}
                  ></Image>
                  <Input
                    variant="standard"
                    label={
                      (
                        <span style={{ padding: "0 10px" }}>
                          Enter Your Phone Number
                        </span>
                      ) as unknown as string
                    }
                    crossOrigin={undefined}
                    onChange={(e) => setInputNumber(e.target.value)}
                    className="rounded-l-none focus:rounded-l-none"
                    style={{ padding: "0px 10px" }}
                  />
                </div>
                <Button
                  onClick={handleNumberOtpSend}
                  className="mt-6 bg-primary"
                  fullWidth
                >
                  Next
                </Button>
              </>
            )}
          </div>

          {/* <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography> */}
        </form>
      </Card>
    </div>
  );
};

export default NumberSignIn;
