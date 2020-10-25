import React, { useState } from 'react';
import './App.css';
import { PROGRESSIONS, downloadChart } from './chords';
import fromPairs from 'lodash/fromPairs';

function App() {
  const [selected, setSelected] = useState(fromPairs(PROGRESSIONS.map(p => [p.label, true])))

  return (
    <div className="root">
      <form>
        {PROGRESSIONS.map(progression => (
          <label key={progression.label}>
            <input
              type="checkbox"
              checked={selected[progression.label]}
              onChange={e => setSelected({...selected, [progression.label]: e.target.checked})}
            />
            {progression.label}
          </label>
        ))}
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            downloadChart(PROGRESSIONS.filter(p => selected[p.label]));
          }}
          disabled={!Object.values(selected).some(v => v)}
        >
          Download Chart to iReal Pro
        </button>
      </form>
    </div>
  );
}

export default App;
