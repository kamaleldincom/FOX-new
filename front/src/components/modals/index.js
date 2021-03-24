import React from "react";
import DeleteModal from "./DeleteModal";
import DeleteProjectModal from "./DeleteProjectModal";
import DeleteManagerModal from "./DeleteManagerModal";
import DeleteContractorModal from "./DeleteContractorModal";
import ExtendModal from "./ExtendModal";
import ForgetPasswordModal from "./ForgetPasswordModal";
import ResetPasswordModal from "./ResetPasswordModal";
import ContractorConfirmModal from "./ContractorConfirmModal";

const FoxEngagedModals = (props) => {
  return (
    <React.Fragment>
      <DeleteModal {...props} />
      <DeleteProjectModal {...props} />
      <DeleteManagerModal {...props} />
      <DeleteContractorModal {...props} />
      <ExtendModal {...props} />
      <ForgetPasswordModal {...props} />
      <ResetPasswordModal {...props} />
      <ContractorConfirmModal {...props} />
    </React.Fragment>
  );
};

export {
  DeleteModal,
  DeleteProjectModal,
  DeleteManagerModal,
  DeleteContractorModal,
  ExtendModal,
  ForgetPasswordModal,
  ResetPasswordModal,
  FoxEngagedModals,
};
