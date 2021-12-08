import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import "./styles.css";

function RadioButtons({ onChange, value }) {
  const [radioState, setRadioState] = React.useState();

  useEffect(() => {
    setRadioState("yes");
  }, []);

  return (
    <div>
      {[
        { name: "yes", value: true },
        { name: "no", value: false }
      ].map((option) => (
        <label key={option.name}>
          {option.name}:
          <input
            onChange={(e) => {
              setRadioState(e.target.value);
              onChange(e.target.value === "yes");
            }}
            type="radio"
            value={option.name}
            checked={option.name === radioState}
          />
        </label>
      ))}
    </div>
  );
}

export default function App() {
  const { control, watch, register } = useForm();
  console.log(watch());

  return (
    <form>
      <Controller
        name="radio"
        {...register("radio", { setValueAs: (v) => v === "true" })}
        control={control}
        render={({ ref, ...props }) => {
          return <RadioButtons {...props} />;
        }}
        defaultValue={true}
      />
    </form>
  );
}
