import { useState, useEffect } from "react";
import { Sansita_Swashed,Petrona } from "next/font/google";
const sasita = Sansita_Swashed ({ subsets: ["latin"] });
const petrona = Petrona ({ subsets: ["latin"] });


export default function Hero() {

  return (
    <div className="bg-white font-semibold">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-4">
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
             smart wallets connect to your devices passkeys through bluetooth/faceId{" "} <br/>
              <span className={` ${petrona.className}    text-transparent bg-clip-text bg-gradient-to-br from-slate-500 to-[#01f141]`}>
                Smart Wallet
              </span>
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
              can create a smart wallet through different devices passkeys through bluetooth/faceId
              </p>
              <div className="mt-10 flex items-center gap-x-6">

                <a href='/signup' className="rounded-md shad bg-[#01f121] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get started
                </a>
              </div>
            </div>
            <img
              src="/smartwallet.png"
              alt="woo-Ecommerce"
              className="mt-7 w-full sm:h-100 md:h-120 max-w-lg rounded-md object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}