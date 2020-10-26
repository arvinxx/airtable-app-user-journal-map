import React, { FC } from 'react';
import { useGlobalConfig, useRecords, useBase } from '@airtable/blocks/ui';
import { Settings, Chart } from './components';

import { getChartData } from './utils';

export const GlobalConfigKeys = {
  TABLE_ID: 'tableId',
  VIEW_ID: 'viewId',
  X_FIELD_ID: 'xFieldId',
  Y_FIELD_ID: 'yFieldId',
  GROUP_FIELD_ID: 'groupFieldId',
};

const App: FC = () => {
  const base = useBase();
  const globalConfig = useGlobalConfig();
  const tableId = globalConfig.get(GlobalConfigKeys.TABLE_ID) as string;
  const table = base.getTableByIdIfExists(tableId);

  const viewId = globalConfig.get(GlobalConfigKeys.VIEW_ID) as string;
  const view = table ? table.getViewByIdIfExists(viewId) : null;

  const xFieldId = globalConfig.get(GlobalConfigKeys.X_FIELD_ID) as string;
  const xField = table ? table.getFieldByIdIfExists(xFieldId) : null;

  const yFieldId = globalConfig.get(GlobalConfigKeys.Y_FIELD_ID) as string;
  const yField = table ? table.getFieldByIdIfExists(yFieldId) : null;

  const groupFieldId = globalConfig.get(
    GlobalConfigKeys.GROUP_FIELD_ID
  ) as string;
  const groupField = table ? table.getFieldByIdIfExists(groupFieldId) : null;

  const records = useRecords(view);

  const data =
    records && xField && yField
      ? getChartData(records, xField, yField, groupField)
      : null;

  return (
    <div>
      <Settings table={table} />
      <Chart data={data} />
    </div>
  );
};

export default App;
