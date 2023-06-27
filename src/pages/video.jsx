import React from "react";
import TopNav from "../component/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Homee from "../component/Homee";
import data from "../data.json";
import BlogPost from "../component/BlogPost";
import "../video.css";
import HeroSection from "../HeroSection";
import Container from "react-bootstrap/Container";
import Footer from "../component/Footer";

function video() {
  return (
    <>
      <TopNav />
      <HeroSection />
      <Container>
      <div className="video">
        <div>
          
            &nbsp;
            <section class="wrapper">
              <div class="container">
                <div class="grid-cols-2">
                  <div class="grid-item-1">
                    <h1 class="main-heading">Popular video right now*</h1>
                    <p class="info-text">
                      Youth: Open Space #5 Mental Health, Youth, and COVID-19 <b>by ASEAN Youth Forum Channel</b>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <br />
          
        </div>
        <div class="container1">
          <iframe class="responsive-iframe" src="https://www.youtube.com/embed/V3jfLetEtrI"></iframe>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr></hr>
        <br />
        <br />
        <main>
          <Routes>
            <Route path="/" element={<Homee data={data} />} />
            <Route path="/blogpost/:id" element={<BlogPost data={data} />} />
          </Routes>
        </main>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default video;
