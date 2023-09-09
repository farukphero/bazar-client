import Link from "next/link";
import React, { useContext } from "react";
import { ModalRelatedContext } from "../Context/ModalRelatedContext";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignUpModalBody = () => {
  const { signInModal, setSignInModal, setSignUpModal }: any =
    useContext(ModalRelatedContext);
  const handleSignInOpen = () => {
    setSignInModal(true);
  };
  const handleSignUpOpen = () => {
    setSignUpModal(true);
  };
  return (
    <div>
      <div className="flex justify-between">
        <Link
          onClick={handleSignInOpen}
          href={"/signIn"}
          className="text-xl underline"
        >
          Sign In
        </Link>
        <Link
          onClick={handleSignUpOpen}
          href={"/signUp"}
          className="btn btn-primary btn-sm text-white mb-5"
        >
          Sign Up
        </Link>
      </div>
      <Card color="transparent" shadow={false}>
        {/* <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography> */}
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" crossOrigin={undefined} />
            <Input size="lg" label="Email" crossOrigin={undefined} />
            <Input
              type="password"
              size="lg"
              label="Password"
              crossOrigin={undefined}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            crossOrigin={undefined}
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>
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

export default SignUpModalBody;
