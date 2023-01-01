import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
export default function index() {
  const [value, onChange] = useState(new Date());
  return (
    <div className=" bg-[#000] fixed top-0 right-0 z-[9999]">
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}
