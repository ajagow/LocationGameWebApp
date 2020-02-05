import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { RichText } from 'prismic-reactjs'


class IndexPage extends Component {

  render() {
    const { data } = this.props;

    const welcome = data.prismic.allHomepages.edges[0].node.welcome[0].text;

    return(
    <Layout>
      <SEO title="Home" />
      <h1>{welcome}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    );
  }
}

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          welcome
          _linkType
        }
      }
    }
  }
}
`;

export default IndexPage
