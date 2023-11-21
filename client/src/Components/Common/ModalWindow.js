import { useState } from "react";
import { Modal, Portal, Text } from "react-native-paper";


const ModalWindow = ({isVisible, onHide}) => {
  const [visible, setVisible] = useState(isVisible);

  const hideModal = () => {
    setVisible(false)
    onHide();
  };
  const containerStyle = {backgroundColor: 'white', padding: 20, minHeight: '300px'};

  return ( 
    <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text variant="displayMedium" style={{color: 'green'}}>Paid Successfully</Text>
        </Modal>
      </Portal>
   );
}
 
export default ModalWindow;