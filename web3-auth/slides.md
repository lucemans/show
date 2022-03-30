---
theme: ./theme/
title: Web3 Authentication
layout: cover
color: pink
website: luc.computer
handle: lucemansnl
---

# PASSWORDLESS
#### WITH WEB3

<!--
Welcome to my presentation I guess
-->

---
layout: speaker
color: pink
name: LUCEMANS
bio: CREATE EPIC SHIT
avatar: /assets/avatar.png
tip: WEB 3.0 AUTH
website: luc.computer
handle: lucemansnl
---

# SPEAKER PAGE

<!--
Welcome to my speaker page, here I get egoistic and talk about my self for a bit.

Welcome to (from zero to hero, passwordless authentication)
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

FROM <span class="pink">ZERO</span> TO <span class="blue">HERO</span>
# PASSWORDLESS
<div v-click>(WITH WEB3)</div>

<!--
from zero to hero, passwordless authentication,

with web 3
-->

---
layout: head
color: blue
tip: WEB 3.0 AUTH
website: luc.computer
handle: lucemansnl
---

## AGENDA

<ul>
    <li v-click>The Problem</li>
    <li v-click>Passwordless</li>
    <li v-click>Web 1 vs Web 2 vs Web 3</li>
    <li v-click>Migrating to Web 3</li>
    <li v-click>Identity Management</li>
    <li v-click>Demo</li>
</ul>

<!--
But before we can start, some disclaimers -click-
-->

---
layout: head
color: blue
tip: WEB 3.0 AUTH
website: luc.computer
handle: lucemansnl
---

## DISCLAIMER

<ul>
    <li v-click>I will go very fast</li>
    <li v-click>If I peak your interest 🥳</li>
    <li v-click>Want to read more? <span class="blue">luc.computer</span></li>
    <li v-click>I cannot guarantee that I'm funny</li>
</ul>

<!--
I will go very fast
If I peek your interest, yay
If you want to read more, check luc.computer, that where I post most of my shit

And last but not least I cannot guarantee that I am funny
-->

---
layout: head
color: blue
tip: WEB 3.0 AUTH
website: luc.computer
handle: lucemansnl
---

## THANKS

<div>
<span class="blue" v-click>@dawntraoz</span>
<p v-click>for inspiring me to use <span class="pink">slidev</span></p>

<span class="blue" v-click>@reactlivenl</span>
<p v-click>for making this <span class="pink">this happen</span></p>
</div>

<!--
Special thanks to Alba, for making the slidev unicorn theme, which was a great inspiration to make my own theme to suit my overall idea, and to passionatepeople for making this happen.
-->

---
layout: cover
color: pink
website: luc.computer
handle: lucemansnl
---

# PASSWORDLESS

<!--
So passwordless login. Lets be real, there is only one reason I want this.
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# ITZ COOL

<img src="/assets/cool.png" />

<!--
No but to be real with you, its because (passwords, are a pain)
-->

---
layout: cover
color: pink
website: luc.computer
handle: lucemansnl
---

<v-click>
<h1>PASSWORDS ARE</h1>
</v-click>
<v-click>
<h3>A PAIN</h3>
</v-click>

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# DOESN'T MATTER

<img src="/assets/if_they_are_here.png" />

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

<img src="/assets/or_here.png" />

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

<img src="/assets/or_in_bitwarden.png" />

<!--
or, in bitwarden

Which is,

a password manager
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

<h1>PASSWORD</h1>
<h4>MANAGERS</h4>

<!--
Password managers are tools that store / help you maintain order in the chaos of your passwords

Popular examples include (bitwarden, lastpass, and keepass)
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

<img src="/assets/password_managers.png" />

<!--
bitwarden, lastpass, and keepass.

I personally use (bitwarden)
-->

---
layout: head
color: blue
website: luc.computer
handle: lucemansnl
---

# BITWARDEN

<ul>
    <v-click><li>SIMPLE</li></v-click>
    <v-click><li>FEATURE COMPLETE</li></v-click>
    <v-click><li>CROSS-PLATFORM</li></v-click>
    <v-click><li>AUTO-RECOGNIZES</li></v-click>
    <v-click><li>SELF-HOSTABLE</li></v-click>
</ul>

<!--
bitwarden. Cause it has all of these benefits

But enough about bitwarden, (why, you ask)
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

# WHY?
<v-click>
    <h3>PASSWORD123!</h3>
</v-click>

<!--
Why you ask?

Because passwords like these are too predictable

We need your password to be secure, or atleast, secure enough where it will take a potential attacker a too long time to guess it
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

# SECURE
<h4 v-click>cGFzc3dvcmQxMjMK</h4>
<h5 v-click>(totally not password123 in base64)</h5>

<!--
Speaking of secure,

THIS, could be a secure enough password, that you just store in your password manager, and forget about.
Set it and forget it.

And you obviously you have different ones for each website (i hope) :smirk:

-click-

:eyes:
-->

---
layout: cover
color: pink
line: same
website: luc.computer
handle: lucemansnl
---

<h1>MULTI</h1>
<h4>FACTOR</h4>

<!--
Multi factor authentication, the idea of having both a password and some other "factor" to sign in.
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
clicks: 5
---

## MULTI FACTOR

<ul>
    <li v-click="1">YOU KNOW<img src="/assets/you_know.png" class="abs" style="width: 140px;top:-10px;left:100%;" v-click-hide="2"/></li>
    <li v-click="2">YOU HAVE
        <img src="/assets/you_have.png" class="abs" style="width: 350px;top:-180px;left:calc(100% + 0.5rem);z-index:-1;" v-click/>
        <img src="/assets/you_have_2.png" class="abs" style="width: 380px;top:0px;left:-300px;z-index:-1;" v-click/>
        <img src="/assets/you_have_3.png" class="abs" style="width: 240px;top:-215px;left:-300px;z-index:-1;" v-click/>
    </li>
</ul>

<!--
That first factor can be something you know,

Like a password orso

And the second factor, something you have,

Like a phone for OTP tokens, SMS Messages, or in-app push notifications,

Your email (or physical mail) to receive a usually 6 digit code or a verification slash login link.

Or in accordance RFC 11 49, by message carrier pigeon.

So what if we wanted all this multi-factor goodness, but in a
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

<h1>SINGLE FACTOR</h1>

<!--
single factor,

A simple one tap and you are in

Allow me to picture this for you
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

<h1>THE FLOW</h1>
<h4>A USER EXPERIENCE STORY</h4>

<!--
The flow,

A user experience story,

Or well, the way that *I* envision passwordless login
-->

---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
---

## SEE THE THING

<img src="/assets/see_the_thing.png" />

<!--
See the thing
-->

---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
clicks: 0
---

## PROVE WHO I AM

<img src="/assets/prove_who_i_am.png" v-click="0"/>
<img src="/assets/prove_who_i_am.gif" class="abs" style="width: 350px;top:230px;left:170px;z-index:0;" v-click="0"/>

<!--
Prove who I am
-->

---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
---

## PROFIT

<img src="/assets/profit.png" />

<!--
And Profit

Cant be that bad right?
-->

---
layout: cover
color: pink
website: luc.computer
handle: lucemansnl
---

# PASSWORDLESS

<!--
We call it, passwordless login
-->

---
layout: head
color: pink
tip: PASSWORDLESS
website: luc.computer
handle: lucemansnl
---

## IMPLEMENTATIONS

<ul>
    <li v-click>PIV</li>
    <li v-click>OpenPGP</li>
    <li v-click>FIDO U2F</li>
    <li v-click>FIDO2<ul><li>REDISTENT KEYS</li></ul></li>
    <li v-click>WEB3<ul><li>WALLET</li></ul></li>
</ul>

<!--
There has been a fair bit of effort in the passwordless login space which obviously deserve to get recognized.

piv, openpgp fido u2f, fido

which, in my case, my yubikey (or the google titan)

They all deserve a talk on their own, but because this is web3 related, obviously, we will be talking about the web3 variant here.
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

# WHAT IS WEB3?

<!--
So luc, I hear you saying

What is this web 3 thing you speak of?
-->

---
layout: head
color: yellow
website: luc.computer
handle: lucemansnl
---

# BUZZWORDS

<ul>
    <li v-click>NFT</li>
    <li v-click>EXCHANGE RATE</li>
    <li v-click>MARKET CAP</li>
    <li v-click>CRYPTO</li>
    <li v-click>DAO</li>
</ul>

<!--
To be able to somehow normally discuss the whole **web3** phenomenon I will first have to get some **buzzwords** out of the way.

**Do not worry**, once I have said these I will **not** repeat them again.

Now that we have made the bitcoin/blockchain/nft elites happy, I will __NOT__ be saying these words again.
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

# WHAT IS WEB3?

<!--
Lets continue

To understand what web3 is we will have to understand about web1 and web2 first,
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

# HISTORY
#### LESSON

<!--
Time for a quick history lesson,

Dont worry, it wont last long :smirk:

**Disclaimer**, I will be paraphrasing a fair bit, but you get the gist.
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# WEB 1.0

<ul>
    <li v-click="1">TRANSFER DOCUMENTS
        <img src="/assets/bob_to_alice.png " class="abs hideAfterPrior" style="width: 100%; top: 2.5rem;" v-click="2"/>
        <img src="/assets/bob_and_alice.png" class="abs hideAfterPrior" style="width: 47%; top: 2.5rem;left:50%;transform:translateX(-50%)" v-click="3"/>
    </li>
    <li v-click="4">UNIFORM WAY
        <img src="/assets/bob_html_alice.png" class="abs" style="width: 120%; top: 2.5rem;left:calc(50% + 4.5rem);transform:translateX(-50%)" />
    </li>
</ul>

<!--
Web 1.0 started off fairly simple,

The goal was to transfer documents

Bob wanted to send things to alice, and vice versa

The http spec was first introduced, and bob and alice had a great time

Until they kinda both got annoyed at the incongruency between their posts and they decided to use html to have a uniform way to share documents.

Oh and it came with nice "hyper" "links" aswell, if you get what I am saying.

after some time css, and JS joined the picture, and people started using this document sharing things for things it wasnt intended to do.
-->

---
layout: cover
color: green
website: luc.computer
handle: lucemansnl
---

### 2004

<!--
Then around 2004 (which we later denounced as the beginning of web 2.0) the focus shifted.
-->

---
layout: head
color: green
website: luc.computer
handle: lucemansnl
clicks: 4
---

# WEB 2.0

<ul>
    <li v-click="1">USER-GENERATED CONTENT
        <img src="/assets/user_generated_content.png" class="abs" style="width: 200px;left: 50%;transform:translateX(-50%);" v-click-hide="2">
    </li>
    <li v-click="2">API-DRIVEN WORLD
        <img src="/assets/api_driven_world.png" class="abs" style="width: 300px;" v-click-hide="3">
        <img src="/assets/karen_internet.png" class="abs" style="width: 64px;left: 50%;transform:translateX(-50%);" v-click="3">
        <img src="/assets/tower.jpg" class="abs" style="width:300px;left:300px;top:-10px;transform:rotate(-10deg)" v-click="4">
        <img src="/assets/karen.jpg" class="abs" style="width:300px;left:-300px;top:-30px;transform:rotate(3deg);z-index:-1;" v-click="4">
    </li>
</ul>

<!--
Web 2.0: The central focus was around two things,

firstly user-generated content,

Your uncle bob could now, "send you a message" over the world-wide-web :omg:

And secondary, an api-driven world, a world where, everything would talk to everything.

Your bank, could talk to your mom, who could talk to your smart home, which could talk to your bank, etc etc, you get the drill.

This internet highway would be like the female brain, everything is connected to everything -bzz-.

That is a reference to the tale of two brains, if you have seen that, good watch, would recommend.

And then later we realized that letting ur neighbor karne talk to other neighbor karens might nave not been the best idea. But oh well.
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

# WEB 3.0

<!---
Come, web three point o
-->

---
layout: head
color: blue
website: luc.computer
handle: lucemansnl
clicks: 4
---

# WEB 3.0

<ul>
    <li v-click>DECENTRALIZED</li>
    <li v-click>SECURE</li>
    <li v-click="3">OPEN-SAUCE
        <img src="/assets/open_sauce.png" class="abs" style="right:-0.2em;top:0.2em;height: 0.9em;" v-click="4">
        <p style="position:absolute;top:60%;right:-1em;" v-click="4">SOURCE</p>
    </li>
</ul>

<!---
A decentralized

more secure

and open-sauce

euuhm, open source

version of the internet
-->

---
layout: head
color: blue
tip: WEB 3.0
website: luc.computer
handle: lucemansnl
---

## DECENTRALIZED

<ul>
    <li v-click>DISTRIBUTED PROCESSING</li>
    <li v-click>USER CONTROLS DATA</li>
    <li v-click>CRYPTOGRAPHY</li>
</ul>

<!---
Decentralized,

meaning that all processing power would be done by the user,
so, no servers

And the people get control over the data

Yes, data is public usually public, but thats better then on some companies computer with who knows what other data they might have collected because you once up on a time clicked the close on the cookie banner.

We are all guilty of it, be real, who of you has read every license agreement of every company they have ever dealt with, directly or indirectly.

Noone, exactly.

So with all of this in mind, i see how people are quick to say (bye bye to the datacenters)
-->

---
layout: cover
color: blue
tip: WEB 3.0
website: luc.computer
handle: lucemansnl
---

<img src="/assets/servers.png" />

<!---
Bye bye to the datacenters, but not so quick
-->

---
layout: head
color: blue
tip: WEB 3.0
website: luc.computer
handle: lucemansnl
---

## HOSTING

<ul>
    <li v-click>Users</li>
    <li v-click>Write</li>
    <li v-click>Read</li>
</ul>

<!---
However in a distributed world, the burder of upkeep has shifted from creators/coorporations paying thousands in server hosting fees.
To the users of the platform, paying in small increments, for any write-actions they perform. Reading from the blockchain ofcourse is free.

So now that we have seen this, lets talk about some differences between web3 and web2
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

# WEB 3.0
#### DIFFERENCES

---
layout: twocol
color: blue
color1: green
color2: blue
tip: DIFFERENCES
website: luc.computer
handle: lucemansnl
---

## WEB2

<ul>
    <li v-click="1">BACKEND
        <img src="/assets/node.png" class="anim icon a0" />
        <img src="/assets/deno.png" class="anim icon a1" />
        <img src="/assets/python.png" class="anim icon a2" />
    </li>
    <li v-click="3">DATABASE
        <img src="/assets/scylla.png" class="anim icon a0" />
        <img src="/assets/cassandra.png" class="anim icon a1" />
        <img src="/assets/redis.png" class="anim icon a2" />
    </li>
    <li v-click="5">CDN
        <img src="/assets/netlify.png" class="anim icon a0" />
        <img src="/assets/vercel.png" class="anim icon a1" />
        <img src="/assets/cloudflare.png" class="anim icon a2" />
    </li>
    <li v-click="7">FRONTEND
        <img src="/assets/react.png" class="anim icon a0" />
        <img src="/assets/vue.png" class="anim icon a1" />
        <img src="/assets/angular.png" class="anim icon a2" />
        <img src="/assets/svelte.png" class="anim icon a3" />
    </li>
</ul>

::right::

## WEB3

<ul>
    <li v-click="2">SMART CONTRACTS
        <img src="/assets/solidity.png" class="anim icon a0" />
        <img src="/assets/ethereum.png" class="anim icon a1" />
    </li>
    <li v-click="4">BLOCKCHAIN
        <img src="/assets/ethereum.png" class="anim icon a0" />
        <img src="/assets/solana.png" class="anim icon a1" />
    </li>
    <li v-click="6">INTERPLANETARY FS
        <img src="/assets/ipfs.png" class="anim icon a0" />
    </li>
    <li v-click="8">FRONTEND
        <img src="/assets/react.png" class="anim icon a0" />
        <img src="/assets/vue.png" class="anim icon a1" />
        <img src="/assets/angular.png" class="anim icon a2" />
        <img src="/assets/svelte.png" class="anim icon a3" />
    </li>
</ul>

<!--
The whole idea of the backend.... Are being replaced by smart-contracts, that run on miners, and are open source.

I could do a whole talk on smart contracts, but thats for later.

The database, that was previously on a server in a datacenter somewhere behind lock and key, is now the public (write-only) blockchain, and data is stored in messages attached to 0-value transactions. (explaination for another time, but yeah)

CDN's or "Edge Servers" like ..., gets superseded by the IPFS, a system that stores data on every computer involved.

And for the frontend, with our beloved react, vue, angular, svelte, etc.

Haha, you thought I was getting rid of angular didnt you? Nah, the frontend stays mostly the same, the way we interface with our api's is just slightly different.

So throughout all this madness (How do we maintain our identity?)
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

# IDENTITY

<!--
How do we maintain our identity?
-->

---
layout: head
color: yellow
tip: IDENTITY
website: luc.computer
handle: lucemansnl
---

# PUBLIC-KEY

<ul>
    <li v-click>COMMUNICATION</li>
    <li v-click>SIGN ACTIONS</li>
    <li v-click>VERIFY IDENTITY</li>
</ul>

<!--
This is where the whole public-key encryption from before comes in.

Public-key encryption provides a way to securely communicate,

Sign off on transactions

And thereby verify your identity
-->

---
layout: head
color: yellow
tip: IDENTITY
website: luc.computer
handle: lucemansnl
---

# PUBLIC-KEY

<ul>
    <li v-click>GPG Signing (Git Commits)</li>
    <li v-click>Secure Shell (SSH)</li>
    <li v-click>TLS / SSL</li>
    <li v-click>Encrypt Email</li>
    <li v-click>Blockchain</li>
    <li v-click>and more...</li>
</ul>

<!--
Ways in which we see this in practice today is in 

GPG Signing

SSH

TLS / SSL, so basically any site served over https

Encrypted email (the governments could learn a lesson here)

Blockchain technologies

and much much more
-->

---
layout: cover
color: yellow
tip: IDENTITY
website: luc.computer
handle: lucemansnl
---

# SIGNING

<!--
So lets talk about that whole signing thing.

In order to sign something we need (a payload)
-->

---
layout: head
color: yellow
tip: IDENTITY
website: luc.computer
handle: lucemansnl
---

# SIGNING

<img src="/assets/public_key.png" />

<!--
A payload, see here, a basic payload for something like authentication

"Hey there, I am Lucemans, and would like to sign in to luc.computer"

We sign this payload (like so)
-->

---
layout: head
color: yellow
tip: IDENTITY
website: luc.computer
handle: lucemansnl
---

# SIGNING

<img src="/assets/public_key_2.png" />

<!--
like so, this signature is proof that we, "lucemans" (well your public key but for sake of example my name), would like to sign in to "luc.computer".

Seems awfully lot like a jwt key doesn't it? With a subject and a userId?

So here is what we can do with this (the flow)
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

# THE FLOW
<center>A REVISED USER EXPERIENCE STORY</center>

<!--
The flow,

A **revised** user experience story

(remember this?)
-->

---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
---

## REMEMBER THIS?

<div class="three-grid">
    <div>
        <img src="/assets/see_the_thing.png"/>
        <div v-click>
            1. <span>SEE THE THING</span>
        </div>
    </div>
    <div>
        <img src="/assets/prove_who_i_am.gif" />
        <div v-click>
            2. <span>PROVE ITS ME</span>
        </div>
    </div>
    <div>
        <img src="/assets/profit.png" />
        <div v-click>
            3. <span>PROFIT</span>
        </div>
    </div>
</div>

<!--
Remember this?

See the thing,

Prove its me

And profit?

Sweet
-->


---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
---

## SIGN IN

<img src="/assets/the_flow_1.png" />

<!--
Explain metamask....

In our example, you can see the "connect wallet", or "log in" button if you will.

You click it.

Seems simple enough
-->

---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
---

## SIGN IN

<img src="/assets/the_flow_2.png" />

<!--
Metamask pops up,

It shows you a little prompt,

In this case meta mask shows your the actual exact payload you are about to sign.

But this could always get a styling upgrade.

You double check it, and click "sign"
-->

---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
---

## SIGN IN

<img src="/assets/the_flow_3.png" />

<!--
Et voila, you are logged in! Well, if you have an ENS name that is, for every normal person it will probably look like
-->

---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
---

## SIGN IN

<img src="/assets/the_flow_4.png" />

<!--
this, which, although less appealing still works.

This is your wallet's public-key actually, incase you were wondering
-->

---
layout: head
color: yellow
tip: THE FLOW
website: luc.computer
handle: lucemansnl
---

## SIGN IN

<div class="three-list">
    <div style="">
        <div class="fadeIn a1">
            <img src="/assets/see_the_thing.png"/>
        </div>
        <div class="fadeIn a2">
            <img src="/assets/prove_who_i_am.gif" />
        </div>
        <div class="fadeIn a3">
            <img src="/assets/profit.png" />
        </div>
    </div>
    <div>
        <div class="fadeIn a1">
            <img src="/assets/arrow.png" />
        </div>
        <div class="fadeIn a2">
            <img src="/assets/arrow.png" />
        </div>
        <div class="fadeIn a3">
            <img src="/assets/arrow.png" />
        </div>
    </div>
    <div>
        <div class="fadeIn a1">
            <img src="/assets/the_flow_1.png"/>
        </div>
        <div class="fadeIn a2">
            <img src="/assets/the_flow_2.png" />
        </div>
        <div class="fadeIn a3">
            <img src="/assets/the_flow_3.png" />
        </div>
    </div>
</div>

<!--
For signing in it is pretty much the same thing as the originally envisioned one right?

Awesome!
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

# CODE TIME

<!--
Now lets build it!
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# WARNING

<img src="/assets/warning-lights.gif" />

<!--
Warning, there will be code ahead

DO NOT BE SCARED!

I will try to keep it as simple as possible
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# SETUP

<img src="/assets/template.png" style="width:400px;"/>

<!--
I will be using the **lvksh** react template.

Don't worry about it, its like **create-react-app** but simpler. Its a basic react project.
-->

---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## CUSTOM HOOK

<pre class="slidev-code language-typescript"><code><span class="line">                                                        </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>

<!--
We are gonna start off with a custom hook

(Import some things from these two packages)
-->

---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## CUSTOM HOOK

<pre class="slidev-code language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Web3Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@ethersproject/providers"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useWeb3React <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@web3-react/core"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>

<!--
Import some things from these two packages

(Create our useAuth function)
-->

---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## CUSTOM HOOK

<pre class="slidev-code language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Web3Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@ethersproject/providers"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useWeb3React <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@web3-react/core"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useAuth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span></code></pre>

<!--
Create our useAuth function

(Call the **useWeb3React** hook)
-->

---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## CUSTOM HOOK

<pre class="slidev-code language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Web3Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@ethersproject/providers"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useWeb3React <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@web3-react/core"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useAuth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> web3 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useWeb3React</span><span class="token generic class-name"><span class="token operator">&lt;</span>Web3Provider<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span></code></pre>

<!--
Call the **useWeb3React** hook

(And return the data that it returns)
-->

---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## CUSTOM HOOK

<pre class="slidev-code language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Web3Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@ethersproject/providers"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useWeb3React <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@web3-react/core"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useAuth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> web3 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useWeb3React</span><span class="token generic class-name"><span class="token operator">&lt;</span>Web3Provider<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>web3<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span></code></pre>

<!--
And return the data that it returns.

Yes, I do realize I am literally wrapping an already existant hook. But trust me, you will most likely want to add logic to it later to suit your needs, so its not a bad idea to make our own wrapper hook for it.
-->

---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## USE HOOK

```tsx
export const App = () => {
    const { active } = useAuth();

    if (active) {
        return <HomePage />
    } else {
        return <Login />
    }
};
```

<!--
Setup our basic app component

Active, from useAuth, and then if active, show the homepage, otherwise show the login page.

Seems pretty simple to me...
(well, pretty simple)-->


---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## USE HOOK

```tsx
export const App = () => {
    const { active } = useAuth();

    return active ? <HomePage /> : <Login />;
};
```

<!--
Well, pretty simple

Anyhow, let me make it even better for you
-->

---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## LOGIN W HOOK

```tsx
export const Login = () => {

    return (
        <div>
            <LoginButton />
        </div>
    );
};
```

<!--
Now we have our login component
-->
---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## LOGIN W HOOK

```tsx
export const Login = () => {
    const { activate } = useAuth();

    return (
        <div>
            <LoginButton />
        </div>
    );
};
```

<!--
Implement the hook


Note we have changed it to activate
-->
---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## LOGIN W HOOK

```tsx
export const Login = () => {
    const { activate } = useAuth();

    function loginPwease() {

    }

    return (
        <div>
            <LoginButton />
        </div>
    );
};
```

<!--
Create a function that we will call to log in
-->
---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## LOGIN W HOOK

```tsx
export const Login = () => {
    const { activate } = useAuth();

    function loginPwease() {

    }

    return (
        <div>
            <LoginButton onClick={loginPwease} />
        </div>
    );
};
```

<!--
Call the function in the onClick listener
-->
---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## LOGIN W HOOK

```tsx
                                                                   

export const Login = () => {
    const { activate } = useAuth();

    function loginPwease() {
        activate(                         );
    }

    return (
        <div>
            <LoginButton onClick={loginPwease} />
        </div>
    );
};
```

<!--
Inside of it call activate
-->
---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## LOGIN W HOOK

```tsx
import { InjectedConnector } from "@web3-react/injected-connector";

export const Login = () => {
    const { activate } = useAuth();

    function loginPwease() {
        activate(new InjectedConnector({}));
    }

    return (
        <div>
            <LoginButton onClick={loginPwease} />
        </div>
    );
};
```

<img src="/assets/nice.png" class="abs" style="width:500px;margin-top:60px;" v-click/>

<!--
And give it the InjectedConnector,

Which is an overcomplicated way of saying "I wanna talk to metamask"

-click-

Nice!
-->
---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---

## IN ACTION

<Hidden src="assets/demo.gif" width="405" height="320" v-click/>

<!--
Connect Wallet,

Run through prompt

Click, click, et voila!

VICTORY
-->


---
layout: head
color: yellow
tip: CODE
website: luc.computer
handle: lucemansnl
---
## SAUCE

https://github.com/

lucemans/web3-auth-demo

<!--
For those of you interested, the sauce is available on my github
-->

---
layout: cover
color: pink
website: luc.computer
handle: lucemansnl
---

# NEXT STEPS

<!--
But that was it!

From here obviously the api exposes a ton of other things, like signing custom messages, for verifying transactions, etc.
But this is it, all you need to get login working.

The frontend has now verified who the user is which means we can load their data in.

If the user ever attempts to do any authorized actions, we can tell them to just "sign off on it", and we can get a backend to verify (or on the blockchain), but, it works.
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

# FUTURE

<!--
What about the future of web3

Keep in mind, this is my personal opinion, about (not the future, a future)
-->

---
layout: head
color: yellow
website: luc.computer
handle: lucemansnl
---

<div style="display:flex;flex-direction:column">
<div><span v-click>Not</span> <span v-click>the</span> <span v-click>future,</span> <span v-click>a</span> <span v-click>future</span></div>


<span v-click class="pink">~Tom Scott</span>
</div>

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

# FUTURE

<!--
So, do I think web3 will be taking over the world and rendering all servers and datacenters obsolete by tomorrow?

No, not really

But do I think that we are arriving in a new era of the web id like to dub (web 2.5, a hybrid of some sorts)

-->

---
layout: cover
color: pink
website: luc.computer
handle: lucemansnl
---

# WEB 2.5

<!--
(like to dub) web 2.5, a hybrid of some sorts.

A world where, eventhough the backend may still exist, some technologies will have migrated, and some will take standalone use, of all the awesome features web 3 has to offer

Regardless, lets all (take a quick moment to breathe)
-->

---
layout: cover
color: blue
website: luc.computer
handle: lucemansnl
---

# BREATHE

<img src="/assets/breathe.gif" />

<!--
(lets all) take a quick moment to breathe.

(I have shown this talk to a few people so far)
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;">
<div style="display: flex;justify-content: center; align-items: center;gap: 1rem;">
    <img src="/assets/youtube.svg" width="50" style="margin: 0;" />
    <div style="font-size: 2rem;">lucemans</div>
</div>
<img src="/assets/blockchain.png" width="450" style="border: 1px solid white; margin: 0; margin-top: 1rem;"/>
</div>

<!--
Due to a surprising amount of requests, I have decided to upload my `blockchain from zero to hero` talk to youtube, so if you want to watch that you can find it, name is lucemans, as per usual
-->

---
layout: cover
color: yellow
website: luc.computer
handle: lucemansnl
---

<div></div>

<!--
Regardless, this was (passwordless authentication using web3)
-->

---
layout: cover
color: pink
website: luc.computer
handle: lucemansnl
---

# PASSWORDLESS
#### WITH WEB3

<!--
(this was) passwordless authentication using web3.

I am your host (luc)
-->


---
layout: speaker
color: pink
name: LUCEMANS
bio: CREATE EPIC SHIT
avatar: /assets/avatar.png
tip: WEB 3.0 AUTH
website: luc.computer
handle: lucemansnl
---

# SPEAKER PAGE

<!--
(I am your host) luc

Thank (you for listening)
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# THANKS

<img src="/assets/office.gif" />

<!--
(Thank) you for listening.

And if you have any (questions)
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# QUESTIONS?

<img src="/assets/answers.gif" />

<!--
(And if you have any) questions

Speak now or forever hold your peace.

(
just kidding feel free to talk to me anytime, im attention deprived, and i live alone
)
-->

---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# THE END

<img src="/assets/qr.png" style="height:140px;border-radius:0.5rem;margin-top:1rem;">
<div style="display:flex;flex-direction:column;align-items:center;margin-top:0.5rem;">
    <div class="grey"><span class="white">luc</span><span class="pink">.show</span></div>
    <h1 class="white bgblue" style="font-size:1.4rem;width:fit-content;min-width:unset;min-height:unset;height:auto;line-height:2rem;">/web3-auth</h1>
</div>

<!--
This is the part where people say bye

Oh and slides are available at luc dot show slash web3-auth
-->


---
layout: head
color: pink
website: luc.computer
handle: lucemansnl
---

# QUESTIONS?

<div style="display:flex;gap:1rem;margin-top:0.5rem;">
    <img src="/assets/answers.gif" />
    <div style="display:flex;flex-direction:column;align-items:center">
        <img src="/assets/qr.png" style="height:140px;border-radius:0.5rem;margin-top:1rem;">
        <div style="display:flex;flex-direction:column;align-items:center;margin-top:0.5rem;">
            <div class="grey"><span class="white">luc</span><span class="pink">.show</span></div>
            <h1 class="white bgblue" style="font-size:1.4rem;width:fit-content;min-width:unset;min-height:unset;height:auto;line-height:2rem;">/web3-auth</h1>
        </div>
    </div>
</div>

<!--
so euuhm, any questions?
-->
