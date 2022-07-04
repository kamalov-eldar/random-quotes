import { useEffect, useState } from 'react';
import Quote from './Quote';
import { useDispatch, useSelector } from 'react-redux';
import { actions, ActionsTypes, getRandomQuoteThunkCreator } from '../redux/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { AppStateType, DispatchType } from '../redux/store';
const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
];

const QuotesContainer: React.FC = () => {
  //  const [color, setColor] = useState('');
  const dispatch: DispatchType = useDispatch();
  console.log('QuotesContainer');

  useEffect(() => {
    dispatch(getRandomQuoteThunkCreator());
  }, [dispatch]);

  const randomQuote = useSelector((state: AppStateType) => {
    console.log('state: ', state);
    return state.quote;
  });

  const colorState = useSelector((state: AppStateType) => {
    //  console.log('state.color: ', state.color);
    return state.color;
  });

  useEffect(() => {
    const color = Math.floor(Math.random() * colors.length);
    // setColor(colors[color]);
    //  console.log('randomQuote.quote: ', Boolean(randomQuote.quote));
    // без проверки цвет меняется два раза
    if (Boolean(randomQuote.quote)) {
      dispatch(actions.setColorAC(colors[color]));
      document.body.style.color = `${colors[color]}`;
      document.body.style.backgroundColor = `${colors[color]}`;
      // вот это значение уже меняется?
    }
  }, [randomQuote]);

  function onClickNextQuote() {
    dispatch(getRandomQuoteThunkCreator());
  }

  return (
    <Quote
      bgColor={{ backgroundColor: colorState }}
      quote={randomQuote}
      onClickNextQuote={onClickNextQuote}
    />
  );
};

export default QuotesContainer;
