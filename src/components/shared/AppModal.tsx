import {Modal, Portal} from 'react-native-paper';
import React from 'react';
import {StyleSheet} from 'react-native';

export const AppModal = (props: {
  visible: boolean;
  onDismiss(): void;
  children: any;
}) => {
  return (
    <Portal>
      <Modal
        visible={props.visible}
        dismissable={true}
        onDismiss={props.onDismiss}
        contentContainerStyle={styles.modalContainer}>
        {props.children}
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: 'center',
    padding: 20,
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
