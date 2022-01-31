import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { Headline4 } from "../../common/typography";

export const Headline4Style = styled(Headline4)`
  margin: 0 auto;
`;

type FormData = {
  qna_category: string;
  name: string;
  phoneNumber: string;
  email: string;
  title: string;
  messgae: string;
  checked: boolean;
};

const QnaForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <>
      <div>
        <Headline4>궁금한 점이 있으신가요?</Headline4>
      </div>
      <form onSubmit={onSubmit}>
        <section>
          <label>Radio Group</label>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label="gender" {...field}>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            )}
            name="RadioGroup"
            control={control}
          />
        </section>
        <input {...register("name")} />
        <input {...register("phoneNumber")} />
        <input {...register("email")} />
        <input {...register("title")} />
        <input {...register("messgae")} />

        <button
          type="button"
          onClick={() => {
            setValue("name", "이름");
            setValue("phoneNumber", "01012345678");
            setValue("name", "이름");
            setValue("name", "이름");
            setValue("name", "이름");
          }}
        >
          SetValue
        </button>
      </form>
    </>
  );
};

export default QnaForm;
