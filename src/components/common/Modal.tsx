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
            {modalData.isNotCloseModal! && (
              <div className="modal-content__close">
                <Image
                  src={"/images/modalcloseicon.svg"}
                  width={16}
                  height={16}
                  alt={"deleteicon"}
                  onClick={handleOnClickClose}
                />
              </div>
            )}
            <div className="modal-content__detail">{modalData.content}</div>
          </div>
        </section>
      )}
    </>
  );
}

export default Modal;
