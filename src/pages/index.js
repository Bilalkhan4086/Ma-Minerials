import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import icon from "../images/GatsbyIcon.png"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <img
        src={icon}
        width="200px"
        alt=""
        style={{ marginBottom: `var(--space-3)` ,borderRadius:"5px", border:"2px solid black"}}
      />
      <h1>
        Welcome to <b>MA Minerals!</b>
      </h1>
      <h2>
        <b>Comming Soon!</b>
      </h2>
      <h3>
        Currently We website is under<b>Development Mode</b>
      </h3>
      </div>
  </Layout>
)

export default IndexPage
