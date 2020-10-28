import { Record, Field } from '@airtable/blocks/models';

/**
 * 从records 中获取符合 chart 的数据结构
 * @param records 记录
 * @param x
 * @param y
 */
export const getChartData = (records: Record[], x: Field, y: Field) => {
  return records.map((r) => {
    return {
      x: r.getCellValue(x),
      y: r.getCellValue(y),
    };
  });
};
