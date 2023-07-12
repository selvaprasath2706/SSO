"use client"

export default function Authentication() {
     function getCookie(n:string) {
       let a = `; ${document.cookie}`.match(`;\\s*${n}=([^;]+)`);
       return a ? a[1] : "";
     }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HI Welcome to Auth page the user is {getCookie("token")?.length}
    </main>
  );
}
