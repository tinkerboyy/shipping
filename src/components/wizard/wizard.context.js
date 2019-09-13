import React from 'react';

const WizardContext = React.createContext({});
export const WizardProvider = WizardContext.Provider;
export const WizardConsumer = WizardContext.Consumer;
export default WizardContext;
