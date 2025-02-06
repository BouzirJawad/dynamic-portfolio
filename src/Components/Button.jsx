import React,{useState, useRef, useEffect} from "react";

function Button() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-screen parent">
        
        <div className="drop-menu" ref={menuRef}>
          <div onClick={()=> setIsOpen(!isOpen)} className="cursor-pointer">Media</div>
          {isOpen && (
          <div>
            <ul className="drop-menu-options absolute">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <hr />
              <li>Contact me</li>
            </ul>
          </div>
          )}
        </div>

        
      </div>
    </>
  );
}

export default Button;
