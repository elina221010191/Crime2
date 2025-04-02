import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("https://example.com");

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-64"
        placeholder="Enter text or URL"
      />
      <QRCodeCanvas value={text || "https://example.com"} size={200} />
    </div>
  );
};

export default QRCodeGenerator;

