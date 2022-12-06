import React from 'react'
import Button from './Button';



const Header = (props) => {

 const {title,onAdd , showAddForm}=props

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} text={showAddForm?"Remove My Task":"Add My Task"} color={showAddForm?"#ff9100":"green"}/>
      


    </header>
  )
}


const headerStyle = {
  color: "blue",
  backgroundColor:"black",
  padding:15
}
export default Header
 

