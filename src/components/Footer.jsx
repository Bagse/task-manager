import React from "react";

function Footer() {
  return (
    <footer className="text-center text-[10px] md:text-xs font-semibold tracking-widest uppercase py-7 px-3 md:px-40 mt-5">
      © 2023 Created by{" "}
      <a
        href="https://www.linkedin.com/in/brian-ar%C3%B3n-g%C3%B3mez-sequeiros/"
        target="_blank"
        className="hover:text-green-400 underline transition"
        rel="noopener noreferrer"
      >
        Bagse
      </a>{" "}
      , all rights reserved. All trademarks are property of their respective
      owners.
    </footer>
  );
}

export default Footer;
