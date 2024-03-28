import { UniversalTable } from '../../shared/ui/Table';
import { useAppDispatch, useAppSelector } from '../../shared/utils/hooks';
import { openModal, setModalPayload } from '../../shared/store/modals/modalRouter';
import { MODALS } from '../../shared/constants/Modals';
import { EditTitlePopUp } from '../../shared/ui/EditTitlePopUp';
import { replaceItemPricingPlanList } from '../../entities/price-plan/pricingPlanRouter';

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
