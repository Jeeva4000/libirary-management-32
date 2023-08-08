import React, { createContext, useContext, useEffect, useState } from 'react'


const BookCtx = createContext(null)

function AppProvider({children}) {
    const [book, setBook] = useState([]);
    useEffect(()=>{
        const getbook = async() =>{
          const response = await fetch("https://644bbf924bdbc0cc3a996e03.mockapi.io/books",{
            method:"GET",
          });
          const data = await response.json();
          if(data){
            setBook(data)
          }
        }
        getbook();
      },[]);
  return (
    <BookCtx.Provider
    value={{book, setBook}}
    >
        {children}
    </BookCtx.Provider>
  )
}
export const AppStates = () =>{
    return useContext(BookCtx)
}
export default AppProvider 