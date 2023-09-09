import { useContext } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ModalRelatedContext } from "../Context/ModalRelatedContext";
import { useRouter } from "next/router";
import SignUpModalBody from "../ModalsBody/SignUpModalBody";

export default function SignUpModal() {
  const { signUpModal, setSignUpModal, handleOpenSignUpModal }: any =
    useContext(ModalRelatedContext);
  const router = useRouter();
  const handleCancel = () => {
    setSignUpModal(false);
    router.push("/");
  };
  return (
    <div>
      <Dialog
        open={signUpModal}
        handler={handleOpenSignUpModal}
        className="bg-white lg:bg-transparent lg:px-16"
        animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
      >
        <DialogBody className="lg:bg-white lg:rounded lg:rounded-b-none lg:px-10">
          <SignUpModalBody></SignUpModalBody>
        </DialogBody>

        <DialogFooter className="lg:bg-white lg:rounded-b">
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
