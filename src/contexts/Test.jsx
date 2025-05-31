import { createContext } from "react";

export const textContext = createContext()
const TestProvider = ({children})=>{

    return <textContext>{children}</textContext>
}
export default TestProvider