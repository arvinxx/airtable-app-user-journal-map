import React, { FC, useState } from 'react';
import { Box, useSettingsButton } from '@airtable/blocks/ui';
import { Settings, Chart } from './components';

import { useStore } from './store';

const App: FC = () => {
  const [showSettings, setShowSettings] = useState(true);

  const { chartData } = useStore();

  useSettingsButton(() => {
    setShowSettings(!showSettings);
  });

  console.log(showSettings);

  return (
    <Box display={'flex'} width={'100vw'}>
      <Box style={{ width: showSettings ? 'calc(100vw - 250px)' : '100vw' }}>
        <Chart data={chartData} />
      </Box>
      {showSettings ? <Settings setShowSettings={setShowSettings} /> : null}
    </Box>
  );
};

export default App;
