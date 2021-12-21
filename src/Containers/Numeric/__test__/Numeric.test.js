import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import Numeric from '../Numeric';

afterEach(()=>{
  cleanup();  
})




test('should render two buttons and initial value zero',()=>{
    render(<Numeric/>);
const inc=screen.getByTestId("inc");
const dec=screen.getByTestId("dec");
const val=screen.getByTestId("val");
  expect(inc).toBeInTheDocument();
  expect(dec).toBeInTheDocument();
  expect(val).toBeInTheDocument();
  expect(val).toHaveTextContent(0);
});

test("Value increases by one when + button is clicked",()=>{
    render(<Numeric/>);
const inc=screen.getByTestId("inc");
const val=screen.getByTestId("val");
    fireEvent.click(inc);
    expect(val).toHaveTextContent("1");
})


test("Value decreases by one when + button is clicked",()=>{
    render(<Numeric/>);
const dec=screen.getByTestId("dec");
const val=screen.getByTestId("val");
    fireEvent.click(dec);
    expect(val).toHaveTextContent("-1");
})