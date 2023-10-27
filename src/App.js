import { CORE_CONCEPTS, EXAMPLES } from './util/data'
import Header from './components/Header'
import TabButton from './components/TabButton';
import CoreConcept from './components/CoreConcept';
import { useState } from 'react';

function App() {

  const [tabContent, setTabContent] = useState()
  function handleClick(selectedButton) {
    setTabContent(selectedButton)
    console.log(tabContent)
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Start APP</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {!tabContent ? <p>Please click a button</p> :
            <div id='tab-content'>
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
