import React, { FC } from 'react';
import {
  TablePickerSynced,
  FieldPickerSynced,
  Box,
  FormField,
  Heading,
  Text,
  colors,
  Button,
} from '@airtable/blocks/ui';

import { useStore, storeKey } from '../store';

interface SettingsProps {
  setShowSettings: (value: boolean) => void;
}
const Settings: FC<SettingsProps> = ({ setShowSettings }) => {
  const { table, reset, isConfigFinished } = useStore();

  return (
    <Box
      zIndex={100}
      backgroundColor={'white'}
      width={250}
      padding={3}
      height={'100vh'}
      borderLeft={'1px solid'}
      borderColor={colors.GRAY_LIGHT_2}
    >
      <Heading as={'h3'}>设置</Heading>
      <Text textColor={colors.GRAY} marginBottom={3}>
        请选择需要展示体验得分的表格与横纵坐标, 完成后点击确定
      </Text>
      <FormField label="表格">
        <TablePickerSynced
          placeholder={'请选择用户旅程地图...'}
          globalConfigKey={storeKey.TABLE_ID}
        />
      </FormField>
      <Heading as={'h6'}>用户旅程</Heading>
      <FormField label="旅程阶段">
        <FieldPickerSynced
          table={table}
          placeholder={'请选择旅程阶段...'}
          globalConfigKey={storeKey.ACTION_FIELD_ID}
        />
      </FormField>
      <FormField label="用户行为">
        <FieldPickerSynced
          table={table}
          placeholder={'请选择用户行为...'}
          globalConfigKey={storeKey.PHASE_FIELD_ID}
        />
      </FormField>
      <Heading as={'h6'}>体验得分图</Heading>
      {table && (
        <FormField label="用户行为 (X轴)">
          <FieldPickerSynced
            table={table}
            placeholder={'请选择用户行为...'}
            globalConfigKey={storeKey.X_FIELD_ID}
          />
        </FormField>
      )}
      {table && (
        <FormField label="用户情绪 (Y轴)">
          <FieldPickerSynced
            table={table}
            placeholder={'请选择用户情绪...'}
            globalConfigKey={storeKey.Y_FIELD_ID}
          />
        </FormField>
      )}
      {isConfigFinished ? (
        <Box marginTop={4} display={'flex'} flexDirection={'row-reverse'}>
          <Button
            variant={'primary'}
            marginLeft={2}
            onClick={() => {
              setShowSettings(false);
            }}
          >
            关闭
          </Button>
          <Button variant={'default'} onClick={reset}>
            重置
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

export default Settings;
