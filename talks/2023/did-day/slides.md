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
    ## did:day ens

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

-->

---

<div class="border rounded-lg bg-gray1 shadow-sm">
<div class="-mx-0.25 -mt-0.25 bg-white p-4 rounded-lg border-1 border-1 w-96 shadow-sm">
  <div class="flex flex-col">
    <div class="flex gap-3">
      <div>
        <img src="/assets/lucpfp.png" class="w-18 aspect-square rounded-xl" />
      </div>
      <div class="grow">
        <div class="flex flex-col justify-center h-full mt-0.5">
          <div class="text-xl font-bold leading-4">luc.computer</div>
          <div class="text-md leading-4">Luc van Kampen</div>
          <div class="text-xs flex items-center gap-1">
          <img src="/assets/eth.svg" class="w-4 h-4" />
          0x225...c3b5
          </div>
        </div>
      </div>
      <div>
      <img src="/assets/ens_logo.svg" class="w-6"/>
      </div>
    </div>
    <div>
  </div>
</div>
</div>
<div>
  <div class="px-3 py-2 flex gap-2">
    <div class="flex gap-2 items-center bg-gray1 border-1 w-fit px-1 rounded-md text-[0.55rem]">
      <img src="/assets/twitter.svg" class="w-4">
      @LucemansNL
    </div>
    <div class="flex gap-2 items-center bg-gray1 border-1 w-fit px-1 rounded-md text-[0.55rem]">
      <img src="/assets/github.svg" class="w-4">
      lucemans
    </div>
    <div class="flex gap-2 items-center bg-gray1 border-1 w-fit px-1 rounded-md text-[0.55rem]">
      <img src="/assets/discord.svg" class="w-4">
      Lucemans#2066
    </div>
  </div>
</div>
</div>

<!--
my name is luc van kampen, I go by luc.computer, and today I am here to try and (explain ens in 8 minutes or less)
-->

---

<div class="text-4xl font-bold flex gap-4 items-center">
<span v-click>Explain</span>
<img src="/assets/ens.svg" class="h-18" v-click />
<span v-click>in 8 minutes or less</span>
</div>

---

<img src="/assets/chatgpt.svg" class="h-16" />

<!---
Now obviously, because of the recent identity crisis github co-pilot and chatgpt have given me, lets ask chatgpt to do my job for me.

Sooooo... (according to openai's chatgpt)
-->

---

<div class="max-w-xl text-xl">
According to <div class="inline-flex items-center translate-y-0.5">
<img src="/assets/chatgpt.svg" class="h-6 inline-flex" />
</div>

<span class="text-3xl">ENS is a <span class="text-[#299BFD]">trustless</span> <span class="underline underline-yellow">decentralized naming system</span> based on the<br /> <span class="text-[#7F7CEF]">Ethereum</span> decentralized ledger <br /> with modularity and future expandability in mind.</span>

</div>

<img src="" />

<!--
According to openai's chatgpt,

ENS is a (get ready lol) "trustless decentralized naming system", yup, seems about right

"based on the ethereum decentralized ledger" (yup) "with modularity and future expandability in mind" (yup)

Sounds pretty fair,

So I said.. ok.. fine.... (explain that like im five)
-->

---

<span class="text-5xl font-bold">Explain like im five</span>

<!---
Explain like im five,

And low and behold ("imagine you have a magic book where")
-->

---

<div class="text-2xl font-bold text-center w-fit mx-auto px-2 mb-2 text-white bg-black">Explain like im five</div>
<img src="/assets/chatgpt-five.png" class="w-120" />

<!--
"Imagine you have a magic book where"... yeah okay..

Oh crap the AI has also taken my ability to take things too literal...

Fine... let me take it from here
-->

---

<div class="flex gap-4">
    <h2 class="ml-12 text-right flex gap-2">
        <img src="/assets/lucpfp.png" class="h-8" />
        luc.computer
    </h2>
    <img src="/assets/arrow.png" class="h-8" v-click />
    <h2 class="flex-1 flex max-w-xs whitespace-normal break-all text-center h-auto" v-click>
        0x225f137127d9067788314bc7fcc1f36746a3c3b5
    </h2>
</div>

<!--

human readable names, like luc.computer,

into

wallet addresses, as shown here

-->

---

<div class="flex gap-4">
    <h2 class="ml-12 text-right flex gap-2">
        <img src="/assets/lucpfp.png" class="h-8" />
        luc.computer
    </h2>
    <img src="/assets/arrow.png" class="h-8" />
    <div class="bg-white p-4 flex flex-col gap-1.5 rounded-lg border-1 border-1 w-54 shadow-sm -mt-4">
      <div class="font-bold text-sm">Addresses</div>
      <div class="flex gap-2 items-center bg-gray1 border-1 px-1 rounded-md text-[0.55rem] overflow-hidden">
        <img src="/assets/eth.svg" class="w-4 my-0.5">
        <div class="w-auto">
          0x225f137127d9067788314...c3B5
        </div>
      </div>
      <div class="flex gap-2 items-center bg-gray1 border-1 px-1 rounded-md text-[0.55rem] overflow-hidden">
        <img src="/assets/btc.svg" class="w-4 my-0.5">
        <div class="w-auto">
          1JnJvEBykLcGHYxCZVWgDG...HwB
        </div>
      </div>
      <div class="font-bold text-sm mt-2">Socials</div>
      <div class="flex gap-2 items-center bg-gray1 border-1 px-1 rounded-md text-[0.55rem]">
        <img src="/assets/twitter.svg" class="w-4 my-0.5">
        @LucemansNL
      </div>
      <div class="flex gap-2 items-center bg-gray1 border-1 px-1 rounded-md text-[0.55rem]">
        <img src="/assets/github.svg" class="w-4 my-0.5">
        lucemans
      </div>
      <div class="flex gap-2 items-center bg-gray1 border-1 px-1 rounded-md text-[0.55rem]">
        <img src="/assets/discord.svg" class="w-4 my-0.5">
        Lucemans#2066
      </div>
      <div class="font-bold text-sm mt-2">Content</div>
      <div class="flex gap-2 items-center bg-gray1 border-1 px-1 rounded-md text-[0.55rem]">
        <img src="/assets/ipfs.svg" class="w-4 my-0.5">
        ipfs://dQw4w9WgXcQ...
      </div>
      <div class="font-bold text-sm mt-2">Other</div>
      <div class="flex gap-2 items-center bg-gray1 border-1 px-1 rounded-md text-[0.55rem]">
        <b class="text-[0.4rem] leading-3 my-0.5">Contact</b>
        https://luc.contact
      </div>
      <div class="flex gap-2 items-center bg-gray1 border-1 px-1 rounded-md text-[0.55rem]">
        <b class="text-[0.4rem] leading-3 my-0.5">xyz.lensfrens</b>
        lucemans.lens
      </div>
  </div>
</div>

---

<div class="flex gap-4">
    <h2 class="flex-1 flex max-w-xs whitespace-normal break-all text-center h-auto">
        0x225...c3b5
    </h2>
    <img src="/assets/arrow.png" class="h-8"/>    
    <h2 class="text-right flex gap-2">
        <img src="/assets/lucpfp.png" class="h-8" />
        luc.computer
    </h2>
</div>

<!--

because you can store a whole ton more then just addresses in ENS names.

See here the avatar, socials, etc

(and backwards)

-->

---

# 📜 Smart Contracts

<!--
ENS is made up of a set of smart contracts

and the way it handles (resolution is by)
-->

---
clicks: 5
---

<div class="">
  <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative" v-click>
    <img src="/assets/scroll.png" class="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-6" />
    ENS
    <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2 z-10">0x225f13...</div>
  </div>

  <div class="h-10">
    <img src="/assets/lines1.svg" class="h-10" v-click="2"/>
    <img src="/assets/lines2.svg" class="h-10 -translate-y-100%" v-click="3"/>
  </div>

  <div class="flex gap-4">
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative" v-click="2">
      <img src="/assets/scroll.png" class="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-6" />
      <div>.eth</div>
      <div class="text-sm">ETHRegistrar</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2 z-10">0x225f13...</div>
    </div>
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative opacity-70" v-click="3">
      <div>.computer</div>
      <div class="text-sm">DNSRegistrar</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative opacity-70" v-click="3">
      <div>.xyz</div>
      <div class="text-sm">DNSRegistrar</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative opacity-70" v-click="3">
      <div>.org</div>
      <div class="text-sm">DNSRegistrar</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative opacity-70" v-click="3">
      <div>.cash</div>
      <div class="text-sm">DNSRegistrar</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
  </div>

  <div class="h-10">
    <img src="/assets/lines1.svg" class="h-10" v-click="4" />
    <img src="/assets/lines2.svg" class="h-10 -translate-y-100%" v-click="5"/>
  </div>

  <div class="flex gap-4">
    <div class="border-1 border-black rounded-lg bg-white shadow-sm w-32 p-4 relative" v-click="4">
      <img src="/assets/scroll.png" class="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-6" />
      <div>lucemans.eth</div>
      <div class="text-sm">Resolver</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative opacity-70" v-click="5">
      <div>domico.eth</div>
      <div class="text-sm">Resolver</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative opacity-70" v-click="5">
      <div>v3xlabs.eth</div>
      <div class="text-sm">Resolver</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative opacity-70" v-click="5">
      <div>puma.eth</div>
      <div class="text-sm">Resolver</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
    <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative opacity-70" v-click="5">
      <div>m1guelpf.eth</div>
      <div class="text-sm">Resolver</div>
      <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
    </div>
  </div>

</div>

<!--
(the way it handles) resolution is my...

// TODO: write more here
-->

---

<h2 class="mb-4 absolute left-10 top-10">Resolver</h2>

<div class="flex gap-4">
  <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative">
    <img src="/assets/scroll.png" class="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-6" />
    <div>lucemans.eth</div>
    <div class="text-sm">Resolver</div>
    <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
  </div>

  <div>
    <h2>Resolver</h2>
    <ul>
      <li v-click>lucemans.eth</li>
      <li v-click>hot.lucemans.eth</li>
      <li v-click>cold.lucemans.eth</li>
      <li v-click>somedidsubdomain.lucemans.eth</li>
      <li v-click>*.lucemans.eth</li>
    </ul>
  </div>
</div>

<!--
So the resolver for `lucemans.eth` is in charge of

lucemans.eth, hot.lucemans.eth, cold.lucemans.eth, somedidsubdomain.lucemans.eth, and all other subdomains, sub subdomains, and all records

this resolver is just a smart contract, with a "text" function to get text records (such as avatar), and functions to get addresses etc.
-->

---

<h2 class="mb-4 absolute left-10 top-10">Resolver</h2>

<div class="flex gap-4">
  <div class="border-1 rounded-lg bg-white shadow-sm w-32 p-4 relative">
    <img src="/assets/scroll.png" class="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-6" />
    <div>lucemans.eth</div>
    <div class="text-sm">Resolver</div>
    <div class="bottom-0 absolute translate-y-1/2 text-sm bg-white border-1 px-1 left-1/2 -translate-x-1/2">0x225f13...</div>
  </div>

  <div>
    <h2>Your Logic 🌈</h2>
    <ul>
      <li v-click>Other smart contracts?</li>
      <li v-click>Pre-requisites</li>
      <li v-click>Sell subdomains 🤷‍♀️</li>
      <li v-click>Off-chain (using CCIP)</li>
    </ul>
  </div>
</div>

<!--
And that contract is your logic, meaning you can rely on other smart contracts, have certain pre-requisites, like being part of a DAO, sell subdomains, or even off-chain (using CCIP)

Yes, CCIP
-->

---

<h2 class="mb-4">Fancy Things</h2>
<img src="/assets/networks.png" class="max-w-3xl" />

<!--
You wanna use all of these fancy things?
Ceramic, Lens, etc?

Introducing (the cross chain interoperability protocol)
-->

---

<h1>Cross Chain Interoperability Protocol</h1>
<h2 v-click>(CCIP)</h2>

<!--
the cross chain interoperability protocol. or ccip for short

TLDR ccip is an client-side EIP that lets you fetch data from off-chain resources.
-->

---

<img src="/assets/3668.png" class="absolute bottom-0 left-1/2 h-[45vh] -translate-x-1/2 z-10 drop-shadow-xl" />

<!--
yay, eip, but I dont have time to dive into that so

if you wanna store your data (in any of these places)
-->

---

<div class="flex gap-4">
    <div>
        <h2>On Chain</h2>
        <h2>Off Chain</h2>
        <h2>Rollup</h2>
        <h2>Layer 2</h2>
        <h2>Zero Knowledge</h2>
        <h2>HTTP</h2>
        <h2>HTCPCP</h2>
        <h2>Toaster</h2>
    </div>
    <img src="/assets/resolve_everywhere.png" v-click class="max-w-xl" />
</div>

<!--
any of these places you can!

-click-

ITL WORK EVERYWHERE!!!
-->


---

# ✨ Implement it in your dApp

<!--
So how do you implement it in your dApp App Wallet Device or anything else?
-->

---

<h1>Every</h1>
<h1 v-click>Major</h1>
<h1 v-click>Ethereum</h1>
<h1 v-click>Library</h1>

<!--
every major ethereum library has ENS (built in by default.)
-->

---

# 🛠️ Built in by default

<!--
built in by default.

which is (phenomenal)

this means that if you are using (ethersjs, web3js...)
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
(This means that if you are using) ethers.js, web3.js, or any other library, you can simply use the ENS functions that come with it, to resolve names to addresses, avatars, and fetch all the other cool info rom before.

(Ethers)
-->

---

<img src="/assets/stack-ethers.png" class="h-20" />

<!--
Ethers

Providing us with these (goregeous oneliners).
-->

---

<div class="flex gap-4">

<img src="/assets/stack-ethers.png" class="h-20" />

<div>
<div>
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
<div>
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

<div>
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
goregeous oneliners

-->

---

<img src="/assets/stack-wagmi.png" class="h-32">

<!--
Wagmi

Which wraps ethers, providing us with (react hooks).
-->

---

<div class="flex gap-4">

<img src="/assets/stack-wagmi.png" class="h-32">

<div>
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
react hooks
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

<img src="/assets/stack-ensjs.png" class="h-56">

<!--
And then there is ENSjs

which, incase you couldnt tell, is an extra library we built on top of Wagmi, using the graph's ENS subgraph

Meaning it gives you access to all sorts of extra cool features, history, ownership, transfers, and more.
-->

---

<img src="/assets/very-nice.gif" class="w-84" />

<!--
Very nice, you love to see it.

So we also have the (DNS Integration)
-->

---

# 🧩 DNS Integration

Any DNSSEC supported domain can be used as an ENS name.

<!--
DNS Integration

so any DNSSEC supported domain can be used as an ENS name! Woo

luc.computer is a DNS domain!

yes, .computer is an ICANN created TLD, so is ".engineer", ".cash", ".xyz", all that cool stuff
-->

---

# 🖼️ protocol.art

<!--
Protocol.art!, the .ART tld has recently stept up and taken control over their own resolver, meaning you can register .art domains on-chain now! Woo!

-->


---

<div class="flex flex-col gap-4 items-center">
  <h1 class="w-screen max-w-3xl text-center mb-2">🤳 dApps</h1>

  <div class="grid grid-cols-4 gap-4 items-end" style="color: #5298FF">
    <h3 class="flex flex-col gap-2 items-center">
      <img src="/assets/rainbow.png" class="h-16 drop-shadow-lg rounded-2xl" />
      Rainbow
    </h3>
    <h3 class="flex flex-col gap-2 items-center">
      <img src="/assets/coinbase.png" class="h-16 drop-shadow-lg rounded-2xl" />
      Coinbase
    </h3>
    <h3 class="flex flex-col gap-2 items-center">
      <img src="/assets/argent.svg" class="h-16 drop-shadow-lg" />
      Argent
    </h3>
    <h3 class="flex flex-col gap-2 items-center">
      <img src="/assets/lens.svg" class="h-16 drop-shadow-lg" />
      Lens
    </h3>
    <h3 class="flex flex-col gap-2 items-center">
      <img src="/assets/ensfairy.png" class="h-16 shadow-lg" />
      ENS Fairy
    </h3>
    <h3 class="flex flex-col gap-2 items-center">
      <img src="/assets/original.png" class="h-16 drop-shadow-lg" />
      Official Manager
    </h3>
    <h3 class="flex flex-col gap-2 items-center">
      <img src="/assets/v3.png" class="h-16 drop-shadow-lg" />
      Official Manager v3
    </h3>
  </div>
</div>

<!--
there are all these cool apps you can use to interact with our smart contracts.

If you wanna know more:
-->

---

# 📄 Documentation

## docs.ens.domains

<!--
Documentation,

can be found at https://docs.ens.domains/
-->

---

# 🏛️ DAO

## discuss.ens.domains

<!--
the ENS DAO can be found at discuss.ens.domains
-->

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
luc.computer
</h1>
<h3>🐦 @lucemansnl</h3>
<h3>🌐 luc.contact</h3>
<h3>📚 docs.ens.domains</h3>
<h3>💬 chat.ens.domains</h3>
<h3>🏛️ discuss.ens.domains</h3>

<!--
You can find me at lucemans.eth or @lucemansnl or luc.contact.
-->

---

<div class="flex items-center flex-col">
    <!-- <img src="/assets/happy_hacking.png" class="max-w-xl"> -->
    <h1 class="flex gap-4 items-center mt-4">
    Let's chat!
    </h1>
</div>

<!--
Let's chat!
-->
