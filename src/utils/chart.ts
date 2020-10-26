/**
 * 从records 中获取符合 chart 的数据结构
 * @param records 记录
 * @param xField x轴字段
 */
import { Record, Field } from '@airtable/blocks/models';

export const getChartData = (
  records: Record[],
  x: Field,
  y: Field,
  groupF?: Field
) => {
  return records.map((r) => {
    const group = groupF ? r.getCellValueAsString(groupF) : undefined;
    return {
      x: r.getCellValue(x),
      y: r.getCellValue(y),
      group: group,
    };
  });
};
