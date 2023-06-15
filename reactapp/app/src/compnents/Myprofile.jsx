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
        <img src="https://pps.whatsapp.net/v/t61.24694-24/351788593_2027782570903834_4570456097607104456_n.jpg?ccb=11-4&oh=01_AdRrlJSEcgZezU57tYzT0Guk5DnpViQiNvaE15bJ3ugeBw&oe=64976E27" alt="" height="200px" width="200px" />
      <br />
      
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}
