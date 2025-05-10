

export const SearchEngine=()=>{
    
    function debounce() {
        let id;

        return function innerFunction(event){
            clearTimeout(id);

            id=setTimeout(()=>{
                console.log(event.target.value);
            },2000);
        }
    }

    return (
      <input
        type='text'
        className='search-field'
        placeholder='Search here...'
        onChange={ debounce() }

      />
    )
}

//Method 2

// export const SearchEngine=()=>{
//     const [searchTerm, setSearchTerm] = useState('')

//     useEffect(() => {
//       const delayDebounceFn = setTimeout(() => {
//         console.log(searchTerm)
        
//       }, 1000)
  
//       return () => clearTimeout(delayDebounceFn)
//     }, [searchTerm])
  
//     return (
//       <input
//         type='text'
        
//         className='search-field'
//         placeholder='Search here...'
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     )
//   }
