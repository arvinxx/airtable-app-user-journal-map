import React, { FC, useState } from 'react';
import { Box, useSettingsButton } from '@airtable/blocks/ui';
import { Settings, Chart, Flow } from './components';

import { useStore } from './store';

const App: FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  const { chartData } = useStore();

  useSettingsButton(() => {
    setShowSettings(!showSettings);
  });

  return (
    <Box display={'flex'} width={'100vw'} padding={'24px 8px'}>
      <Box style={{ width: showSettings ? 'calc(100% - 250px)' : '100%' }}>
        <Flow />
        <Box marginTop={3}>
          <Chart data={chartData} />
        </Box>
      </Box>
      {!chartData || showSettings ? (
        <Settings setShowSettings={setShowSettings} />
      ) : null}
    </Box>
  );
};

export default App;
