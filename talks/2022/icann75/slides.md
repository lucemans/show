---
theme: ./theme/
title: ENS ICANN75
layout: default
color: pink
---

# Test Slide

<!--
Test Annotation
-->

---

<div></div>

<!--
Alright u got this!
-->

---

# <img src="/assets/wave.png" class="h-18 inline" />

<!--
Good morning afternoon or evening whenever and wherever you are.

Wether youre joining in person, here in kuala lumpur, or virtually.

Thank you for being here.

As stated, my name is luc van kampen, and I am here today to talk about the Ethereum Name Service.

(the internet is evolving)
-->

---

<img src="/assets/window.png" class="h-84" />

<!--
The internet is ever evolving.

I mean we are here after all.
-->

---

# 1989

<!--
In 1989 ICANN was founded. To bring clarity, order, and logic, to the chaos that is the internet.
-->

---

# 2004
<h2 v-click>Web 2.0</h2>

<!--
In 2004 we hit the social media era, centralization,

an estimated 80 million different websites

1 billion global users

later we decided to coin this -click- web 2
-->

---

# 5.03 billion
<h2 v-click>(63.1% of the Polulation)</h2>

<!--
And now with over 5 billion user to date, over 63 % of the population,

the world is changing rapidly every day.

and with this (authentication is rapidly changing)
-->

---

# Authentication

<!--
authentication is rapdily changing aswell.
we are seeing (a shift from)
-->

---

# <img src="/assets/lockkey.png" class="h-12 inline" /> Password-based

<!--
a shift from username password authentication (to public key authentication)
-->

---

# <img src="/assets/key.png" class="h-12 inline" /> Public-key

<!--
to public key authentication.
-->

---

<div class="grid grid-cols-2 max-w-2xl">
    <div class="flex items-center justify-center">
        <img src="/assets/https.png" class="h-24 w-auto object-contain" v-click />
    </div>
    <div class="flex items-center justify-center">
        <img src="/assets/ssl.png" class="h-24 w-auto object-contain" v-click />
    </div>
    <div class="flex items-center justify-center">
        <img src="/assets/pgp.png" class="h-24 w-auto object-contain" v-click />
    </div>
    <div class="flex items-center justify-center">
        <img src="/assets/dnssec.png" class="h-24 w-auto object-contain" v-click />
    </div>
</div>

<!--
Something that can be found, in the provable technologies we already use today, that power https, ssl, pgp, dnssec, and many more.
-->

---

# Authentication

<!--
can now be used for user authentication
-->

---

<h2 v-click>Insecure Passwords</h2>
<h2 v-click>Password Leaks</h2>
<h2 v-click>Mass Account Hacks</h2>
<h2 v-click>Name Availability</h2>

<!--
With this, the end to insecure passwords, leaks, mass acount hcks and name availablity is near.

name availability, a slightly weird issue, but still very prevalent, allow me to explain.
-->

---

<div class="grid grid-cols-3 gap-4 absolute" style="transform: translateX(-50%) translateY(-50%);">
    <div class="flex flex-col items-center" v-click>
        <img src="/assets/icanntwitter.png" class="w-52" />
        <span>@icann</span>
    </div>
    <div class="flex flex-col items-center" v-click>
        <img src="/assets/icannlinkedin.png" class="w-52" />
        <span>@icann</span>
    </div>
    <div class="flex flex-col items-center" v-click>
        <img src="/assets/icannfacebook.png" class="w-52" />
        <span>@icannorg</span>
    </div>
    <div class="flex flex-col items-center" v-click>
        <img src="/assets/icanninstagram.png" class="w-52" />
        <span>@icannorg</span>
    </div>
    <div class="flex flex-col items-center" v-click>
        <img src="/assets/icannyoutube.png" class="w-52" />
        <span>@ICANNnews</span>
    </div>
    <div class="flex flex-col items-center" v-click>
        <img src="/assets/icannflickr.png" class="w-52" />
        <span>@icannphotos</span>
    </div>
    <div class="flex flex-col items-center" v-click>
        <img src="/assets/icannsoundcloud.png" class="w-52" />
        <span>@icann</span>
    </div>
    <div class="flex flex-col items-center" v-click>
        <img src="/assets/icannwebsite.png" class="w-52" />
        <span>icann.org</span>
    </div>
</div>

<!--
If we look at some of ICANN's social media for example.

youtube icann is videos of someones dog.
facebook icann is a guy named ican n.
instagram is an empty account.
-->

---

# <img src="/assets/key.png" class="h-12 inline" /> Public-key

<!--
So public key authentication solves a lot of these issues.

Users have a public-key private-key keypair

(where the users public key, is used to identity them on the internet.)
-->

---

<div class="flex gap-4 items-center">
<div class="flex flex-col gap-2 items-start">
<div>
<img src="/assets/lock.png" class="h-8 inline" />
<img src="/assets/name.png" class="h-8 inline" />
</div>
<div class="w-42 break-all font-bold">0x225f137127d9067788314bc7fcc1f36746a3c3b5</div>
</div>
<span class="text-4xl" v-click>&#60;-&#62;</span>
<div v-click class="flex flex-col gap-2 items-start">
<div>
<img src="/assets/phone.png" class="h-8 inline" />
<img src="/assets/key.png" class="h-8 inline" />
</div>
<div class="w-42 break-all font-bold">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
</div></div>

<!--
where the users public key, is used to identity them on the internet

and their private key is stored on their local device and doesnt leave the device.

(now the beautiful thing)
-->

---

<img src="/assets/you_have.png" class="absolute pb-7" style="transform: translate(-50%, -50%);" />

<!--
Now the beautiful thing is when a user wants to sign in all they have to do is tap a button on their phone, or press confirm on their computer.

Using their favourite biometrics, face ID, pin-code, password, or OTP,

All locally, on their device.
-->

---

<div class="grid grid-cols-2 gap-24">
    <div class="flex gap-2 items-start">
        <div>
            <img src="/assets/name.png" class="h-8 inline" />
        </div>
        <div class="w-42 break-all font-bold">0x225f137127d9067788314bc7fcc1f36746a3c3b5</div>
    </div>
    <div class="flex flex-col items-start gap-4 text-xl font-bold">
        <div><span v-click>Security</span><img src="/assets/checkmark.png" class="h-4 inline ml-3" v-click /></div>
        <div><span v-click>Scalability</span><img src="/assets/checkmark.png" class="h-4 inline ml-3" v-click /></div>
        <div><span v-click>Machine-Readability</span><img src="/assets/checkmark.png" class="h-4 inline ml-3" v-click /></div>
        <div><span v-click>Human-Readability</span><img src="/assets/meh.png" class="h-4 inline ml-3" v-click /></div>
    </div>
</div>

<!--
So, public key encryption,

from a security perspective is awesome,

from a scalability perspective, is awesome,

from a machine readability perspective, it is awesome, because the public key is a fixed length, which means easy validation, set storage length, etc.

but from a human readability, lets be real, this is not great.
-->

---

<img src="/assets/ens.svg" class="h-24" />

<!--
This is where ENS comes in.
-->

---

<div class="flex gap-4 items-center">
    <div v-click class="flex flex-col gap-2 items-center text-center">
        <div>
            <img src="/assets/lockkey.png" class="h-8 inline" />
        </div>
        <div class="w-42 break-all font-bold">Public Key<br />Authentication</div>
    </div>
    <span class="text-4xl" v-click>&#60;-&#62;</span>
    <div v-click class="flex flex-col gap-2 items-center text-center">
        <div>
            <img src="/assets/globe.png" class="h-8 inline" />
        </div>
        <div class="w-42 break-all font-bold">Domain Name<br />System</div>
    </div>
</div>

<!--
ENS aims to integrate public-key authentication with the existing DNS,
and allows users to use their existing Name within the DNS, as their identity accross the web.
-->

---

<div class="grid grid-cols-3 gap-4 absolute" style="transform: translateX(-50%) translateY(-50%);">
    <div class="flex flex-col items-center">
        <img src="/assets/icanntwitter.png" class="w-52" />
        <span>@icann</span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannlinkedin.png" class="w-52" />
        <span>@icann</span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannfacebook.png" class="w-52" />
        <span>@icannorg</span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icanninstagram.png" class="w-52" />
        <span>@icannorg</span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannyoutube.png" class="w-52" />
        <span>@ICANNnews</span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannflickr.png" class="w-52" />
        <span>@icannphotos</span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannsoundcloud.png" class="w-52" />
        <span>@icann</span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannwebsite.png" class="w-52" />
        <span>icann.org</span>
    </div>
</div>

<!--
So instead of this, (we have this)
-->

---

<div class="grid grid-cols-3 gap-4 absolute" style="transform: translateX(-50%) translateY(-50%);">
    <div class="flex flex-col items-center">
        <img src="/assets/icanntwitter.png" class="w-52" />
        <span>icann.org <img src="/assets/lockkey.png" class="h-4 inline" /></span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannlinkedin.png" class="w-52" />
        <span>icann.org <img src="/assets/lockkey.png" class="h-4 inline" /></span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannfacebook.png" class="w-52" />
        <span>icann.org <img src="/assets/lockkey.png" class="h-4 inline" /></span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icanninstagram.png" class="w-52" />
        <span>icann.org <img src="/assets/lockkey.png" class="h-4 inline" /></span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannyoutube.png" class="w-52" />
        <span>icann.org <img src="/assets/lockkey.png" class="h-4 inline" /></span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannflickr.png" class="w-52" />
        <span>icann.org <img src="/assets/lockkey.png" class="h-4 inline" /></span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannsoundcloud.png" class="w-52" />
        <span>icann.org <img src="/assets/lockkey.png" class="h-4 inline" /></span>
    </div>
    <div class="flex flex-col items-center">
        <img src="/assets/icannwebsite.png" class="w-52" />
        <span>icann.org <img src="/assets/lockkey.png" class="h-4 inline" /></span>
    </div>
</div>

<!--
We have this. And anywhere accross the internet, if they see "icann.org", theyll know its the legitimate icann.org

And not just for icann, for every user accross the internet.
-->

---

<div class="w-64 text-2xl break-all font-bold">0x225f137127d9067788314bc7fcc1f36746a3c3b5</div>

<!--
Incase you were wondering, this is me

-look at screen-
-->

---

<img src="/assets/profile.png" class="max-w-xs" />

<!--
thats better,
so yeah, this is me,
I happen to have registered luc.computer, (please dont take it away from me),
and have set it as my primary name.

anybody looking to find me on the internet, on any website that supports ens
-->

---

<img src="/assets/app_ens_1.png" class="" />

---

<img src="/assets/app_ens_2.png" class="max-w-4xl absolute" style="transform: translate(-50%, -50%)" />

---

<img src="/assets/app_uniswap_1.png" class="" />

---

<img src="/assets/app_uniswap_2.png" class="max-w-4xl absolute" style="transform: translate(-50%, -50%)" />

---

<img src="/assets/app_1inch_1.png" class="" />

---

<img src="/assets/app_1inch_2.png" class="max-w-4xl absolute" style="transform: translate(-50%, -50%)" />

---

<img src="/assets/app_edgeserver_1.png" class="" />

---

<img src="/assets/app_edgeserver_2.png" class="max-w-4xl absolute" style="transform: translate(-50%, -50%)" />

---

# Many more

<!--
And many many more

(in fact at this very moment)
-->

---

<div class="flex gap-8">
<div>
    <h1>2.4 Million</h1>
    <h2>Names</h2>
</div>
<div v-click>
    <h1>600k+</h1>
    <h2>Users</h2>
</div>
<div v-click>
    <h1>1k+</h1>
    <h2>Integrations</h2>
</div>
</div>

<!--
(In fact at this very moment) we have over 2.4 million active names, spread out accross around 600k+ different people around the world.

and over thousands of sites already support ENS natively.

(so how)
-->

---

# How?

<!--
So how does it work?

Seeing as I only have 10 minutes and am limited by time I will keep it brief

-5 min mark-
-->

---

<img src="/assets/ens.svg" class="h-32" />

<!--
ENS, the Ethereum Name Service, is built ontop of the (Ethereum Blockchain)
-->

---

<img src="/assets/ethereum.png" class="h-32" />

<!--
Ethereum Blockchain. (Ethereum is a public ledger)
-->

---

# 📒 Public Ledger

<!--
Ethereum is a public ledger that allows us to keep track of information in a decentralized permissionless system.
-->

---

# 📜 Smart Contracts

<!--
It has these things called smart contracts, which are essentially pieces of code on the blockchain, that anyone can read, and they have all of the logic, and store the data. and they make sure everything happens according to pre-programmed rules.
-->

---

<div class="mt-2 w-64 bg-white p-4 rounded-md shadow-md text-lg flex flex-col gap-3">
    <div>
        <p v-click><b>luc.computer</b></p>
        <p v-click>0x225...c3b5</p>
        <p v-click><b>-></b> 📜</p>
    </div>
    <div class="flex gap-1 justify-center" v-click>
        <div class="bg-neutral-800 w-1 h-1 rounded-full"/>
        <div class="bg-neutral-800 w-1 h-1 rounded-full"/>
        <div class="bg-neutral-800 w-1 h-1 rounded-full"/>
    </div>
</div>

<!--
ENS simply stores the name of the domain, and what public key, (or address if you will) is the current manager,

As well as reverse lookup, so you can feed it an address and it will spit out the name.

and where it can go to fetch more info about the domain.

things like avatar, banner, bio, phone number, or other ways to reach out.
-->

---

# Everyone

<!-- we envision a world, where every user, has a domain -->

---

# DNS Domain

<div class="text-cyan-500" v-click>*provided it supports DNSSEC</div>

<!--
Any valid DNS domain *provided it supports DNSSEC, can be submitted to the smart contract, and those smart contracts then verify that you are the owner of the Domain by verifying TXT DNS records.
-->

---

# Ownership Transfer

<!--
If the registrant of a domain changes the new user has the ability to claim its records and use it as its identity.
-->

---

<h1 v-click>On-Chain Registry</h1>

<!--
In addition to the above, we have also built an on-chain registry.
That allows users to register domain names on the chain itself.

(This all is done under the)
-->

---

# .eth

<!--
This specifically is done under the .eth TLD

This tld (enables us)
-->

---

# Decentralized Web

<!--
(this tld) enables us to build decentralized applications, that users can visit without have to contact a central web server.

websites that can be loaded at ridiculously fast and scalable speeds because data locality isnt a problem anymore. Worth a whole other talk on its own.
-->

---

# Registration Fees

<!--
Under this TLD we have a registration fee of the equivalent of 5 USD.
This is done to prevent users from hogging up the entire collection of names.

These registration fees go to the ENS DAO
-->

---

<img src="/assets/dao.svg" class="h-32" />

<!--
(the ens dao),

a non profit organization that utalizes them to fund public goods,

and projects in the ecosystem.
-->

---

<img src="/assets/dao.svg" class="h-18 mb-4" />

<div class="flex text-4xl">
    <div class="flex flex-col text-transparent">
        <b class="bgdao" style="">D</b>
        <b class="bgdao" style="">A</b>
        <b class="bgdao" style="">O</b>
    </div>
    <div>
        <div v-click>ecentralized</div>
        <div v-click>utonomous</div>
        <div v-click>rganization</div>
    </div>
</div>

<!--
The ens dao, is a Decentralized Autonomous Organization
-->

---

<img src="/assets/dao.svg" class="h-22 -ml-3" />
<h3 v-click>Transparent</h3>
<h3 v-click>Publically Governed</h3>
<h3 v-click>Working Groups</h3>
<h3 v-click>ENS Improvement Proposals</h3>
<h3 v-click>Stewards</h3>
<h3 v-click>Anyone</h3>

<!--
The ENS DAO is completely public, and similar to ICANN Multi-stakeholder model in many ways.

We are completely transparent.

Publically governed.

Have working groups, requests for proposals, stewards and much more.

And most of all, anyone can take part.
-->

---

# 📢 Motivation

<!--
Why

I can hear you say.

Let me explain.
-->

---

# 🌎 Public Good

<!--
We are a collective of open source public good contributors who care to make a difference in the world.
-->

---

# 💰 Funding

<!--
Development on ENS, is funded by the ENS DAO, and is done through proposal, and is annually publically voted on by the DAO
-->

---

# 🥅 Goals

<!--
In contrary to some of the other systems out there, we aim to extend and improve the DNS' functionality with today and tomorrow in mind.
-->

---

<h1 v-click>Questions ❓</h1>
<h2 v-click class="text-blue-500">luc.contact</h2>

<!--
Okay.

-breathe-

In a minute I think we have time for questions.

If your question does not end up getting answered, or you have one after the fact, you can always reach out to me, @ luc.contact
-->

---

<h1>🙏 Thank you</h1>

<!--
I just quickly wanted to say

Thank you for your time, and I look forward, to the great things we can accomplish together.
-->

---

<h1>Questions ❓</h1>
<h2 class="text-blue-500">luc.contact</h2>

<!--
Questions slot
-->
