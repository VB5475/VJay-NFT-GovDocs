import { Route,Routes } from "react-router-dom"
import Login from "./component/Login"
import Home from "./component/Home"
import GenCerti from "./component/GenCerti"
import CertificateForm from "./venil form/certi.component"
import Digilocker from "./component/Digital locker/digilocker.component"

function App() {

  const Data = [

    {"name": "Aadhar Card",
      "image"  : "QmWRLVyRiZaaemwDEM93Nm926TCAVZHCr4LNMxdPmwgKz9"},
     
    {"name": "Pan Card",
      "image"  : "QmbmjY7ASiuxbA9myadrg9b6utBEfdU6nuMHh18Qs78YKH"},
     
      {"name": "Blood group report",
      "image"  : "QmRAEHVUmD9JTGhw5Ek57eD2CuUmiEC4VeJFXMXRuPhG9d"},
      {"name": "12th Marksheet",
      "image"  : "QmUEfNZZMtExUcCPfbW3Jv1ym6x6Q1FtzBSCNcdmESk7Ux"},
      {"name": "Gtu Marksheet",
      "image"  : "QmXwJoxYSXMfmKVzVGa4UFRRJ7XmqcuasGQHqUN19MGdVv"},
      {"name": "Volunteer Certificate  ",
      "image"  : "QmWcFe7U3STHRVZLsSTFx97Awxu1CsqBa7Hc58Z35GwR7d"},
    
  
  ]



  return (
    <div className="bg-gray-50">

{/* <Digilocker dataArray={Data}/> */}
        <Routes>
  <Route path="/" element={<Home />} />
  
  <Route exact path="/login" element={<Login />} />
  <Route exact path="/home/GenerateCertificate" element={<GenCerti />} />
  <Route exact path="/home/VerifyCertificate" element={<CertificateForm />} />
  <Route exact path="/home/decentrelizeddigitallocker" element={<Digilocker dataArray={Data}/>} />
  <Route exact path="/home/GenerateCertificate/incometaxdepartment" element={<GenCerti />} />
  
  </Routes>



        {/* bellow this routes are temporaryly not needed  */}

        {/* <Route exact path="/GenerateCertificate/organization" element={<Org/>}/>
        <Route exact path="/GenerateCertificate/government" element={<Gov/>}/>
        <Route exact path="/GenerateCertificate/government/aadhardetail" element={<Aadharform/>}/>
        <Route exact path="/GenerateCertificate/government/pandetail" element={<Panform/>}/>
        <Route exact path="/VerifyCertificate" element={<VerifyCerti/>}/>
        <Route exact path="/VerifyCertificate/gov-verification" element={<Verifygov/>}/>
        <Route exact path="/VerifyCertificate/org-verification" element={<Verifyorg/>}/>
        <Route exact path="/GenerateCertificate/form" element={<Form/>}/>
        <Route exact path="/cid" element={<Certificate/>}/>
         */}
    </div>
  )
}


export default App;
