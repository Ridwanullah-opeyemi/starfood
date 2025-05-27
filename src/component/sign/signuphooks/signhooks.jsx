import { useState } from "react";

const signHooks = () => {

  const [usershow, setUsershow] = useState(false);
const handleusershowcopen = () => setUsershow(true);
const handleusershowclose = () => setUsershow(false);

  return {
    usershow,
    handleusershowclose,
    handleusershowcopen
  };
};

export default signHooks;
