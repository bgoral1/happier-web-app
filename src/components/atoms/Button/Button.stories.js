import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const primary = () => <Button>Szukaj</Button>;
export const secondary = () => <Button secondary>Anuluj</Button>;
export const tertiary = () => <Button tertiary>Edytuj</Button>;
