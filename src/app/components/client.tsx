"use client";

import React from "react";
import fakerHelper from "@/lib/faker-js/main";

export const Client = () => {
  fakerHelper.log(fakerHelper.getCollection);
  return <h1>...</h1>;
};
