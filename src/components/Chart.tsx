import React, { FC } from 'react';
import { Chart, LineAdvance } from 'bizcharts';
import { Box } from '@airtable/blocks/ui';
import Stage from './Stage';

interface LineChartProps {
  /**
   * 符合 chart结构的数据
   */
  data: any[];
}
const LineChart: FC<LineChartProps> = ({ data }) =>
  data ? (
    <Box display={'flex'}>
      <Box width={40}>
        <Stage height={300}>体验情绪</Stage>
      </Box>
      <Box width={'100%'}>
        <Chart autoFit height={300} data={data || []}>
          <LineAdvance
            // label={{}}
            shape="smooth"
            point
            area
            position="x*y"
          />
        </Chart>
      </Box>
    </Box>
  ) : (
    <Box flex={1}>请在右侧设置面板完成基础配置</Box>
  );

export default LineChart;
