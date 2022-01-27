import React from 'react'
import { Search } from 'semantic-ui-react'
import { useState,useEffect,useRef } from 'react'
import {unstable_batchedUpdates} from 'react-dom';



function LocationSearch({value,setValue,updateAddress,setPosition}) {
    const [results, setResults] = useState([])
   //handle searching for address
   const [search, setSearch] = useState("")
    //holds the current pending search
    const searchRef=useRef()


    useEffect(() => {
        if (searchRef.current!=null){
            clearTimeout(searchRef.current)
        }searchRef
        if(search.length!=0){
            searchRef.current=timedSearch(search)
        }
      }, [search]);







    function timedSearch(val){
        //set timeout to allow for additional typing
        return setTimeout(async() =>  { 
            try{
                let url="https://autocomplete.search.hereapi.com/v1/autocomplete"
                let places=await fetch(`${url}?q=${val}&limit=20&types=city&apiKey=${process.env.REACT_APP_HERE_API_KEY}`,{
                    method: 'GET',
                    // headers:{
                    //     "Cache-Control": "max-age=3600"
                    
                    // }
                })
                let resp=await places.json()
                let filter=resp["items"].map((val)=>{
                    let obj={}
                    obj["title"]=val["title"]
                    return obj
                })
                console.log(filter)
                setResults(filter)
               
            } 
            catch{
                return
            }
          
            }, 500);
    }

        //Certain Sitution require more flexiblity on when to set the
        //different state i.e click on map vs searching 
    function handleSearchChange(e){

        unstable_batchedUpdates(() => {
           
            setValue(e.target.value)
            setSearch(e.target.value)
          });
    }

    function handleSelect(e){
       

        unstable_batchedUpdates(() => {
           
            setValue(e.target.textContent)
            updateAddress(e.target.textContent)
            setPosition(null)
          });
    }


  return (
  <Search
  loading={false}
  placeholder="Search"
  results={results}
  onSearchChange={handleSearchChange}
  onResultSelect={handleSelect}
  value={value}
  showNoResults={false}

  />
  )
}

export default LocationSearch