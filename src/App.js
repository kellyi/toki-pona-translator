import { useState } from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import translate from './translate';

import './App.css';

const DEFAULT_INPUT_STRING = '';
const TEXT_AREA_ROWS = 10;

function App() {
  const [stringToTranslate, setStringToTranslate] = useState(DEFAULT_INPUT_STRING);

  const handleInputChange = (e) => {
    const updatedInput = _.get(e, 'target.value');

    setStringToTranslate(updatedInput);
  };

  const resetInput = () => setStringToTranslate(DEFAULT_INPUT_STRING);

  const translation = translate(stringToTranslate);

  return (
    <main className="App">
      <div className="header">
        <Typography variant="h5" align="center">
          toki-pona-translator
        </Typography>
      </div>
      <div className="textFieldContainer">
        <TextField
          autoFocus
          label="Toki Pona"
          id="english-input"
          value={stringToTranslate}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          multiline
          rows={TEXT_AREA_ROWS}
          rowsMax={TEXT_AREA_ROWS}
        />
        <div className="spacer"></div>
        <TextField
          label="English"
          id="toki-pona-output"
          value={translation}
          disabled
          variant="outlined"
          fullWidth
          multiline
          rows={TEXT_AREA_ROWS}
          rowsMax={TEXT_AREA_ROWS}
        />
      </div>
      <div className="buttonContainer">
        <CopyToClipboard text={translation}>
          <Button
            color="primary"
            variant="contained"
            disableElevation
          >
            Copy translation
          </Button>
        </CopyToClipboard>
        <Button
          onClick={resetInput}
          color="secondary"
          variant="contained"
          disableElevation
        >
          Reset
        </Button>
      </div>
      <div class="links">
        <a href="https://tokipona.org/" rel="noopener noreferrer" target="_blank">
          (Toki Pona)
        </a>
        {` `}
        <a href="https://github.com/kellyi/toki-pona-translator" rel="noopener noreferrer" target="_blank">
          (GitHub)
        </a>
      </div>
    </main>
  );
}

export default App;
