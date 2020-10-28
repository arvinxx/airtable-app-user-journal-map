import { AllStylesProps } from '@airtable/blocks/dist/types/src/ui/system';
import { CSSProperties } from 'react';
import { colors } from '@airtable/blocks/ui';

interface StyleProps extends AllStylesProps {
  style?: CSSProperties;
}

/**
 *
 */
export const blockStyle: StyleProps = {
  display: 'flex',
  justifyContent: 'center',
  padding: 2,
  backgroundColor: colors.GRAY_LIGHT_2,
  borderRadius: 4,
  alignItems: 'center',
  marginRight: 2,
};
/**
 *
 */
export const centerStyle: StyleProps = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
};
/**
 *
 */
export const textStyle: StyleProps = {
  textColor: 'GrayText',
  fontSize: 12,
  margin: 0,
  style: {
    writingMode: 'vertical-lr',
  },
};
