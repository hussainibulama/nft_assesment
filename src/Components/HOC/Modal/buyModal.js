import '../../Styles/modal.scss';
import Modal from '.';
import {ReactComponent as CircleCancel} from '../../Images/svg/circle-cancel.svg';

const BuyModal = ({cancel, name, description, address, opensea_link}) => {
  return (
    <>
      <Modal>
        <div className='addmoney-modal'>
          <div className='modal_header'>
            <div>
              <h3>{name}</h3>
            </div>
            <div onClick={() => cancel()}>
              <CircleCancel />
            </div>
          </div>
          <div className='modal_content'>
            <h4>Description</h4>
            <p>{description}</p>
            <h4>Address</h4>
            <p>{address}</p>
            <button
              onClick={() =>
                window.open(`${opensea_link}`, '_blank', 'noreferrer')
              }
            >
              Buy now
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default BuyModal;
