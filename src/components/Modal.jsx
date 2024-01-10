import { useGlobalContext } from "../context";


const Modal = () => {
    const { setIsOpen, modalItem } = useGlobalContext();
    const {description, urls, user, created_at} = modalItem
    let desc = description ? `${description.slice(0, 200)}...` : 'This picture hasn"t description'

    const onCloseModal = () => {
        setIsOpen(false);
    }
  return (
    <>
      <div className='modal-overlay' onClick={onCloseModal}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div>
                <img style={{width: '200px', height: '200px'}} src={urls.regular} alt="image" />
                <p>{desc}</p>
                <p>Author : {user.name}</p>
                <p>Created: {created_at.slice(0, 10)}</p>
            </div>
          <button className='close-button' onClick={onCloseModal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
