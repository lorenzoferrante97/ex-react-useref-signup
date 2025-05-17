import { createContext, useContext, useState, useCallback } from 'react';
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [spec, setSpec] = useState('');
  const [expYears, setExpYears] = useState('');
  const [bio, setBio] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);

  // validation symbols
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~';

  // validate char function
  const validateString = (string) => {
    for (const char of string) {
      console.log('char: ', char);
      if (!letters.includes(char.toLowerCase())) {
        if (!numbers.includes(char)) {
          return false;
        }
      }
    }

    return true;
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
        setSpec(e.target.value);
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

    const { fullName, username, password, spec, expYears, bio } = inputs;

    (fullName.length || username.length || password.length || expYears.length || bio.length) == 0 || !spec ? expYears < 0 && setIsFormValid(false) : console.table(inputs);
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

  const value = { handleInput, fullName, username, password, spec, expYears, bio, isUsernameValid, isFormValid, formValidation, validateUsername };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
