"use server";
import { isRedirectError } from "@/node_modules/next/dist/client/components/redirect";
import { signIn, signOut, auth } from "@/auth";
import { redirect } from "next/navigation";
import { getSession } from "next-auth/react";

export const signInAction = async function (formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (isRedirectError(error)) {
      redirect("/");
    }
    throw new Error(
      error?.cause.err?.toString()?.split(":")[1] || "Something Went Wrong"
    );
  }
};

export const signOutAction = async function () {
  let status;
  try {
    await signOut();
    status = true;
  } catch (error) {
    if (isRedirectError(error)) {
      // redirect("/login");
      status = false;
      // console.log(error);
      throw error;
    }
    status = false;
  }
  return status;
};

export const signInWithGoogleAction = async function () {
  try {
    await signIn("google");
  } catch (error) {
    if (isRedirectError(error)) {
      // redirect("/login");
      throw error;
    }
  }
};
