import {render, screen, cleanup} from '@testing-library/react'
import Button from '../Button';

afterEach(()=>{
  cleanup();  
})

test('should render a button with id=demoBtn and Label=<Take me to Demo>',()=>{
  render(<Button testid="demoBtn" label="Take me to Demo"/>)

  const buttonElem=screen.getByTestId("demoBtn");
  expect(buttonElem).toBeInTheDocument();
  expect(buttonElem).toHaveTextContent('Take me to Demo');
})