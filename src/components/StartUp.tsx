import React, { FC } from 'react';

import { Box, colors } from '@airtable/blocks/ui';
import { centerStyle } from './style';

interface StartUpProps {
  name: string;
}
const StartUp: FC<StartUpProps> = ({ name }) => (
  <Box
    flex={1}
    {...centerStyle}
    marginTop={2}
    marginBottom={2}
    backgroundColor={colors.GRAY_LIGHT_2}
    padding={4}
    borderRadius={4}
  >
    请在设置面板完成「{name}」的配置
  </Box>
);

export default StartUp;
