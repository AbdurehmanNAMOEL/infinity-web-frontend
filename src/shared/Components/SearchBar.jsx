import { Box} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ({setChangeValue,inputValue}) => {
  return (
    <Box sx={{
      width:'200px',
      height:'40px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      border:'1px solid rgba(0,0,0,0.4)'
      }}>
      <input type='text'
       style={{width:'80%',height:'35px',border:'none',outline:'none',textIndent:'8px'}}
       placeholder='enter value'
       value={inputValue}
       onChange={setChangeValue}
      />
      <SearchIcon/>
    </Box>
  )
}

export default SearchBar