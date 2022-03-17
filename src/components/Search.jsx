import React,{useState} from 'react'
import styled from 'styled-components'
const Search = ({setSearchResults}) => {
const [search,setSearch] = useState('')

const onSubmit =  e =>{
  e.preventDefault()
  setSearchResults(search)
  setSearch('')
}
  return (
    <StyledSearch>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='Type your location and hit Enter' value={search} onChange={(e) => setSearch(e.target.value)}></input>

      </form>

    </StyledSearch>
  )
}

const StyledSearch = styled.div`
margin-bottom:30px;
input{
  width:80%;
  height:45px;
  border-radius:10px;
  padding-left:20px;

}
  


`

export default Search