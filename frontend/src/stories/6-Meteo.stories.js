import React from 'react';
import { action } from '@storybook/addon-actions';
import Meteo from '../composents/Weather';
import "bootstrap/dist/css/bootstrap.min.css";
import { Divider } from '@material-ui/core';

export default {
  title: 'Meteo',
};

export const Widget = () => <Meteo></Meteo>;

export const Déscription = () => (
  
    <div>
      Les ecriture sont invisible lorsque le widget est lancé sur storybook mais il fonctionne tout de même. Dans la version normale tout fonctionne bien
    </div>
  
);

