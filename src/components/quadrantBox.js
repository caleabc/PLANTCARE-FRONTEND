import * as React from "react";

import { Input } from "baseui/input";

function QuadrantBox() {
  return (
    <>
      <div>
        <Input placeholder="Q1" />
        <Input placeholder="Q2" />
        <Input placeholder="Q3" />
        <Input placeholder="Q4" />
      </div>
    </>
  );
}

export default QuadrantBox;
