"use client";
import React from "react";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "@/lib/validation/schema";

export default function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      // API call to login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Handle successful login here
      console.log("Login successful");
    } catch (err) {
      console.error("Login error:", err);
      // Handle login error here (e.g., show error message to user)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 md:p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome to My App
        </h1>
        <p className="text-md md:text-lg text-gray-600 mb-8">
          Please log in to continue.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4 md:mb-6">
                  <FormLabel className="block text-gray-700 font-bold mb-2">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mb-4 md:mb-6">
                  <FormLabel className="block text-gray-700 font-bold mb-2">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col md:flex-row items-center justify-between mt-4">
              <Button type="submit" className="w-full md:w-auto mb-2 md:mb-0">
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
              </Button>
              <div className="flex flex-col md:flex-row items-center">
                <Link
                  href="/forgot-password"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 md:mr-4"
                >
                  Forgot Password?
                </Link>
                <Link
                  href="/register"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
