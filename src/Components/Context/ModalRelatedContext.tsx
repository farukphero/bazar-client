import React, { createContext, useEffect, useState } from "react";

export const ModalRelatedContext = createContext({});

const StateInformation = ({ children }: any) => {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleOpenSignInModal = () => setSignInModal(!signInModal);
  const handleOpenSignUpModal = () => setSignUpModal(!signUpModal);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const info = {
    signInModal,
    setSignInModal,
    signUpModal,
    setSignUpModal,
    handleOpenSignInModal,
    handleOpenSignUpModal,
  };
  return (
    <ModalRelatedContext.Provider value={info}>
      {!loading && children}
    </ModalRelatedContext.Provider>
  );
};

export default StateInformation;
