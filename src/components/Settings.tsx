import React, { FC } from 'react';
import { TablePicker } from '@airtable/blocks/ui';
import { Table } from '@airtable/blocks/models';

interface SettingsProps {
  table: Table;
  setTableId: (tableStr: string) => void;
}
const Settings: FC<SettingsProps> = ({ table, setTableId }) => {
  return (
    <div>
      <TablePicker
        table={table}
        onChange={(newTable) => {
          setTableId(newTable.id);
        }}
      />
    </div>
  );
};

export default Settings;
