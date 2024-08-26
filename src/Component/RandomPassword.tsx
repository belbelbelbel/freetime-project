import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { combinedArray } from "../Utils/ArrayData";

export const RandomPassword = () => {
  const [randomPassword, setRandomPassword] = useState("");
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeLower, setIncludeLower] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(10);
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "?"];
  const getRandomElement = (array:any) => array[Math.floor(Math.random() * array.length)];
  const generatePassword = () => {
    let charArray:any = [];
    if (includeUpper) {
      charArray = [...charArray, ...combinedArray.filter(c => c >= 'A' && c <= 'Z')];
    }
    if (includeLower) {
      charArray = [...charArray, ...combinedArray.filter(c => c >= 'a' && c <= 'z')];
    }
    if (includeNumbers) {
      charArray = [...charArray, ...combinedArray.filter(c => c >= '0' && c <= '20')];
    }
    if (includeSymbols) {
      charArray = [...charArray, ...symbols];
    }

    if (charArray.length > 0) {
      let newPassword = '';
      for (let i = 0; i < passwordLength; i++) {
        newPassword += getRandomElement(charArray);
      }
      setRandomPassword(newPassword);
    } else {
      setRandomPassword('');
    }
  };
  
  return (
    <div className='w-screen flex flex-col justify-center gap-3 items-center h-screen bg-black text-black'>
      <div className='text-white text-[2.5vw]'>Password Generator</div>
      <div className='h-[60%] flex flex-col gap-3 w-[40%] mx-auto bg-white shadow-lg'>
        <div className='flex items-center justify-between py-2 w-[80%] mx-auto'>
          <div className='text-[1.8vw] text-center items-center justify-center flex'>
            {randomPassword ? (
              <div className='flex items-center gap-2 text-[1.5vw]'>
                <div>{randomPassword}</div>
                <div><FaRegCopy className='cursor-pointer text-[1.7vw]' /></div>
              </div>
            ) : (
              <div className='text-[1.5vw]'>No Password generated yet</div>
            )}
          </div>
        </div>
        <div className='w-full h-[10%] bg-black'></div>
        <div className='w-[80%] mx-auto flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <div>Character Length</div>
            <div className='text-[2vw]'>{passwordLength}</div>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className='w-full cursor-pointer'
          />
          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
            />
            <div>Include Uppercase Letters</div>
          </div>
          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
            />
            <div>Include Lowercase Letters</div>
          </div>
          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <div>Include Numbers</div>
          </div>
          <div className='flex items-center gap-4'>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <div>Include Symbols</div>
          </div>
        </div>
        <div className='w-[80%] mx-auto'>
          <button
            className='w-full border-2 border-black py-3 tracking-[1px] rounded-[5px] text-[1.6vw] hover:bg-black hover:text-white hover:border-none'
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};
