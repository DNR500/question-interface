import React from 'react';
import GlobalStyle from './global-style';
import { QuestionsView } from '../QuestionsView';
import { AppContainer, AppColumn } from './style';
import { questions } from '../../data/questions';
import { user } from '../../data/user';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <AppColumn>
        <QuestionsView questions={questions} userdata={user} />
      </AppColumn>
    </AppContainer>
  );
};

export default App;
