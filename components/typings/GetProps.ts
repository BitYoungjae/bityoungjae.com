import React from 'react';

export type GetProps<T> = T extends React.FC<infer R>
  ? R
  : T extends React.Component<infer U>
  ? U
  : never;
