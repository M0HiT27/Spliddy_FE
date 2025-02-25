import axios from "axios"
const apiUrl = import.meta.env.VITE_BACKEND_ROUTE;
import { useRef, useState } from "react"
function Signin() {
    const [isSignin, setIsSignin] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    console.log(apiUrl)
    async function sendSigninReq() {
        try {
            if (isSignin) {
                const response = await axios.post(apiUrl + "/user/signin", {
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                });
                console.log(response)
            } else {
                const response = await axios.post(apiUrl + "/user/signup", {
                    name: nameRef.current?.value,
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value

                })
                console.log(response);
            }
        } catch (e) {
            console.log("error", e);
        }
    }
    function reverseSignIn() {
        setIsSignin(!isSignin);
    }
    return (
        <div className=" flex flex-col justify-center gap-8 p-4 bg-white border-lightBlue border rounded-2xl shadow-2xl h-[50%] w-[80%] max-w-100">

            <div className="  text-gray-500">
                {!isSignin && <input ref={nameRef} placeholder="Name" className="my-2 w-full p-2 border rounded-md  border-gray-400"></input>}
                <input ref={emailRef} placeholder="E-mail" className="my-2 w-full p-2 border rounded-md  border-gray-400"></input>
                <input ref={passwordRef} placeholder="Password" className="my-2 w-full p-2 border rounded-md border-gray-400"></input>
            </div>
            <div className="flex flex-col items-end justify-center">
                <button onClick={() => sendSigninReq()} className="border hover:bg-lightBlue border-gray-400 rounded-md p-2  w-full text-ourPurple">{isSignin ? "Sign In" : "Sign Up"}</button>
                <button onClick={() => { reverseSignIn() }} className=" hover:text-ourPurple text-md ">{isSignin ? "Register" : "Sign In"}</button>
            </div>
        </div>
    )
}

export default function LandingPage() {
    return (
        <div className="flex">
            <div className="md:flex flex-col hidden h-screen w-[60%] bg-ourPurple">
                <div className="h-[90%] flex flex-col justify-center items-center gap-2">
                    <div className=" p-2 text-4xl  text-white">
                        Spliddy
                    </div>
                    <div className=" text-center text-lg text-white font-light">
                        When they owe you and forget , tell them <br></br>
                        "Nice try Spliddy"
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="md:bg-lightBlue bg-ourPurple h-screen flex-grow flex flex-col">
                <div className="md:hidden block p-2 text-4xl  text-white">
                    Spliddy
                </div>
                <div className="flex-grow flex justify-center items-center">
                    <Signin></Signin>
                </div>
            </div>
        </div>
    )
}

{/* <div className="h-screen sm:flex justify-center items-center  hidden h-screen w-[60%] bg-ourPurple ">
                <div className="border">
                    <div className=" border p-2 text-4xl  text-white">
                        Spliddy
                    </div>
                    <p className="border">n</p>
                </div>



            </div>
            <div className="h-screen flex-grow sm:bg-white bg-ourPurple">
                <div className="p-2 font-[Open_Sans] sm:hidden text-3xl text-white  ">
                    Spliddy
                </div>
            </div> */}