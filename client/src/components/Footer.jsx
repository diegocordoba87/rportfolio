import React from "react";

const Footer = () => {

  const style={position: 'absolute',
    bottom: 0,
    width: 100,
   }

  return (
    <div style={{style}}>
      <footer className="fixed-bottom page-footer font-small">
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright
      </div>
    </footer>

    </div>
    
  );
};

export default Footer;
