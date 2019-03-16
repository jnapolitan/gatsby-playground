import React from "react";
import Header from "../components/header";
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Header headerText="Hello Gatsby!" />
    <p>Nice to meet me.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <div>
      <h4> Hi!I 'm building a fake Gatsby site as part of a tutorial!</h4>
      <p> What do I like to do? Lots of course but definitely enjoy building websites.</p>
    </div>
  </Layout>
)