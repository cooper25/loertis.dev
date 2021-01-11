import * as React from "react"
import Layout from "../components/main.css"
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  return (
    <elements>
      <Helmet>
        <title>loertis.dev</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="Cooper Tsoris"/>
        <meta http-equiv="content-language" content="en-us"/>
      </Helmet>
      <img draggable="false" height="85" src="./logo.svg"/><br/>
      <img draggable="false" id="space" height="30" src="./loertis.svg"/><br/>
      <h1>web design / design</h1>
      <div className="nav_cont">
        <div id="top" className="nav_sect">
          <h2>contact me</h2>
          <li><a target="_blank" rel="noreferrer" type="email" href="mailto:me@loertis.dev">me@loertis.dev</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://discord.com/users/307273393600724994/">loertis#0325</a></li>
        </div><br/>
        <div className="nav_sect">
          <h2>social media</h2>
          <li><a target="_blank" rel="noreferrer" href="https://twitter.com/loertis_">🏳️‍🌈 @loertis_</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.behance.net/coopertsoris">behance</a></li>
        </div><br/>
        <div className="nav_sect">
          <h2>projects</h2>
          <li><a target="_blank" rel="noreferrer" href="https://dothq.design">dothq.design</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://mybuildr.dev">mybuildr.dev</a></li>
        </div><br/><br/>
      </div>
    </elements>
  )
}

export default IndexPage
