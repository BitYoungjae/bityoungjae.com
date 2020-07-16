import React from 'react';

export type GetProps<T> = T extends React.Component<infer R>
  ? R
  : T extends React.FC<infer U>
  ? U
  : never;
