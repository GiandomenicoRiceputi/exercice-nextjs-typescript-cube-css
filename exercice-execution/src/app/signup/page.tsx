import SignUp from "@/components/SignUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up | Mood Tracker",
    description: "Create an account to track your mood and sleep."
}




export default function SignUpPage() {
    return <SignUp />
}