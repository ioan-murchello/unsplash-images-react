import { useGlobalContext } from "../context";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import {motion} from 'framer-motion'

const Modal = () => {
    const { setIsOpen, modalItem } = useGlobalContext();
    const {description, urls, user, created_at} = modalItem

    let desc = description ? `${description.slice(0, 200)}...` : "Beautiful picture"
    let timeOfCreated = created_at ? created_at.slice(0, 10) : new Date().toLocaleDateString()

    const onCloseModal = () => {
        setIsOpen(false);
    }
    
  return (
    <>
      <div className='modal-overlay' onClick={onCloseModal}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ opacity: 0 }}
          className='modal-content'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='img-wrapper'>
            <img src={urls.regular} alt='image' />
          </div>
          <p>{desc}</p>
          <p>Author : {user.name}</p>
          <p>Created: {timeOfCreated}</p>
          <button className='close-button' onClick={onCloseModal}>
            <AiOutlineCloseSquare />
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
