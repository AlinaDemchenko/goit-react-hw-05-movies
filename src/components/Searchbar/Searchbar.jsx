function Searchbar({handlerSubmit}) {

    const onSubmit = evt => {
        evt.preventDefault();
        handlerSubmit(evt.target.elements.search.value);
      };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
        />
             <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
