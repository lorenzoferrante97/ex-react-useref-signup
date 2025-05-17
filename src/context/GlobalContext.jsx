import { createContext, useContext, useState, useCallback, useRef } from 'react';
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [spec, setSpec] = useState('');

  const specRef = useRef('default');

  const [expYears, setExpYears] = useState('');
  const [bio, setBio] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPswValid, setIsPswValid] = useState(true);
  const [isBioValid, setIsBioValid] = useState(true);

  // validation symbols
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~';

  // validate char function
  const validateString = (string) => {
    for (const char of string) {
      if (!letters.includes(char.toLowerCase())) {
        if (!numbers.includes(char)) {
          return false;
        }
      }
    }

    return true;
  };

  // validate char function
  const validatePsw = (string) => {
    let isLetter,
      isNumber,
      isSymbol = false;
    for (const char of string) {
      if (!isLetter) {
        letters.includes(char.toLowerCase()) && (isLetter = true);
      }
      if (!isNumber) {
        numbers.includes(char) && (isNumber = true);
      }
      if (!isSymbol) {
        symbols.includes(char) && (isSymbol = true);
      }
    }

    if (isLetter && isNumber && isSymbol) {
      return true;
    } else {
      return false;
    }
  };

  // debounce
  const debounce = (callback, delay) => {
    let timeout;

    return (value) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => callback(value), delay);
    };
  };

  const handleInput = (e, type) => {
    switch (type) {
      case 'fullname':
        setFullName(e.target.value);
        break;
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'spec':
        // console.log(e.target.value);
        // setSpec(e.target.value);
        specRef.current = e.target.value;
        console.log('specRef: ', specRef.current);
        break;
      case 'expYears':
        setExpYears(e.target.value);
        break;
      case 'bio':
        setBio(e.target.value);
        break;
    }
  };

  // form validation
  const formValidation = (e, inputs) => {
    e.preventDefault();

    const { fullName, username, password, specRef, expYears, bio } = inputs;
    console.log('inputs: ', inputs);

    (fullName.length || username.length || password.length || expYears.length || bio.length) == 0 || specRef.current == 'default' || expYears < 0 ? setIsFormValid(false) : console.table(inputs);
  };

  // username validation
  const validateUsername = useCallback(
    debounce((username) => {
      const isStringValid = validateString(username);
      // console.log('isStringValid: ', isStringValid);
      username.length < 6 || isStringValid == false ? setIsUsernameValid(false) : setIsUsernameValid(true);
    }, 500),
    []
  );

  // psw validation
  const validatePassword = useCallback(
    debounce((psw) => {
      // console.log('isStringValid: ', isStringValid);
      const isPswValid = validatePsw(psw);
      // console.log('isPswValid (context): ', isPswValid);

      psw.length < 8 || isPswValid == false ? setIsPswValid(false) : setIsPswValid(true);
    }, 500),
    []
  );

  // bio validation
  const validateBio = useCallback(
    debounce((bio) => {
      bio.trim().length < 100 || bio.trim().length > 1000 ? setIsBioValid(false) : setIsBioValid(true);
    }, 500),
    []
  );

  const value = { handleInput, fullName, username, password, specRef, expYears, bio, isUsernameValid, isFormValid, formValidation, validateUsername, validatePassword, isPswValid, validateBio, isBioValid };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
