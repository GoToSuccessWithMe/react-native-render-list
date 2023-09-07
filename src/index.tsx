import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import App from './navigation/App';
import {AppContextProvider} from './store/AppContext';

const RootApp: React.FC = () => (
  <AppContextProvider>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <App />
    </SafeAreaProvider>
  </AppContextProvider>
);

export default RootApp;
