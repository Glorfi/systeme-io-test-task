import { useAppDispatch, useAppSelector } from '../../shared/utils/hooks';
import { UniversalTable } from '../../shared/ui/Table';
import { openModal, setModalPayload } from '../../shared/store/modals/modalRouter';
import { MODALS } from '../../shared/constants/Modals';
import { EditTitlePopUp } from '../../shared/ui/EditTitlePopUp';
import { replaceItemPageList } from '../../entities/page/pageRouter';

export const PagesTableWidget = (): JSX.Element => {
  const pageList = useAppSelector((state) => state.pageList);
  const dispatch = useAppDispatch();

  function handleTableButtonClick(payload: Record<string, any>) {
    dispatch(openModal(MODALS.EDIT_TITLE));
    dispatch(setModalPayload(payload));
  }

  return (
    <>
      <UniversalTable
        data={pageList}
        mt={'40px'}
        buttonTitle={'Edit'}
        buttonProps={{ colorScheme: 'telegram', size: 'sm' }}
        buttonAction={handleTableButtonClick}
      />
      <EditTitlePopUp action={replaceItemPageList} />
    </>
  );
};
