import React from "react";
import { Footer } from "flowbite-react";

function Footeri() {
  return (
    <div className="fixed bottom-0 w-full">
      <Footer className="rounded-t-lg p-2 " container>
        <Footer.Copyright href="/mainpage" by="TatOil™" year={2024} />
      </Footer>
    </div>
  );
}

export { Footeri };
