"use client";

import React from "react";
import fakerHelper from "@/lib/faker-js/main";

export const ClientComponent = () => {
  fakerHelper.log(fakerHelper.getCollection);
  //
  return <React.Fragment></React.Fragment>;
};
