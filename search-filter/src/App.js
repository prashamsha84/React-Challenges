import Data from './MOCK_DATA.json'
import Search from "./components/Search"
import {useState} from 'react'

export default function App(){
    const [searchTerm, setSearchTerm]= useState('')

    function handleChange(event){
        setSearchTerm(event.target.value)
    }
    const nameData = Data.filter((value)=> {

     if (searchTerm ===""){
        return value;
    }
        else if (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
        }
        return false;
    }).map(value=>
        <Search  key={value.id} name ={value.first_name}/> 
    )
    return(
        <div>
       <h1>Search Filter</h1>
      <input type="text" placeholder="Search..." 
       name="firstname"
       onChange={handleChange}
      />
      {nameData}        </div>
    )
}