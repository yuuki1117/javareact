import React, { useState, useEffect } from "react";

export const ApiFetch = () => {
  const [stones, setStone] = useState<Stone>({
    month: "",
    color: "",
    name: "",
  });
  interface Stone {
    month: string;
    color: string;
    name: string;
  }
  useEffect(() => {
    // APIをfetchする(呼び出す)
    fetch("http://localhost:8080/api", { method: "GET" })
      // レスポンスのデータ形式をjsonに設定
      .then((res) => res.json())
      // APIから渡されるレスポンスデータ(data)をstateにセットする
      .then((data) => {
        setStone(data);
      });
  }, []);

  return (
    <div>
      <li>{stones.month}</li>
      <li>{stones.color}</li>
      <li>{stones.name}</li>
    </div>
  );
};
