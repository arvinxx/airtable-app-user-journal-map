import {
  TablePickerSynced,
  ViewPickerSynced,
  FieldPickerSynced,
  Box,
  FormField,
} from '@airtable/blocks/ui';
import React from 'react';

import { GlobalConfigKeys } from '../App';

const width = '20%';
const Settings = ({ table }) => {
  return (
    <div>
      <Box display="flex" padding={3} borderBottom="thin">
        <FormField label="表格" width={width} paddingRight={1} marginBottom={0}>
          <TablePickerSynced globalConfigKey={GlobalConfigKeys.TABLE_ID} />
        </FormField>
        {table && (
          <FormField label="视图" width={width} paddingX={1} marginBottom={0}>
            <ViewPickerSynced
              table={table}
              globalConfigKey={GlobalConfigKeys.VIEW_ID}
            />
          </FormField>
        )}
        {table && (
          <FormField label="X轴" width={width} paddingLeft={1} marginBottom={0}>
            <FieldPickerSynced
              table={table}
              globalConfigKey={GlobalConfigKeys.X_FIELD_ID}
            />
          </FormField>
        )}
        {table && (
          <FormField label="Y轴" width={width} paddingLeft={1} marginBottom={0}>
            <FieldPickerSynced
              table={table}
              globalConfigKey={GlobalConfigKeys.Y_FIELD_ID}
            />
          </FormField>
        )}
        {table && (
          <FormField
            label="阶段"
            width={width}
            paddingLeft={1}
            marginBottom={0}
          >
            <FieldPickerSynced
              table={table}
              globalConfigKey={GlobalConfigKeys.GROUP_FIELD_ID}
            />
          </FormField>
        )}
      </Box>
    </div>
  );
};

export default Settings;
