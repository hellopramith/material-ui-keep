import React from 'react';
import ReactDom from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import KeepNotes from './component/KeepNotes';

ReactDom.render(
    <KeepNotes />, document.getElementById('root')
);

registerServiceWorker();
