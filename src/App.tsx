import React, { FC } from 'react';
import { Box, useSettingsButton } from '@airtable/blocks/ui';
import { Settings, Chart, Flow, StartUp } from './components';

import { useStore } from './store';

const App: FC = () => {
  const {
    chartData,
    isFinishedFlow,
    isFinishedChart,
    showSettings,
    setShowSettings,
  } = useStore();

  useSettingsButton(() => {
    setShowSettings(!showSettings);
  });

  return (
    <Box display={'flex'} width={'100vw'}>
      <Box
        style={{ width: showSettings ? 'calc(100% - 250px)' : '100%' }}
        padding={'24px 8px'}
      >
        {isFinishedFlow ? <Flow /> : <StartUp name={'用户旅程'} />}
        {isFinishedChart ? (
          <Box marginTop={3}>
            <Chart data={chartData} />
          </Box>
        ) : (
          <StartUp name={'用户情绪'} />
        )}
      </Box>

      {!isFinishedFlow || !isFinishedChart || showSettings ? (
        <Settings />
      ) : null}
    </Box>
  );
};

export default App;
