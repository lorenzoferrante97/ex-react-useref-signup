// start code
// start code

import { useGlobalContext } from './context/GlobalContext';
import InputText from './components/InputText';
import Select from './components/Select';

function App() {
  const specializzazioni = ['Frontend', 'Backend', 'Full Stack'];

  return (
    <>
      <main id="main">
        <h1>Iscriviti</h1>
        <form className="form">
          <section>
            <div className="input-box">
              <InputText name="fullName" label="Nome Completo" placeholder="Franco Forte"></InputText>
            </div>
            <div className="input-box">
              <InputText name="username" label="Username" placeholder="Franco.Forte97"></InputText>
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" min={8} />
            </div>
          </section>
          <section>
            <div className="input-box row">
              <div className="input-box">
                <label htmlFor="specializzazioni">Specializzazioni</label>
                <Select name="specializzazioni" options={specializzazioni} />
              </div>
              <div className="input-box">
                <label htmlFor="anniEsp">Anni di esperienza</label>
                <input name="anniEsp" type="number" min={0} />
              </div>
            </div>
          </section>
          <section>
            <div className="input-box">
              <label htmlFor="bio">Una breve introduzione di te</label>
              <textarea name="bio"></textarea>
            </div>
          </section>
        </form>
      </main>
    </>
  );
}

export default App;
