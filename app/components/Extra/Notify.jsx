import { useEffect, useRef, useState } from "react";

export default function Notify({ isOpen, message }) {
  const [hide, setHide] = useState(false);
  const notifyRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      //   setHide(true);
      console.log(
        notifyRef.current?.parentNode?.removeChild(notifyRef.current)
      );
    }, 5000);
  }, []);

  return (
    <>
      {isOpen && (
        <div
          ref={notifyRef}
          className={`bg-textBlack w-[300px] p-4 text-white ${
            hide ? "hidden" : "absolute"
          } rounded-lg shadow-xl z-[999] absolute bottom-5 right-4`}
        >
          <h1>This is notification</h1>
        </div>
      )}
    </>
  );
}

// open when clicked a button or call a function
