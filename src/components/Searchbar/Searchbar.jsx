import { useSearchParams } from "react-router-dom";
import { StyledSearchbar } from './Searchbar.styled';

function Searchbar({ handlerSubmit, valueByDefault }) {
  const onSubmit = evt => {
    evt.preventDefault();
    handlerSubmit(evt.target.elements.search.value);
  };

  return (
    <StyledSearchbar>
      <form onSubmit={onSubmit}>
        <input name="search" type="text" autoComplete="off" defaultValue={valueByDefault} required/>
        <button type="submit"></button>
      </form>
    </StyledSearchbar>
  );
}

export default Searchbar;
