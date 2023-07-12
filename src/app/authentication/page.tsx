"use client";

export default function Authentication() {
  function getCookie(n: string) {
    if (window.document) {
      let a = `; ${window.document.cookie}`.match(`;\\s*${n}=([^;]+)`);
      return a ? a[1] : "";
    } else {
      return "0";
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HI Welcome to Auth page the user is {getCookie("token")?.length}
    </main>
  );
}
