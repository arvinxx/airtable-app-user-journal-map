import React, { FC } from 'react';
import { Chart, LineAdvance } from 'bizcharts';
import { Box } from '@airtable/blocks/ui';

interface LineChartProps {
  /**
   * 符合 chart结构的数据
   */
  data: any[];
}
const LineChart: FC<LineChartProps> = ({ data }) =>
  data ? (
    <Chart padding={40} autoFit height={300} data={data || []}>
      <LineAdvance shape="smooth" point area position="x*y" />
    </Chart>
  ) : (
    <Box flex={1}>请在右侧设置面板完成基础配置</Box>
  );

export default LineChart;
