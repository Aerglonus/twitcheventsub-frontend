import React, {useState} from "react";
import {Button, Grid, Input} from "@nextui-org/react";

interface ComponentProps {
  name: string;
}

async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

const Register: React.FC<ComponentProps> = ({name}) => {
  const [inputText, setInputText] = useState('Hello');

  return (<div>
    <div className=" flex justify-center align-middle">
      <h1 className="text-[3rem] leading-normal font-bold">{inputText} {name}</h1>
    </div>
    <form>
      <div className="pt-[30px] flex">
        <Grid.Container gap={2} justify="center">
          <Grid xs={5}>
            <Input bordered
                   labelPlaceholder="Username"
                   color="error"
              // @ts-ignore
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}/>
          </Grid>
          <Grid xs={5}>
            <Input bordered labelPlaceholder="Event Type" color="error"/>
          </Grid>
        </Grid.Container>
      </div>
      <div>
        <Grid.Container justify="center">
          <Grid>
            <Button className=" bg-slate-700 ">Submit</Button>
          </Grid>
        </Grid.Container>
      </div>
    </form>

  </div>);
};

export default Register;
