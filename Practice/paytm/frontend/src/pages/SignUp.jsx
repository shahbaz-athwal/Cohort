import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";


export function SignUp() {
    return<>
    <div className="bg-slate-200 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox label={"First Name"} placeholder={"John"}/>
            <InputBox label={"Last Name"} placeholder={"Doe"}/>
            <InputBox label={"Email"} placeholder={"example@abc.com"}/>
            <InputBox label={"Password"} placeholder={"******"}/>
            <div className="pt-4">
                <Button label={"Sign in"} />
            </div>
            <ButtonWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"}/>
            </div>
        </div>
    </div>

    </>
}