import Input from "./Input";

function UserInput({ inputHandler, userValue }) {
  return (
    <section>
      <Input
        inputHandler={(e) => {
          inputHandler("initialInvestment", e.target.value);
        }}
        userValue={userValue.initialInvestment}
      >
        Initial Investment
      </Input>
      <Input
        inputHandler={(e) => {
          inputHandler("annualInvestment", e.target.value);
        }}
        userValue={userValue.annualInvestment}
      >
        Annual Investment
      </Input>
      <Input
        inputHandler={(e) => {
          inputHandler("expectedReturn", e.target.value);
        }}
        userValue={userValue.expectedReturn}
      >
        Expected Return
      </Input>
      <Input
        inputHandler={(e) => {
          inputHandler("duration", e.target.value);
        }}
        userValue={userValue.duration}
      >
        Duration
      </Input>
    </section>
  );
}

export default UserInput;
