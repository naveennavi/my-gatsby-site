import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
   <Layout pageTitle ="Home Page">
     <p>Gatsby Tutorial.</p>
     <StaticImage
        alt="camera"
        src="../images/default.jpg"
      />
   </Layout>
  )
}

export default IndexPage;