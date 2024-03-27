import { UniversalTable } from '../components/Table';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { openModal, setModalPayload } from '../app/store/modals/modalRouter';
import { MODALS } from '../app/constants/Modals';
import { EditTitlePopUp } from '../components/EditTitlePopUp';
import { replaceItemPricingPlanList } from '../app/store/pages/pricingPlanRouter';

function PricePlanTableWidget(): JSX.Element {
  const pricePlanList = useAppSelector((state) => state.pricingPlanList);
  const dispatch = useAppDispatch();

  function handleButtonClick(payload: Record<string, any>) {
    dispatch(openModal(MODALS.EDIT_TITLE));
    dispatch(setModalPayload(payload));
  }

  return (
    <>
      <UniversalTable
        data={pricePlanList}
        mt={'40px'}
        buttonTitle={'Edit'}
        buttonProps={{ colorScheme: 'telegram', size: 'sm' }}
        buttonAction={handleButtonClick}
      />
      <EditTitlePopUp action={replaceItemPricingPlanList} />
    </>
  );
}

export default PricePlanTableWidget;
