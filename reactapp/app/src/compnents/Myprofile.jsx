import React from 'react'

export const Myprofile = ({setLoggedin}) => {



    const handlelogout=()=>{
        setLoggedin(false)
    }
  return (
    <div>
        <h1>Myprofile</h1>
        <h2>my personal details</h2>
        <img src="https://pps.whatsapp.net/v/t61.24694-24/164493875_153235280671087_8666297241142876638_n.jpg?ccb=11-4&oh=01_AdQ4tI02Q_lhyNha8xcd3Ht3y05TTG7nfMGTH2NJED0z3A&oe=64974E55" alt="" height="200px" width="200px"/>
        <img src="https://iili.io/H6GrLF4.md.jpg" alt="H6GrLF4.md.jpg" border="0" alt="" height="200px" width="200px" />
        <img src="https://iili.io/H6G6c7V.md.jpg" alt="H6G6c7V.md.jpg" border="0" alt="" height="200px" width="200px" />
        <img src="./photos/BPLM4502.JPG" alt="" height="200px" width="200px" />
        <img src="./photos/EFZX5907.JPG" alt="" height="200px" width="200px" />
        <img src="./photos/FTWD8840.JPG" alt=""height="200px" width="200px" />




      <br />
      
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}
