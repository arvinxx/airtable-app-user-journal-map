import React, { FC } from 'react';
import { Chart, LineAdvance } from 'bizcharts';

interface LineChartProps {
  /**
   * 符合 chart结构的数据
   */
  data: any[];
}
const LineChart: FC<LineChartProps> = ({ data }) => (
  <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={data || []}>
    <LineAdvance
      shape="smooth"
      point
      area
      position="x*y"
      // color="group"
    />
  </Chart>
);

export default LineChart;
