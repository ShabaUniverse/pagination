import React from "react";

const ByLetter = ({ setLetter  }) => {
    //alphabetical sorted letters
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

//   set letter-state to specific letter
  const onChangeLetter = (z) => {   // z is value that comes from onClick method on <p>
    setLetter(z)
  };

  return (
    <div className="byLetter flex justify-center items-center">
      {letters.map((element, i) => (
        <div className="letters " key={i}>
          <p
            className="mx-1 cursor-pointer hover:text-blue-500"
            //element.toUpperCase goes to onChangeLetter function and identifys as z
            onClick={() => onChangeLetter(element.toUpperCase())}> 
            {element.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ByLetter;
