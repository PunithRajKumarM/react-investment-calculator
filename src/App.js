import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

  const inputChangeHandler = (inputIdentifier, newValue) => {
    setUserInput((pre) => {
      return {
        ...pre,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput inputHandler={inputChangeHandler} userValue={userInput} />
      {inputValid ? (
        <Results input={userInput} />
      ) : (
        <p style={{ textAlign: "center", paddingTop: "1rem" }}>
          Please enter valid input
        </p>
      )}
    </>
  );
};
export default App;
