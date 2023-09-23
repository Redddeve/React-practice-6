import { StyledBtn, StyledItem, StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterData = (data, filter) => {
    return data?.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredData = filterData(contacts, filter);

  return (
    <>
      <StyledList>
        {filteredData?.map(cont => (
          <StyledItem key={cont.id} id={cont.id}>
            {cont.name}: {cont.number}
            <StyledBtn onClick={() => dispatch(deleteContact(cont.id))}>
              Delete
            </StyledBtn>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};

export default ContactList;
