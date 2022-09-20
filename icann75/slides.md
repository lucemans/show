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
-->

---

<img src="/assets/window.png" class="h-84" />

<!--
The internet is ever evolving. every single day
-->

---

# 1989

<!--
In 1989 ICANN was founded
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
With this, the days of insecure passwords, leaks, mass acount hcks and name availablity are limited.
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
youtube icann is videos of someones dog.
facebook icann is a guy named ican n.
instagram is an empty account.
-->

---

# <img src="/assets/key.png" class="h-12 inline" /> Public-key

<!--
So public key authentication solves a lot of these issues.
-->

---

<div class="flex gap-4 items-center">
<div v-click class="flex flex-col gap-2 items-start">
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
Users have a public-key private-key keypair

the public key is used as their identified accross the internet

and their private key is stored on their local device and doesnt leave the device.
-->

---

SINGLE TAP SLIDE

<!--
Now the beautiful thing is when a user wants to sign in all they have to do is tap a button on their phone, or press confirm on their computer.
-->

---

<div class="grid grid-cols-2 gap-24">
    <div class="flex gap-2 items-start">
        <div>
            <img src="/assets/name.png" class="h-8 inline" />
        </div>
        <div class="w-42 break-all font-bold">0x225f137127d9067788314bc7fcc1f36746a3c3b5</div>
    </div>
    <div class="flex flex-col items-start gap-4">
        <div><span v-click>Security</span><img src="/assets/checkmark.png" class="h-4 inline ml-2" v-click /></div>
        <div><span v-click>Machine-Readability</span><img src="/assets/checkmark.png" class="h-4 inline ml-2" v-click /></div>
        <div><span v-click>Human-Readability</span><img src="/assets/meh.png" class="h-4 inline ml-2" v-click /></div>
    </div>
</div>

<!--
Now although this method from a security persepective is awesome,
from a machine readability perspective, it is awesome, because the public key is a fixed length, which means easy validation, set storage length, etc.
from a human readability, lets be real, this is not great.
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

# How?

<!--
So how does it work?

Seeing as I only have 10 minutes and am limited by time I will keep it brief

-5 min mark-
-->

---

<img src="/assets/ethereum.png" class="h-32" />

<!--
ENS, the Ethereum Name Service, is built ontop of the Ethereum Blockchain.
-->

---

# 📒 Public Ledger

<!--
Ethereum is a public ledger that allows us to keep track of information in a decentralized permissionless system.
-->

---

# 📜 Smart Contracts

<!--
It has these things called smart contracts, which are essentially pieces of code on the blockchain, that anyone can read, theyre also on our github, but oh well, and they have all of the logic, and store the data. and they make sure everything happens according to pre-programmed rules.
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
ENS simply stores the name of the domain, and what public key, (or address if you will) is the current manager, and where it can go to fetch more info about the domain.
-->

---

# Everyone

<!-- we envision a world, where every user, has a domain -->

---

# DNS Domain

<div class="text-cyan-500" v-click>*provided it supports DNSSEC</div>

<!--
Any valid DNS domain *provided it supports DNSSEC, can be submitted to a smart contract, and those smart contracts then verify that you are the owner of the Domain by verifying TXT DNS records.
-->

---

# Ownership Transfer

<!--
If the registrant of a domain changes the new user has the ability to claim its records and use it as its identity.
-->

---

<h1 v-click>On-Chain Registry</h1>
<h2></h2>

<!--
In addition to the above, we have also built an on-chain registry.
That allows users to register domain names on the chain itself.
This specifically is done under the .eth TLD
 
Under this TLD we have a registration fee of the equivalent of 5 USD.
This is done to prevent users from hogging up the entire collection of names.
-->

---

# Registration Fees

<!--
These registration fees go to the ENS DAO
-->

---

<img src="/assets/dao.svg" class="h-32" />

<!--
(the ens dao),

a non profit organization that utalizes them to fund other public goods,

and projects in the ecosystem.
-->

---

<img src="/assets/dao.svg" class="h-18 mb-4" />

<div class="flex text-4xl">
    <div class="flex flex-col">
        <b>D</b>
        <b>A</b>
        <b>O</b>
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

<img src="/assets/dao.svg" class="h-18 mb-4" />

<!--
The ENS DAO is completely public, and similar to ICANN Multi-stakeholder model in many ways.

We are completely transparent.

Publically governed.

Have working groups, requests for proposals, stewards and much more.

And most of all, anyone can take part.
-->

---

# Motivation

<!--
Why

I can hear you say.

I would say there is none.
-->

---

# Public Good

<!--
We are a collective of open source public good contributors who care to make a difference in the world.
-->

---

# Funding

<!--
Development on ENS, is funded by the ENS DAO, and is annually publically voted on by the DAO.
-->

---

# Goals

<!--
In contrary to some of the other systems out there, we aim to extend and improve the DNS' functionality with today and tomorrow in mind.
-->

---

<!--
Thank you for your time, and I look forward, to the great things we can accomplish together.
-->

---


<!--
Target Time: 10 minutes
Presentation: 3:4, but not sure

good morning icann75
my name is luc van kampen

the internet is evolving every single day.
in the web3 space
shift from username password authentication, to public key authentication.
the provable technologies we use today, that power https, ssl, pgp, dnssec, and many more,
can now be used for user authentication.
with this, the days of passwords, password leaks, mass account hacks, and name stealing are over.

Using public key authentication users simply have a private key, and sign messages in order to perform actions.
Authentication, posting a message, and more, are simply authorized using the private key, and allow us to get explicit user confirmation.

With this, users public-keys are now their identity accross the web, and although this system is works very well from a security and machine perspective, it lacks human-readability.

--

in contrary to other systems that might be out ther we are focused on integrating and extending the DNS
we want to work with icann to build a better internet.

we want to coorperate and integrate with the internet community.

looking forward to working together.

-->
