"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function Connect() {
	const account = useAccount();
	const { connectors, connect, status, error } = useConnect();
	const connector = connectors[0];

	return (
        <div className="bg-[#01f1f1f5] min-h-screen">
        <div className="bg-repeat w-full h-140 text-primary-100 heropattern-topography-slate-500">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <img src="/smartwallet.png" alt="" className="w-full h-full mx-auto mb-5" />
              <h2
                className={`text-3xl font-bold tracking-tight text-white sm:text-4xl px-2 py-1`}
              >
                Smart Wallet
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 ">
                can create a smart wallet through different devices passkeys through bluetooth or via faceId 
            </p>
              {account.address ?(<div className="mt-3 text-red-500">!!Account already exists</div>):<div>Please SignUp</div>}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button onClick={() => connect({ connector })}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Create an Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
}

export default Connect;