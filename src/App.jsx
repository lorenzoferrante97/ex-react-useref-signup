// start code
// start code

import { useGlobalContext } from './context/GlobalContext';
import InputText from './components/InputText';
import Select from './components/Select';

function App() {
  const specializzazioni = ['Frontend', 'Backend', 'Full Stack'];

  const { handleInput, fullName, username, password, spec, expYears, bio } = useGlobalContext();

  return (
    <>
      <main id="main">
        <h1>Iscriviti</h1>
        <form className="form">
          <section>
            <div className="input-box">
              <InputText value={fullName} onChange={(e) => handleInput(e, 'fullname')} name="fullName" label="Nome Completo" placeholder="Franco Forte"></InputText>
            </div>
            <div className="input-box">
              <InputText value={username} onChange={(e) => handleInput(e, 'username')} name="username" label="Username" placeholder="Franco.Forte97"></InputText>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e) => handleInput(e, 'password')} name="password" type="password" min={8} />
            </div>
          </section>
          <section>
            <div className="input-box row">
              <div className="input-box">
                <label htmlFor="specializzazioni">Specializzazioni</label>
                <Select
                  value={spec}
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
              <textarea value={bio} onChange={(e) => handleInput(e, 'bio')} name="bio"></textarea>
            </div>
          </section>
        </form>
      </main>
    </>
  );
}

export default App;
