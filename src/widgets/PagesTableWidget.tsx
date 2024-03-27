import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { UniversalTable } from '../components/Table';
import { openModal, setModalPayload } from '../app/store/modals/modalRouter';
import { MODALS } from '../app/constants/Modals';
import { EditTitlePopUp } from '../components/EditTitlePopUp';
import { replaceItemPageList } from '../app/store/pages/pageRouter';
import TableFilter from '../components/TableFilter';

export const PagesTableWidget = (): JSX.Element => {
  const pageList = useAppSelector((state) => state.pageList);
  const dispatch = useAppDispatch();

  function handleButtonClick(payload: Record<string, any>) {
    dispatch(openModal(MODALS.EDIT_TITLE));
    dispatch(setModalPayload(payload));
  }

  return (
    <>
      <TableFilter />
      <UniversalTable
        data={pageList}
        mt={'40px'}
        buttonTitle={'Edit'}
        buttonProps={{ colorScheme: 'telegram', size: 'sm' }}
        buttonAction={handleButtonClick}
      />
      <EditTitlePopUp action={replaceItemPageList} />
    </>
  );
};
