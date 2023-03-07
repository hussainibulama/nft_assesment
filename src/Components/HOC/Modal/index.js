import '../../Styles/modal.scss';
const Modal = ({children}) => {
  return (
    <>
      <div className='modal-bg'>
        <div className='modal-main'>{children}</div>
      </div>
    </>
  );
};
export default Modal;
