const Filter = ({searchTerm, handleSearchChange}) => {
    
    return (
        <form>
        <div>
          <input 
          value={searchTerm} 
          onChange={handleSearchChange}
          placeholder="Search by name"
          />
        </div>
      </form>
    )
}

export default Filter;