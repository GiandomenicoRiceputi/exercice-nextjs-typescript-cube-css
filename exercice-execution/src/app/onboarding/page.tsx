import Onboarding from "@/components/Onboarding";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Onboarding | Mood Tracker",
    description: "Personalize your mood tracking experience."
}

export default function onboardingPage() {
    return <Onboarding />
}