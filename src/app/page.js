"use client"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import PreLoader from "./Common/PreLoader";
import { useEffect, useState } from "react";
const Page = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loader ? (
        <PreLoader />
      ) : (
        <section className="min-h-screen w-screen">
          <Navbar />
          <Home />
        </section>
      )}
    </>
  );
};

export default Page;
