import { useState } from 'react';
import { useBase } from '@airtable/blocks/ui';

const useSelectTable = (id: string = null) => {
  const base = useBase();
  const [tableId, setTableId] = useState(id);
  const table = base.getTableByIdIfExists(tableId);

  return { table, setTableId };
};

export default useSelectTable;
