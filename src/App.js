import React  from 'react'
import Navbar from "./Navbar"

import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'
import Resgistration from './Forms/Resgistration'
import Reg from './form-update/Reg'
import Registrations from './form-update/Registrations'
class App extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
     <Form2/>
      <Form3/>
      <Resgistration/>
      <Reg/>
      <Registrations/>

      </div>
    )
  }
}

export default App