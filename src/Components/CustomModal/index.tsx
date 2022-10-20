import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import './styles.scss';

interface ICustomModalProps {
  title?: string;
  isButtonActions?: boolean;
  content?: React.ReactNode;
  closeHandler: () => void;
  isOpen: boolean;
  className?: string;
}

const CustomModal: React.FC<ICustomModalProps> = (props) => {
  const {
    title,
    isButtonActions = false,
    content = <></>,
    closeHandler,
    isOpen = false,
    className,
  } = props;

  return (
    <Modal
      tabIndex={-1}
      isOpen={isOpen}
      toggle={closeHandler}
      centered
      backdrop="static"
      keyboard={false}
      className={className}
    >
      <ModalHeader toggle={closeHandler}>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      {isButtonActions ? (
        <ModalFooter>
          <Button variant="secondary" onClick={closeHandler}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </ModalFooter>
      ) : (
        <></>
      )}
    </Modal>
  );
};

export default CustomModal;
