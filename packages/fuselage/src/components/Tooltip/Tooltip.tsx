import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import Box from '../Box';
import tooltipStyleSheet from './Tooltip.styles.scss';

const parsePlacement = (placement: string | null | undefined) => {
  const [direction, position] = placement
    ? placement.split('-')
    : [false, false];

  if (direction === 'right' || direction === 'left') {
    return [direction, false];
  }

  return [direction, position];
};

type TooltipProps = ComponentProps<typeof Box> & {
  variation?: 'dark' | 'light';
  placement?:
    | 'top-start'
    | 'top-middle'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-middle'
    | 'bottom-end'
    | 'top'
    | 'left'
    | 'bottom'
    | 'right'
    | null;
};

const Tooltip = forwardRef(function Tooltip(
  { variation = 'dark', placement, ...props }: TooltipProps,
  ref: Ref<HTMLElement>
) {
  useStyleSheet();
  useStyleSheet(tooltipStyleSheet);

  const [direction, position] = parsePlacement(placement);

  return (
    <Box
      is='div'
      ref={ref}
      rcx-tooltip
      rcx-tooltip--dir={direction}
      rcx-tooltip--pos={position}
      rcx-tooltip--light={variation === 'light'}
      rcx-tooltip--dark={variation === 'dark'}
      {...props}
    />
  );
});

export default Tooltip;
