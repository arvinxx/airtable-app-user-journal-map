import { useBase, useGlobalConfig, useRecords } from '@airtable/blocks/ui';
import { getChartData } from './utils';
import { useState } from 'react';

export const storeKey = {
  TABLE_ID: 'TABLE_ID',
  X_FIELD_ID: 'X_FIELD_ID',
  Y_FIELD_ID: 'Y_FIELD_ID',
  SHOW_SETTINGS: 'SHOW_SETTINGS',
};

export const useStore = () => {
  const base = useBase();
  const globalConfig = useGlobalConfig();

  const tableId = globalConfig.get(storeKey.TABLE_ID) as string;
  const table = base.getTableByIdIfExists(tableId);

  const xFieldId = globalConfig.get(storeKey.X_FIELD_ID) as string;
  const xField = table ? table.getFieldByIdIfExists(xFieldId) : null;

  const yFieldId = globalConfig.get(storeKey.Y_FIELD_ID) as string;
  const yField = table ? table.getFieldByIdIfExists(yFieldId) : null;

  const records = useRecords(table);

  const data =
    records && xField && yField ? getChartData(records, xField, yField) : null;

  return {
    /**
     * 全局配置参数
     */
    globalConfig,
    /**
     * 需要制图的表格ID
     *
     */
    table,
    /**
     * X 轴字段
     */
    xField,
    /**
     * Y 轴字段
     */
    yField,
    /**
     * 重置所有字段
     */
    reset: () => {
      globalConfig.setAsync(storeKey.TABLE_ID, '').finally();
      globalConfig.setAsync(storeKey.X_FIELD_ID, '').finally();
      globalConfig.setAsync(storeKey.Y_FIELD_ID, '').finally();
    },
    /**
     * 渲染图表的数据
     */
    chartData: data,
    /**
     * 是否完成了配置
     */
    isConfigFinished: !!(table && xField && yField),
  };
};
