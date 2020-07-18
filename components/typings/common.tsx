import React from 'react';
import Link from 'next/link';

export type GetProps<T> = T extends React.Component<infer R>
  ? R
  : T extends React.FC<infer U>
  ? U
  : never;

export interface IUseLink {
  linkProps: GetProps<Link>;
}
