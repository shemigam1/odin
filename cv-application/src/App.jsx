import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositiontitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [until, setUntil] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSchoolName = (e) => {
    setSchoolName(e.target.value);
  };
  const handleTitleOfStudy = (e) => {
    setTitleOfStudy(e.target.value);
  };
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const handlePositionTitle = (e) => {
    setPositionTitle(e.target.value);
  };
  const handleMainResponsibilities = (e) => {
    setMainResponsibilities(e.target.value);
  };
  return (
    <>
      <GeneralInfo handleName={handleName} />
      <EducationalExperience />
      <PracticalExperience />
      <div className="">
        <div className="">name: {name}</div>
        <div className="">number: {number}</div>
        <div className="">email: {email}</div>
        <div className="">school name: {schoolName}</div>
        <div className="">title of study: {titleOfStudy}</div>
        <div className="">company name: {companyName}</div>
        <div className="">position title: {positionTitle}</div>
        <div className="">main responsibilities: {mainResponsibilities}</div>
      </div>
    </>
  );
}

export default App;
