import React, { FC } from 'react';
import { Box, Text } from '@airtable/blocks/ui';

import { blockStyle, textStyle } from './style';

interface StageProps {
  height: number;
}
const Stage: FC<StageProps> = ({ children, height }) => {
  return (
    <Box height={height} {...blockStyle}>
      <Text {...textStyle}>{children}</Text>
    </Box>
  );
};

export default Stage;
