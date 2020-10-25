import { useState } from 'react';
import { useBase } from '@airtable/blocks/ui';

const useSelectTable = () => {
  const base = useBase();
  const [tableId, setTableId] = useState(null);
  const table = base.getTableByIdIfExists(tableId);

  return { table, setTableId };
};

export default useSelectTable;
