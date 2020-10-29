import React, { FC } from 'react';
import { Box, Text } from '@airtable/blocks/ui';
import { useStore } from '../store';
import { FieldType } from '@airtable/blocks/models';
import { FieldOptions } from '@airtable/blocks/dist/types/src/types/field';
import { centerStyle } from './style';
import Stage from './Stage';

interface Option {
  color: string;
  id: string;
  name: string;
}
interface FieldOption extends FieldOptions {
  choices: Option[];
}

interface FlowProps {}

const Flow: FC<FlowProps> = () => {
  const { phaseField, records } = useStore();

  const choices = (phaseField?.options as FieldOption)?.choices;

  return (
    <Box flex={1} display={'flex'}>
      <Box width={40}>
        <Stage height={48}>阶段</Stage>
        <Box marginTop={3}>
          <Stage height={120}>用户行为</Stage>
        </Box>
      </Box>
      <Box flex={1} display={'flex'}>
        {phaseField && phaseField.type === FieldType.SINGLE_SELECT
          ? choices.map((option, index) => {
              // TODO 没选 actions 的情况
              const actions = records.filter(
                (r) => (r.getCellValue(phaseField) as Option)?.id === option.id
              );

              return (
                <Box key={option.id} width={`${100 / choices.length}%`}>
                  <Box
                    height={48}
                    marginLeft={1}
                    marginRight={1}
                    backgroundColor={option.color}
                    borderRadius={4}
                    padding={2}
                  >
                    <Text
                      {...centerStyle}
                      textColor={'GrayText'}
                      fontSize={16}
                      height={'32px'}
                      lineHeight={'32px'}
                    >
                      {option.name}
                    </Text>
                  </Box>

                  <Box display={'flex'} height={120} marginTop={'24px'}>
                    {actions?.map((action, aIndex) => (
                      <Box
                        key={action.id}
                        flexWrap={'nowrap'}
                        marginLeft={index === 0 && aIndex === 0 ? 1 : 0}
                        marginRight={
                          index === choices?.length - 1 &&
                          aIndex === actions?.length - 1
                            ? 1
                            : 0
                        }
                        width={`${100 / actions.length}%`}
                        display={'flex'}
                        justifyContent={'center'}
                        borderTop={'3px solid'}
                        borderColor={option.color}
                        position={'relative'}
                        style={{
                          strokeLinecap: 'round',
                        }}
                      >
                        <Box
                          borderRadius={10}
                          width={10}
                          height={10}
                          position={'absolute'}
                          backgroundColor={option.color}
                          top={'-6px'}
                        />
                        <Text
                          style={{
                            writingMode: 'vertical-lr',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            margin: 0,
                            marginTop: 12,
                          }}
                          textColor={'GrayText'}
                        >
                          {action.name}
                        </Text>
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            })
          : null}
      </Box>
    </Box>
  );
};

export default Flow;
