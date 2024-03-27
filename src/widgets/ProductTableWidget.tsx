import { UniversalTable } from '../components/Table';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { openModal, setModalPayload } from '../app/store/modals/modalRouter';
import { MODALS } from '../app/constants/Modals';
import { EditTitlePopUp } from '../components/EditTitlePopUp';
import { replaceItemProductList } from '../app/store/pages/productRouter';

function ProductTableWidget(): JSX.Element {
  const productList = useAppSelector((state) => state.productList);
  const dispatch = useAppDispatch();

  function handleButtonClick(payload: Record<string, any>) {
    dispatch(openModal(MODALS.EDIT_TITLE));
    dispatch(setModalPayload(payload));
  }

  return (
    <>
      <UniversalTable
        data={productList}
        mt={'40px'}
        buttonTitle={'Edit'}
        buttonProps={{ colorScheme: 'telegram', size: 'sm' }}
        buttonAction={handleButtonClick}
      />
      <EditTitlePopUp action={replaceItemProductList} />
    </>
  );
}

export default ProductTableWidget;
