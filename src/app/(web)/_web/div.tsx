"use client";
import React from "react";
import fakerHelper from "@/lib/faker-js/main";

export const Div = () => {
  fakerHelper.log(fakerHelper.getCollection);
  return <h1>...</h1>;
};
