import React from 'react';

export interface SwitchProps {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  checkedIcon: React.ReactNode;
  uncheckedIcon: React.ReactNode;
  checked: boolean;
}
