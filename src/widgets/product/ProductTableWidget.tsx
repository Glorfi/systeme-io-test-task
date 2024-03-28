import { UniversalTable } from '../../shared/ui/Table';
import { useAppDispatch, useAppSelector } from '../../shared/utils/hooks';
import { openModal, setModalPayload } from '../../shared/store/modals/modalRouter';
import { MODALS } from '../../shared/constants/Modals';
import { EditTitlePopUp } from '../../shared/ui/EditTitlePopUp';
import { replaceItemProductList } from '../../entities/product/productRouter';

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
