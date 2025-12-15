"use client";

import React from "react";
import { CgProfile } from "react-icons/cg";
import Modal from "../../ui/Modal";
import UpdateForm from "./UpdateForm";
import { useTranslations } from "next-intl";

function UpdateProfile() {
  const t = useTranslations("settings");
  return (
    <Modal>
      <Modal.Open name="updateProfile">
        <div className="mt-4 flex cursor-pointer items-center justify-start gap-3 rounded-3xl bg-slate-50/10 px-8 py-4 text-indigo-400 transition-all duration-300 hover:text-rose-400/80">
          <span className="flex items-center justify-center text-3xl">
            <CgProfile />
          </span>
          <h4>{t("updateButton")}</h4>
        </div>
      </Modal.Open>
      <Modal.Window name="updateProfile">
        <UpdateForm />
      </Modal.Window>
    </Modal>
  );
}

export default UpdateProfile;
