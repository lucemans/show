---
# try also 'default' to start simple
theme: ./theme/
title: ENS ETHOnline
layout: default
color: pink
# https://sli.dev/custom/highlighters.html
# highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
    ## Slidev Starter Template
    Presentation slides for developers.

    Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
    persist: false
# use UnoCSS
css: unocss
---

<!--

-->

---

# Hi there, <img src="/assets/wave.png" class="h-12 inline" />

<!--
hey there!

-check chat-

Good morning, afternoon of evening wherever and whenever you are.

My name is Luc, and im here today for (ENS Deep Dive)

-->

---

<h1 class="max-w-lg whitespace-normal block break-all text-center h-auto">Deep Dive</h1>

<!--
the ENS deep dive.

The session duration is __ but that obviously depends on how many questions there are, and we might not even fill the whole time cause who knows ENS is actually pretty easy to understand.

Alright, lets go.

So (this is my wallet address).
-->

---

<h1 class="max-w-lg whitespace-normal block break-all text-center h-auto">0x225f137127d9067788314bc7fcc1f36746a3c3b5</h1>

<!--

(So) this is my wallet address.

And I used to always start my presentations off with this corny joke where I would read the whole 0x225f137127 etc

And lets be real, this is not very pretty, and it is not very easy to remember, (although you would really only end up remembering it if you happen to have it as the default corny joke infront of every talk in the past half a year :smirk:)


So instead, I go by (luc.computer)

-->

---

<h1 class="max-w-lg whitespace-normal block break-all text-center h-auto flex items-center gap-4">
<img src="/assets/luc.computer.png" class="w-16 rounded-full" />
luc.computer
</h1>
<h2 class="max-w-md whitespace-normal block break-all text-center h-auto text-blue-300" v-click>lucemans<span class="text-blue-500">.eth</span></h2>

<!--
luc.computer instead.

or lucemans.eth, which I was before, still am, yh

and that,

right there,

is the core premise of ENS

(The Ethereum Name...)
-->

---

<img src="/assets/ens.svg" class="w-full max-w-sm" />

<!--

of ENS, ENS, the (Ethereum Name Service)

-->

---

<h1><b style="color:var(--blue)">E</b>thereum</h1>
<h1 v-click><b style="color:var(--blue)">N</b>ame</h1>
<h1 v-click><b style="color:var(--blue)">S</b>ervice</h1>

<!--

The Ethereum

Name

Service

gives us simply the ability to convert (human readable names...)

-->

---

<div class="flex gap-4">
    <h2 class="ml-12 text-right flex gap-2">
        <img src="/assets/nick.png" class="h-8" />
        nick.eth
    </h2>
    <img src="/assets/arrow.png" class="h-8" v-click />    
    <h2 class="flex-1 flex max-w-xs whitespace-normal break-all text-center h-auto" v-click>
        0xb8c2c29ee19d8307cb7255e1cd9cbde883a267d5
    </h2>
</div>

<!--

human readable names, like nick.eth,

into

wallet addresses, as shown here

(and backwards)

-->

---

<div class="flex gap-4">
    <h2 class="flex-1 flex max-w-xs whitespace-normal break-all text-center h-auto">
        0xb8c2...67d5
    </h2>
    <img src="/assets/arrow.png" class="h-8"/>    
    <h2 class="text-right flex gap-2">
        <img src="/assets/nick.png" class="h-8" />
        nick.eth
    </h2>
</div>

<!--

and backwards, so you wallet address to name.

-->

---

<img src="/assets/uni_before.png" />

<!--
this means that now all the sites where we would usually show wallet addresses, (we can now show names instead)
-->

---

<img src="/assets/uni_after.png" />

<!--

we can now show names instead.

like for example, this is uniswap

and we can see luc.computer and a cute lil profile picture

-->

---

<h1>Cool 😎👍</h1>

<!--
cool

now before you run off, (please stay for another moment, and well run through some of the points I am going to do my best to cover in the next hour.)
-->

---

<h2 class="mb-4 absolute top-10 text-center left-1/2 -translate-x-1/2 transform" v-click>Talkingpoints</h2>

<h3 v-click>Introduction to ENS</h3>
<h3 v-click>Use the Protocol</h3>
<h3 v-click>Libraries</h3>
<h3 v-click>Using ENS in a dApp/App</h3>
<h3 v-click>Understanding Resolution</h3>
<h3 v-click>Cross Chain Interoperability</h3>
<h3 v-click>DNS Integration</h3>
<h3 v-click>Protocol.Art</h3>
<h3 v-click>First ENS</h3>
<h3 v-click>ENS DAO</h3>
<h3 v-click>Fin</h3>

<!--
please stay for another moment, and well run through some of the points I am going to do my best to cover in the next hour.

If you already know what ENS is, you might want to keep watching, cause we do have some other cool stuff to show.

so, talking points -click-

in no particular order!

let me quickly run you through the agenda

- Introduction to ENS, - ez. done. it was that easy, we are already there.
- Use the Protocol - How the protocol works, quick explanation,
- Libraries - How to use the libraries
- Using ENS in a dapp, - we will talk about how you can use ENS in a dapp
- Understanding Resolution - How it works under the hood, and how we resolve names
- Cross Chain Interoperability - we will talk about how we can retrieve data from other chains
- DNS Integration, - we will talk about how ENS integrates with DNS
- Protocol.Art - we will talk about how the .art TLD is taking control of subdomains
- First ENS - we will talk about how you can register your first ENS
- ENS DAO - we will lightly cover about the DAO structure of ENS
- Fin - 

Decide wether this is the workshop for you, if what i just said made you think "hey i already know all this stuff" then thats hella impressive! otherwise, stay tuned.
-->

---

# 📜 Smart Contracts

<!--
ENS is a set of smart contracts
-->

---

<div class="flex flex-col gap-4 items-center">
  <h1 class="w-screen max-w-3xl text-center mb-2">🤳 dApps</h1>

  <div class="grid grid-cols-4 gap-4 items-end" style="color: #5298FF">
    <h3 v-click class="flex flex-col gap-2 items-center">
      <img src="/assets/rainbow.png" class="h-16 drop-shadow-lg rounded-2xl" />
      Rainbow
    </h3>
    <h3 v-click class="flex flex-col gap-2 items-center">
      <img src="/assets/coinbase.png" class="h-16 drop-shadow-lg rounded-2xl" />
      Coinbase
    </h3>
    <h3 v-click class="flex flex-col gap-2 items-center">
      <img src="/assets/argent.svg" class="h-16 drop-shadow-lg" />
      Argent
    </h3>
    <h3 v-click class="flex flex-col gap-2 items-center">
      <img src="/assets/lens.svg" class="h-16 drop-shadow-lg" />
      Lens
    </h3>
    <h3 v-click class="flex flex-col gap-2 items-center">
      <img src="/assets/ensfairy.png" class="h-16 shadow-lg" />
      ENS Fairy
    </h3>
    <h3 v-click class="flex flex-col gap-2 items-center">
      <img src="/assets/original.png" class="h-16 drop-shadow-lg" />
      Official Manager
    </h3>
    <h3 v-click class="flex flex-col gap-2 items-center">
      <img src="/assets/v3.png" class="h-16 drop-shadow-lg" />
      Official Manager v3
    </h3>
  </div>
</div>

<!--
And we use different dApps to interact with them.

anything from your favourite wallet, to your favourite social app, the ENS Fairy, an open initiative for gifting ENS names directly to others, the official manager (currently app.ens.domains), and the official manager v3 (currently alpha.ens.domains).
-->

---

# Okay so how?

<!--
Ok so how does ENS work.
-->

---

<div class="flex flex-col items-center gap-4 absolute transform -translate-x-1/2 -translate-y-1/2 z-10" v-click>
<div class="text-5xl drop-shadow relative">
<div class="inline-flex">📜</div>
<div class="inline-flex">📜</div>
<div class="mx-auto ml-5 -mt-5 drop-shadow">📜</div>
</div>
<h3>Smart Contracts</h3>
</div>
<img src="/public/assets/seemsgood.png" class="w-24 absolute top-50 left-120 z-10" v-click/>

<!--
So as I was saying,

-click-

ENS is just a set of smart contracts on the ethereum mainnet blockchain.

They form a universal

-click-

source of truth for names

(these aforementioned apps)
-->

---

<div class="flex flex-col items-center gap-4 absolute transform -translate-x-1/2 -translate-y-1/2 z-10">
<div class="text-5xl drop-shadow relative">
<div class="inline-flex">📜</div>
<div class="inline-flex">📜</div>
<div class="mx-auto ml-5 -mt-5 drop-shadow">📜</div>
</div>
<h3>Smart Contracts</h3>
</div>

<div class="absolute left-104 bottom-20 flex flex-col items-center gap-2">
  <div class="flex">
    <img src="/public/assets/rainbow.png" class="w-12" />
    <img src="/public/assets/argent.svg" class="w-12 -ml-3" />
    <img src="/public/assets/coinbase.png" class="w-12 -ml-3" />
    <div class="text-xl font-bold text-neutral-800">
        <div>*</div>
    </div>
  </div>
  <div className="font-bold">Wallet / dApp</div>
</div>

<img src="/assets/arrow-blue-ens-queries.png" class="h-60 absolute left-135 bottom-20" v-click />
<img src="/assets/arrow-pink-ens-queries.png" class="h-60 absolute left-20 bottom-20" v-click />

<!--
(these aforementioned dApps) and a ton others, any wallet, dApp, you name it, they interface with the smart contracts,

-click-

to get who a name belongs to, or

to register a name

edit your records, etc

ENS is basically just a system for storing and resolving names to addresses.

In this case the contracts would reply with things like

-click-

we can see profile information here, avatar, discord, twitter, and ofc address, as well as a confirmation we registered a new name fun

(The smart contracts are simply a system that provides)
-->

---

<div class="flex flex-col items-center gap-4 absolute transform -translate-x-1/2 -translate-y-1/2 z-10">
<div class="text-5xl drop-shadow relative">
<div class="inline-flex">📜</div>
<div class="inline-flex">📜</div>
<div class="mx-auto ml-5 -mt-5 drop-shadow">📜</div>
</div>
<h3>Smart Contracts</h3>
</div>

<div class="absolute left-104 bottom-20 flex flex-col items-center gap-2">
  <div class="flex">
    <img src="/public/assets/rainbow.png" class="w-12" />
    <img src="/public/assets/argent.svg" class="w-12 -ml-3" />
    <img src="/public/assets/coinbase.png" class="w-12 -ml-3" />
    <div class="text-xl font-bold text-neutral-800">
        <div>*</div>
    </div>
  </div>
  <div className="font-bold">Wallet / dApp</div>
</div>

<img src="/assets/arrow-blue-ens-queries.png" class="h-60 absolute left-135 bottom-20" />
<img src="/assets/arrow-pink-ens-queries.png" class="h-60 absolute left-20 bottom-20" />

<img src="/assets/erc137-quote-1.png" class="absolute bottom-0 left-1/2 h-[45vh] -translate-x-1/2 z-10 drop-shadow-xl" />

<!--
The smart contracts are simply a system that provides "flexible resolution of short, human-readable names to service and resource identifiers."

In other words, they provide a system for storing and resolving names to addresses.

Its that simple

This is ERC-137 btw, the standard for ENS, and it is ridiculously expandable, and flexible, and it is one of the main reasons why ENS is so powerful.

Dont worry, Ill get back to this gem later when we walk through what it takes to write your own name resolution logic.

What you need to know is that the specification describes a system where at any point you can extend its functionality using smart contracts.

Which is incredibly cool.

Now, lets not get too far ahead of ourselves, I know, exciting, but lets dail it back a step.

If all you wanna do (is implement ENS in the frontend of your dApp)
-->

---

# ✨ Implement it in your dApp

<!--
(If all you wanna do) is implement ENS in the frontend of your dApp, you don't need to know any of this smart-contract stuff, because (every significant ethereum library has ENS built in by default.)

Yes, you heard that right

(Every Significant Ethereum Library)
-->

---

<h1>Every</h1>
<h1 v-click>Significant</h1>
<h1 v-click>Ethereum</h1>
<h1 v-click>Library</h1>

<!--
every significant ethereum library has ENS (built in by default.)
-->

---

# 🛠️ Built in by default

<!--
built in by default.

this means that if you are using (ethersjs, web3js)
-->

---

<h1>Libraries</h1>

<ul class="text-xl flex gap-4 font-bold text-blue">
<li>Ethers</li>
<li>Wagmi</li>
<li>ENS.js</li>
<li>Web3.js</li>
<li>Web3j</li>
<li>KEthereum</li>
<li>web3.py</li>
<li>go-ens</li>
<li>...</li>
</ul>

<!--
(This means that if you are using) ethers.js, web3.js, or any other library, you can simply use the ENS functions that come with it, to resolve names to addresses, and vice versa, get avatars, email, socials, host websites, and much more.
-->

---

<img src="/assets/stack-ethers.png" class="h-20" />

<!--
To start of our little library story there is ethers.

Ethers.js is awesome, low level, fast, typescript native, way too versatile,

Ethers is one of the most popular libraries, a fair bit of the frontend libraries are extensions of ethers.
-->

---

<div class="flex gap-4">

<img src="/assets/stack-ethers.png" class="h-20" />

<div>
<div v-click>
<div class="bg-[#2535A0] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">resolveName("luc.computer")</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Name -> Address</div>
</div>

<div>

```tsx
const address = await provider.resolveName("luc.computer");
```

</div>
</div>
<div v-click>
<div class="bg-[#2535A0] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">lookupAddress("0x225f13712...")</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Address -> Name</div>
</div>

<div>

```tsx
const name = await provider.lookupAddress("0x225f13712...");
```

</div>
</div>

<div v-click>
<div class="bg-[#2535A0] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">getAvatar("luc.computer")</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Name -> Avatar</div>
</div>

<div>

```tsx
const avatar = await provider.getAvatar("luc.computer");
```

</div>
</div>

</div>

</div>

<!--

-->

---

<div class="flex gap-4">

<img src="/assets/stack-ethers.png" class="h-20" />

<div>

<div class="bg-white border p-4 rounded-md text-sm w-[320px]">
  <p>Very Nice 👌</p>

  <div>
  <ul>
    <li>- Typescript</li>
    <li>- Low level</li>
    <li>- Fast</li>
  </ul>
  </div>
</div>

</div>

</div>

<!--

-->

---

<img src="/assets/stack-wagmi.png" class="h-32">

<!--
One of such extensions is Wagmi, it adds react hooks to Ethers, making it even easier to use.

Wagmi lets us do things like `useENSName` and `useENSAddress` to resolve names to addresses, and vice versa.

-->

---

<div class="flex gap-4">

<img src="/assets/stack-wagmi.png" class="h-32">

<div v-click>
<div class="bg-[#000000] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">useEnsAddress</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Name -> Address</div>
</div>

<div>

```tsx
// Example of useEnsAddress (from https://wagmi.sh/react/hooks/useEnsAddress)
export const MyComponent: FC = () => {
    const { data, isError, isLoading } = useEnsAddress({
        name: "luc.computer",
    });

    if (isLoading) return <div>Fetching address...</div>;
    if (isError) return <div>Error fetching address</div>;
    return <div>Address: {data}</div>;
};
```

</div>
</div>

</div>

<!--
and it also lets us get profile information, such as user avatars, and more.
-->

---

<div class="flex gap-4">

<img src="/assets/stack-wagmi.png" class="h-32">

<div>
<div>
<div class="bg-[#000000] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">useEnsAddress</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Name -> Address</div>
</div>
</div>

<div>
<div class="bg-[#000000] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">useEnsName</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Address -> Name</div>
</div>

<div>

```tsx
// Example of useEnsName (from https://wagmi.sh/react/hooks/useEnsName)
export const MyComponent: FC = () => {
    const { data, isError, isLoading } = useEnsName({ address: "0x1234" });

    if (isLoading) return <div>Fetching name…</div>;
    if (isError) return <div>Error fetching name</div>;
    return <div>Name: {data}</div>;
};
```

</div>
</div>

</div>

</div>

---

<div class="flex gap-4">

<img src="/assets/stack-wagmi.png" class="h-32">

<div>
<div>
<div class="bg-[#000000] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">useEnsAddress</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Name -> Address</div>
</div>
</div>

<div>
<div class="bg-[#000000] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">useEnsName</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Address -> Name</div>
</div>
</div>

<div>
<div class="bg-[#000000] text-white border pl-2 pb-2 pt-1 -mb-2 pr-2 rounded-tr-md rounded-tl-md text-sm flex">
  <div class="grow">useEnsAvatar</div>
  <div class="text-xs p-1 bg-neutral-100 bg-opacity-10 rounded-sm">Address -> Avatar</div>
</div>

<div>

```tsx
// Example of useEnsAvatar (from https://wagmi.sh/react/hooks/useEnsAvatar)
export const MyComponent: FC = () => {
    const { data, isError, isLoading } = useEnsAvatar({ address: "0x1234" });

    if (isLoading) return <div>Fetching avatar...</div>;
    if (isError) return <div>Error fetching avatar</div>;
    return <img src={data} />;
};
```

</div>
</div>

</div>

</div>

---


<div class="flex gap-4">

<img src="/assets/stack-wagmi.png" class="h-32">

<div>

<div class="bg-white border p-4 rounded-md text-sm w-[320px]">
  <p>Very very plus 👌</p>

  <div>
  <ul>
    <li>+ Typescript</li>
    <li>+ Higher level</li>
    <li>+ Fast</li>
    <li>+ Very React</li>
    <li>+ Very much everything good about ethers</li>
  </ul>
  </div>
</div>

</div>

</div>

---

<img src="/assets/stack-ensjs.png" class="h-56">

<!--
And then there is ENSjs

which, incase you couldnt tell, is an extra library we built on top of Wagmi, using the graph's ENS subgraph

Meaning it gives you access to all sorts of extra cool features, history, ownership, transfers, and more.
-->

---

<div class="flex gap-4">

<img src="/assets/stack-ensjs.png" class="h-56" />

<div>a library we built on top of

<div class="bg-white border p-4 rounded-md text-sm w-[320px]">
  <p>Very very plus 👌</p>

  <div>
  <ul>
    <li>+ Very very plus</li>
    <li>+ Everything epic about wagmi and ethers</li>
    <li>+ Includes the graph</li>
    <li>+ Transfers, Ownership, Iterating, etc..</li>
    <li>~ New</li>
  </ul>
  </div>
</div>

</div>

</div>

---

<img src="/assets/youlovetoseeit.gif" class="" />

<!--
You love to see it
-->

---

<img src="/assets/dancy.gif" class="w-[300px]" />

<!--
Ok, we're done, thats it, thats all the code, you can implement ENS into your App with those hooks I showed you earlier,

Honestly, at most hackathons, that is enough to get the integration bounty.

And most apps don't need more then this, usernames, avatars, and maybe some social records all over the place, pretty lit if you ask me.
-->

---

<h2 v-click>🪄 The Magic</h2>

<!--
But.. I understand you want it, soooo badly

-click-

Lets get into the behind the scenes stuff,

the place where the magic happens
-->

---

<h2>Resolve a Name</h2>

<!--
To illustrate this I wanna run you through what its like to resolve a name, so you have an understanding of how you can leverage it in your advantage.
-->

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s1.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s2.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s3.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s4.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s5.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s6.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s7.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s8.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s9.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/s10.png" class="h-[400px] mx-auto" />
</div>

<img src="/assets/publicresolver.png" class="h-[180px] absolute left-10 bottom-20 shadow-lg rounded-md" v-click />

---

# 🧠 Contract Logic

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/z1.png" class="h-[400px] mx-auto" />
</div>

<!--
So getting to do your own contract logic is super cool
-->

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/z2.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/z3.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/z4.png" class="h-[400px] mx-auto" />
</div>

---

<div class="w-full left-0 right-0 top-10 absolute">
  <img src="/assets/z5.png" class="h-[400px] mx-auto" />
</div>

---

<h2 class="mb-4" v-click>Fancy Things</h2>
<img src="/assets/networks.png" class="max-w-3xl" v-click/>

<!--
But but but, I hear you saying, Luc,

I want the new fancy shiny stuff,

I want to build on all of these.

Well so do we!

Well ive got good news for you
-->

---

<h1>Cross Chain Interoperability Protocol</h1>
<h2 v-click>(CCIP)</h2>

<!--
Introducing, the cross chain interoperability protocol.

A protocol that allows us to point our ENS records to resolvers on mainnet that say "oop, you gotta be on optimism to read dis"
-->

---

<img src="/assets/3668.png" class="absolute bottom-0 left-1/2 h-[45vh] -translate-x-1/2 z-10 drop-shadow-xl" />

<!--
the cool thing about this is that you can now have your data -click-
-->

---

<div class="flex gap-4">
    <div>
        <h2 v-click>On Chain</h2>
        <h2 v-click>Off Chain</h2>
        <h2 v-click>Rollup</h2>
        <h2 v-click>Layer 2</h2>
        <h2 v-click>Zero Knowledge</h2>
        <h2 v-click>HTTP</h2>
        <h2 v-click>HTCPCP</h2>
        <h2 v-click>Toaster</h2>
    </div>
    <img src="/assets/resolve_everywhere.png" v-click class="max-w-xl" />
</div>

<!--

so we can now have offcain resolvers

on chain resolvers

rollup resolvers

l2 resolver

zk resolvers

http resolver

htcpcp resolvers

practically a resolver on your toaster if you felt like it.
-->

---

<img src="/assets/ccip.png" class="max-w-xl -mt-8 mr-8">

<!--
The way CCIP read works it it allows us to throw a custom error on our mainnet resolver, that says "oop, you gonna need to check this other place" and redirect you towards where to go

The library in question will then take action and reach out to that resource and handle the request for you so this is NO extra effort on your part.
-->

---

<img src="/assets/twitter-ngo.png" class="max-w-xs">

<!--
a little while ago I released twitter.ngo

Twitter ngo is a DNS domain, that I bought off of porkbun, used dnssec to get it on ENS,

and twitter.ngo
-->

---

<img src="/assets/twitter-ngo2.png" class="max-w-md">

<!--
just resolves subdomains, and then uses the twitter api to get usernames, bio, and profile picture

checks if it finds any ENS names (or lens names), and then resolves them to an address

which is obviously super cool

(next lets talk about libraries)
-->

---

# DNS Integration

Any DNSSEC supported domain can be used as an ENS name.

---

# 🖼️ protocol.art

<!--
Highlight Protocol.Art
-->

---

<h1>Documentation</h1>
<a href="https://docs.ens.domains/" style="color: blue">https://docs.ens.domains/</a>

<!--
Documentation,

which can be found at https://docs.ens.domains/
-->

---

<img src="/assets/cool.png" class="max-w-xl" v-click />

<!--
So I see you going "wow, this is cool, how do I get one of these"
-->

---

<h1 class="flex gap-4 items-center">
<img src="/assets/register_0.png" class="w-16" />
How to register?
</h1>

<!--
So how does one register one of these fancy domains?

normally, you would use the (ens manager)
-->

---

<div class="flex flex-col items-center">
<h1 class="w-screen max-w-3xl text-center mb-2">
ENS Manager
</h1>
<div class="flex gap-4" style="color: #5298FF">
<h3 v-click>ENS Fairy</h3>
<h3 v-click>Rainbow</h3>
<h3 v-click>Coinbase</h3>
<h3 v-click>Lens</h3>
<h3 v-click>Argent</h3>
</div>
</div>

---

<div class="w-full max-w-3xl items-center justify-center flex-col flex">
    <h2 class="flex gap-2 mb-3"><img src="/assets/eyes.png" class="w-8" />Alpha</h2>
    <img src="/assets/alpha2.png" class="max-w-2xl rounded-md" v-click/>
    <h3 class="w-screen max-w-3xl text-center mb-2" v-click>
    https://alpha.ens.domains
    </h3>
</div>

<!--

-->

---

<h1 class="w-screen max-w-3xl text-center mb-2">
ENS Manager
</h1>

<!--

-->

---

<div class="w-full max-w-3xl items-center justify-center flex-col flex">
    <h2 class="flex gap-2 mb-3">ENS Manager</h2>
    <img src="/assets/ensapp.png" class="max-w-2xl rounded-md" v-click/>
    <h3 class="w-screen max-w-3xl text-center mb-2" v-click>
    https://app.ens.domains
    </h3>
</div>

<!--

-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/search_0.png" class="w-8" />
Find your name
</h3>
<img src="/assets/search_1.png" class="max-w-xl rounded-md" />

<!--

-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/register_0.png" class="w-8" />
Register your name
</h3>
<img src="/assets/register_1.png" class="max-w-xl rounded-md" />

<!--

-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/register_0.png" class="w-8" />
Register your name
</h3>
<img src="/assets/register_2.png" class="max-w-xl rounded-md" />

<!--

-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/register_0.png" class="w-8" />
Register your name
</h3>
<img src="/assets/register_3.png" class="max-w-xl rounded-md" />

<!--

-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/register_0.png" class="w-8" />
Register your name
</h3>
<img src="/assets/register_4.png" class="max-w-xl rounded-md" />

<!--

-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/register_0.png" class="w-8" />
Register your name
</h3>
<img src="/assets/register_5.png" class="max-w-xl rounded-md" />

<!--

-->

---

<img src="/assets/profile_final.png" class="max-w-2xl" />

<!--
And then voila, your name is registered
-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/frame.png" class="w-8" />
Setting your Avatar
</h3>

<!--
So how does one go about changing their avatar
-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/frame.png" class="w-8" />
Setting your Avatar
</h3>
<img src="/assets/avatar_1.png" class="max-w-xl" />

<!--
Here is your profile, you can press the add/edit record button
-->

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/frame.png" class="w-8" />
Setting your Avatar
</h3>
<img src="/assets/avatar_2.png" class="max-w-xl" />

<!--
And then you can fill in an ipfs link, an arweave link, or just an http link if thats what u prefer.

and then you have your profile picture!
-->

---

# DAO
## discuss.ens.domains

---

<h3 class="flex gap-4 items-center mb-4">
<img src="/assets/frame.png" class="w-8" />
One last thing...
</h3>
<img src="/assets/rick.gif" class="max-w-xl" v-click />

<!--
Oh and last but not least I really quickly wanted to
-->

---

<h1 class="flex gap-4 items-center mb-4">
lucemans.eth
</h1>
<h3>🐦 @lucemansnl</h3>
<h3>🌐 luc.contact</h3>
<h3>📚 docs.ens.domains</h3>

<!--
You can find me at lucemans.eth or @lucemansnl or luc.contact.
-->

---

<div class="flex items-center flex-col">
    <img src="/assets/happy_hacking.png" class="max-w-xl">
    <h1 class="flex gap-4 items-center mt-4">
    Let's chat!
    </h1>
</div>

<!--
Let's chat!
-->
