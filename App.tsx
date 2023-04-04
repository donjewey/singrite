/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import TrackContainer from './containers/TrackContainer';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return <TrackContainer></TrackContainer>;
}

export default App;
