"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
    const{isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Welcome to this full-stack Notion clone, <span className="underline">Dotion</span>! <br/>
                Feel free to test out the site and create some notes!
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Dotion was created by Daniel Ha, a software engineer wanting to improve his full-stack prowess!<br/>
                For more on Daniel, check out his personal website <a href="https://daniel-ha.github.io/" className="underline">here</a>
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
            <Button asChild>
                <Link href="/documents">
                Enter Dotion
                <ArrowRight className="h-4 w-4 ,ml-2"/>
                </Link>
            </Button>)}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Sign up with github!
                        <ArrowRight className="h-4 w-4 ,ml-2"/>
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}