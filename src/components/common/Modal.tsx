"use client";

import "@/components/common/Modal.scss";
import { useModal } from "@/lib/hooks/useModal";
import Image from "next/image";

function Modal() {
  const { modalData, closeModal } = useModal();

  const handleOnClickClose = () => {
    closeModal();
  };
  return (
    <>
      {modalData.isOpen && (
        <section className="modal-block">
          <div className="modal-content">
            <div className="modal-content__close">
              <Image
                src={"/images/modalcloseicon.svg"}
                width={24}
                height={24}
                alt={"deleteicon"}
                onClick={handleOnClickClose}
              />
            </div>
            <div className="modal-content__detail">{modalData.content}</div>
          </div>
        </section>
      )}
    </>
  );
}

export default Modal;
