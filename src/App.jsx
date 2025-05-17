// start code
// start code

import { useGlobalContext } from './context/GlobalContext';
import InputText from './components/InputText';
import Select from './components/Select';

function App() {
  const specializzazioni = ['Frontend', 'Backend', 'Full Stack'];

  const { handleInput, fullName, username, password, specRef, expYears, bio, isFormValid, formValidation, isUsernameValid, validateUsername, validatePassword, isPswValid, validateBio, isBioValid } = useGlobalContext();

  const inputs = { fullName, username, password, specRef, expYears, bio };

  return (
    <>
      <main id="main">
        <h1>Iscriviti</h1>
        <form onSubmit={(e) => formValidation(e, inputs)} className="form">
          <section>
            <div className="input-box">
              <InputText value={fullName} onChange={(e) => handleInput(e, 'fullname')} name="fullName" label="Nome Completo" placeholder="Franco Forte"></InputText>
            </div>
            <div className="input-box">
              <InputText
                value={username}
                onChange={(e) => {
                  handleInput(e, 'username');
                  validateUsername(e.target.value);
                }}
                name="username"
                label="Username"
                placeholder="Franco.Forte97"
              ></InputText>

              {!isUsernameValid ? <p className="error">L'username deve avere almeno 6 caratteri e devono essere lettere o numeri</p> : isUsernameValid && username != '' && <p className="success">Corretto!</p>}
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => {
                  handleInput(e, 'password');
                  validatePassword(e.target.value);
                }}
                name="password"
                type="password"
                min={8}
              />

              {!isPswValid ? <p className="error">La password deve avere minimo 8 caratteri e almeno una lettera, un numero e un simbolo</p> : isPswValid && password != '' && <p className="success">Corretto!</p>}
            </div>
          </section>
          <section>
            <div className="input-box row">
              <div className="input-box">
                <label htmlFor="specializzazioni">Specializzazioni</label>
                <Select
                  value={specRef.current}
                  onChange={(e) => {
                    handleInput(e, 'spec');
                  }}
                  name="specializzazioni"
                  options={specializzazioni}
                />
              </div>
              <div className="input-box">
                <label htmlFor="anniEsp">Anni di esperienza</label>
                <input value={expYears} onChange={(e) => handleInput(e, 'expYears')} name="anniEsp" type="number" min={0} />
              </div>
            </div>
          </section>
          <section>
            <div className="input-box">
              <label htmlFor="bio">Una breve introduzione di te</label>
              <textarea
                value={bio}
                onChange={(e) => {
                  handleInput(e, 'bio');
                  validateBio(e.target.value);
                }}
                name="bio"
              ></textarea>

              {!isBioValid ? <p className="error">La bio deve avere tra i 100 e i 1000 caratteri</p> : isBioValid && bio != '' && <p className="success">Corretto!</p>}
            </div>
          </section>
          <section>
            <button type="submit">Invia dati</button>
            <div>{!isFormValid && <p>Necessario compilare tutti i campi del form per proseguire</p>}</div>
          </section>
        </form>
      </main>
    </>
  );
}

export default App;
