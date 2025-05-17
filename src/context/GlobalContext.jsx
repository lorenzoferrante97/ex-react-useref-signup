import { createContext, useContext, useState, useRef } from 'react';
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [spec, setSpec] = useState('');
  const [expYears, setExpYears] = useState('');
  const [bio, setBio] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

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
        console.log(e.target.value);
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

  const value = { handleInput, fullName, username, password, spec, expYears, bio, isFormValid, formValidation };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
