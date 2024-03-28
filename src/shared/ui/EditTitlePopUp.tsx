import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { MODALS } from '../constants/Modals';
import { closeModal } from '../store/modals/modalRouter';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IPage } from '../constants/types/pages';
import { IProduct } from '../constants/types/product';
import { IPricingPlan } from '../constants/types/pricingPlan';

interface IEditTitlePopUp {
  action:
    | ActionCreatorWithPayload<IPage, `pageList/replaceItemPageList`>
    | ActionCreatorWithPayload<IProduct, 'productList/replaceItemProductList'>
    | ActionCreatorWithPayload<IPricingPlan, 'pricingPlanList/replaceItemPricingPlanList'>;
}

export const EditTitlePopUp = (props: IEditTitlePopUp): JSX.Element => {
  const { action } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState<string[]>();
  const [title, defaultValue] = formData || [];
  const [formValues, setFormValues] = useState<any>();

  const modal = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleButtonClick() {
    dispatch(action(formValues));
    onClose();
  }

  useEffect(() => {
    if (modal.name === MODALS.EDIT_TITLE) {
      onOpen();
    }
  }, [modal]);

  useEffect(() => {
    if (!isOpen) {
      dispatch(closeModal());
    }
  }, [isOpen]);

  useEffect(() => {
    if (modal.payload) {
      setFormData(Object.entries(modal.payload)[1]);
      setFormValues(modal.payload);
    }
  }, [modal.payload]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>{title}</FormLabel>
              <Input
                type="text"
                defaultValue={defaultValue}
                name={title}
                onChange={handleInputChange}
              />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="telegram" mr={3} onClick={handleButtonClick}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
