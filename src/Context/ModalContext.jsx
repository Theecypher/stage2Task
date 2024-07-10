import { createContext, useState, useEffect } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

  const [openModal, setOpenModal] = useState(false)

  const openModalFuncn = () => {
    setOpenModal(true)
  }
  const closeModalFuncn = () => {
    setOpenModal(false)
  }

  


  return (
    <ModalContext.Provider
    value={{
        openModal,
        setOpenModal,
        openModalFuncn,
        closeModalFuncn
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};
