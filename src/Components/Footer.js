import React from 'react'

const Footer = () => {
  const styleObj = {
    'text-align' : "center",
    position : 'absolute',
    // bottom:'0',
    color : 'white',
    backgroundColor:'black',
    width:"100%",
    'padding-top':"10px"
  }
  return (
    <footer className=''  style={styleObj}>  
      <p>CopyRight 2023-24 &copy; <a>TodoList.com</a></p>
    </footer>
  )
}

export default Footer


// adding style in js using objectv  **************************************