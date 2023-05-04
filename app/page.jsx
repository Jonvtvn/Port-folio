import FormContact from '<>/components/FormContact'
import Portafolio from '<>/components/Portafolio'
import SkillsBar from '<>/components/SkillsBar'
import SobreMi from '<>/components/SobreMi'
import TextJobs from '<>/components/TextJobs'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <SobreMi />
      <TextJobs />
      <SkillsBar />
      <Portafolio />
      <FormContact />
    </>
  )
}