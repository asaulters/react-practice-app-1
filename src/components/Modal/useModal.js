import { useState } from 'react';
import Modal from './Modal';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);

  }

  if(isShowing){
      return (
          <Modal />
      )
  } 


  return {
    isShowing,
    toggle,
  }
};

export default useModal;