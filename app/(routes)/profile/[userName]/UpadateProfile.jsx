"use client";

import { useState } from "react";

export default function UpdateProfile({ profileInfo }) {
  const [open, setOpen] = useState(false);
  const handleOpen = setOpen((prev) => !prev);
  return (
    <>
      <div>
        <h1></h1>
      </div>
    </>
  );
}
