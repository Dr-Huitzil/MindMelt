import React from 'react';
import '../styles/global.css';
import Layout from '../components/Layout.js';

export default function Home(){
  return (
    <Layout>
      <section className = "MainInfo">
        <div className="mind"></div>
          <h1>Mind Melt</h1>
          <p>with Ivan, Rogelio, and Juan</p>
        <div className="mind"></div>
      </section>
    </Layout>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
