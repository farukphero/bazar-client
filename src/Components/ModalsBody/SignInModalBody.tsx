import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import NumberSignIn from "./SignInMethods/NumberSignIn";
import EmailSignIn from "./SignInMethods/EmailSignIn";

const SignInModalBody = () => {
  const [signInMethod, setSignInMethod] = useState("");
  const handleSignInMethod = (e: any) => {
    setSignInMethod(e);
  };
  return (
    <section>
      <div className="block">
      <NumberSignIn></NumberSignIn>
      <div className="divider"></div>
        <Button onClick={()=>handleSignInMethod("number")} className="bg-primary w-full mt-5">Continue with email</Button>
        <Button className="bg-primary w-full mt-5">Continue with google</Button>
        <Button className="bg-blue-800 w-full mt-5">
          Continue with facebook
        </Button>
      </div>
      <div>
        {/* {signInMethod === "number" && } */}
        {signInMethod === "email" && <EmailSignIn></EmailSignIn>}
      </div>
    </section>
  );
};

export default SignInModalBody;
