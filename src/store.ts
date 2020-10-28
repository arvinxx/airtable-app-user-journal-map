import { useBase, useGlobalConfig, useRecords } from '@airtable/blocks/ui';
import { getChartData } from './utils';

export const storeKey = {
  TABLE_ID: 'TABLE_ID',
  MOTION_FIELD_ID: 'MOTION_FIELD_ID',
  PHASE_FIELD_ID: 'PHASE_FIELD_ID',
  ACTION_FIELD_ID: 'ACTION_FIELD_ID',
  SHOW_SETTINGS: 'SHOW_SETTINGS',
};

export const useStore = () => {
  const base = useBase();
  const globalConfig = useGlobalConfig();

  const showSettings =
    (globalConfig.get(storeKey.SHOW_SETTINGS) as boolean) || false;

  const tableId = globalConfig.get(storeKey.TABLE_ID) as string;
  const table = base.getTableByIdIfExists(tableId);

  const phaseFieldId = globalConfig.get(storeKey.PHASE_FIELD_ID) as string;
  const phaseField = table?.getFieldByIdIfExists(phaseFieldId);

  const actionFieldId = globalConfig.get(storeKey.ACTION_FIELD_ID) as string;
  const actionField = table?.getFieldByIdIfExists(actionFieldId);

  const motionFieldId = globalConfig.get(storeKey.MOTION_FIELD_ID) as string;
  const motionField = table ? table.getFieldByIdIfExists(motionFieldId) : null;

  const records = useRecords(table);

  const data =
    records && actionField && motionField
      ? getChartData(records, actionField, motionField)
      : null;

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
     * 地图所有记录
     */
    records,

    /**
     * 情绪字段
     */
    motionField,
    /**
     * 阶段字段
     */
    phaseField,
    /**
     * 行为字段
     */
    actionField,
    /**
     * 重置所有字段
     */
    reset: () => {
      globalConfig.setAsync(storeKey.TABLE_ID, '').finally();
      globalConfig.setAsync(storeKey.ACTION_FIELD_ID, '').finally();
      globalConfig.setAsync(storeKey.MOTION_FIELD_ID, '').finally();
      globalConfig.setAsync(storeKey.PHASE_FIELD_ID, '').finally();
    },
    /**
     * 渲染图表的数据
     */
    chartData: data,
    /**
     * 是否完成了配置
     */
    isConfigFinished: !!(table && motionField && phaseField && actionField),
    /**
     * 是否配置完成了 Flow
     */
    isFinishedFlow: !!(table && phaseField && actionField),
    /**
     * 是否配置完成了 Chart
     */
    isFinishedChart: !!(table && actionField && motionField),
    /**
     * 是否显示设置面板
     */
    showSettings,
    /**
     * 设置显示用户面板
     * @param value
     */
    setShowSettings: (value: boolean) => {
      globalConfig.setAsync(storeKey.SHOW_SETTINGS, value).catch((e) => {
        console.log(e);
      });
    },
  };
};
