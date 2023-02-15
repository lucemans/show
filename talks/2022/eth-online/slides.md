---
theme: ./theme/
title: ENS ETHOnline
layout: default
color: pink
---

<!--

-->

---

# Hi there, <img src="/assets/wave.png" class="h-12 inline" />

<!--
hi there everyone can yall year me?

-check chat-

Good morning, afternoon of evening wherever and whenever you are.

I am (0x225)
-->

---

<h1 class="max-w-lg whitespace-normal block break-all text-center h-auto">0x225f137127d9067788314bc7fcc1f36746a3c3b5</h1>

<!--
I am .... otherwise known as (lucemans.eth)
-->

---

<h1 class="max-w-lg whitespace-normal block break-all text-center h-auto">lucemans.eth</h1>

<!--
Otherwise known as lucemans.eth,

and that,

right there,

is the core premise of ENS

(The Ethereum Name...)
-->

---

<img src="/assets/ens.svg" class="max-w-xs" />

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

ENS allows us to turn (human readable names...)

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

and a bunch more, let me show you
-->

---

<h2 class="mb-4">Talkingpoints</h2>

<h3>What is ENS?</h3>
<h3>Records & Resolvers</h3>
<h3>Cross Chain Interop.</h3>
<h3>Implementation</h3>
<h3>First ENS</h3>

<!--
If you already know what ENS is, you might want to keep watching, cause we do have some other cool stuff to show.

let me quickly run you through the agenda

i will talk about what ENS is, explain all the fun core logic.

for records & resolvers we will talk about
ens records, text records, storing data on chain, resolving etc.

Next about the cross chain interoperability procol, otherwise known as ccip read that allows us to retrieve data from other chains and offchain.

Next about how you implement ENS

a tut about registering ur ens

and last but not least how to change ur avatar

Decide wether this is the workshop for you, if what i just said made you think "hey i already know all this stuff" then feel free to keep hacking, and I wish you the best of luck on your project! otherwise, stay tuned.
-->

---

<h1>Milestones</h1>
<div class="flex gap-8 mt-4">
<h2 v-click>2.17m Names</h2>
<h2 v-click>506 Integrations</h2>
<h2 v-click>541k Owners</h2>
</div>

<!--
I also really quickly wanna talk about the milestones we have reached.
-->

---

<h1>Practical Example</h1>

<!--
So lets talk about a practical example of ens, in your average dapp.
-->

---

<div class="flex flex-col gap-4 items-center" v-click>
    <img src="/assets/tictacso.svg" class="w-32" />
    <h2>tictac.so</h2>
</div>

<!--
This is case tic tac so. an eth paris hackathon project i worked on, i had a little bit of time and built a tic tac toe game in solidity.

(we can see)

-->

---

<img src="/assets/dapp.png" class="max-w-xl shadow-md rounded-md" />

<!--

we can see that in the web ui, yup, in the top right corner

rigght there

Thats me, right there

-->

---

<img src="/assets/tictacsoclose.png" class="max-w-xl shadow-md rounded-md" />

<!--
Right there.

And now, on your favourite (website, you can obviously)
-->

---

<img src="/assets/dapp.png" class="max-w-xl shadow-md rounded-md" />

<!--
website, You can obviously invite your friends,

so you go to the create game button. press it.

I know, site is ugly, its a old hackathon project of mine.
-->

---

<img src="/assets/tictacsoinvite.png" class="max-w-xl shadow-md rounded-md" />

<!--
And this screen allows us to send an invite.

so you enter either an ens name or an address
-->

---

<img src="/assets/tictacsoinvitenick.png" class="max-w-xl shadow-md rounded-md" />

<!--
Here you can see me inviting nick, his avatar pfp shows up, and i can double check ive got the right one w the address.
-->

---

<img src="/assets/tictacsogame.png" class="max-w-xl shadow-md rounded-md" />

<!--
And before you know it, youre in the game itself, now
(as you can see)
-->

---

<img src="/assets/tictacsonickgame2.png" class="max-w-xl shadow-md rounded-md" />

<!--
as you can see, not my strongest game, but ok, its tic tac to, cant complain.

Now this is the core idea, ENS
-->

---

<h1 v-click>Username</h1>
<h1 v-click>& Profile Picture</h1>

<!--
So as you saw in this example dApp, ens shows provided the functionality for the username, and username lookup, and profile picture.
-->

---

<img src="/assets/profile.png" class="max-w-xs" />

<!--
for me, that profile tends to look like this, this is my name
(or v3x.eth)
and profile picture

ens allows us to store a whole bunch more data then just this tho, lets have a look at an example
-->

---

<div class="mb-64">
    <h2 class="">nick.eth</h2>
    <table class="absolute">
        <tr v-click>
            <td>ETH</td>
            <td>
                0xb8c...d5
            </td>
        </tr>
        <tr v-click>
            <td>DOGE</td>
            <td>DQ5...</td>
        </tr>
        <tr v-click>
            <td>BTC</td>
            <td>
                bc1...
            </td>
        </tr>
        <tr v-click>
            <td>LTC</td>
            <td>
                ltc1...
            </td>
        </tr>
        <tr v-click>
            <td>Website</td>
            <td>https://ens.domains/</td>
        </tr>
        <tr v-click>
            <td>Email</td>
            <td>nick@ens.domains</td>
        </tr>
        <tr v-click>
            <td>Discord</td>
            <td>nickjohnson#0001</td>
        </tr>
        <tr v-click>
            <td>Twitter</td>
            <td>nicksdjohnson</td>
        </tr>
        <tr v-click>
            <td>Reddit</td>
            <td>nickjohnson</td>
        </tr>
        <tr v-click>
            <td>Telegram</td>
            <td>nicksdjohnson</td>
        </tr>
        <tr v-click>
            <td>Github</td>
            <td>arachnid</td>
        </tr>
        <tr v-click>
            <td class="h-full flex items-center">ENS Delegate</td>
            <td class="w-64">https://discuss.ens.domains/t/ens-dao-delegate-applications/815/716</td>
        </tr>
        <tr v-click>
            <td>Avatar</td>
            <td>
                eip155:1/erc1155:0x49...
            </td>
        </tr>
    </table>
</div>

<!--
This is nick.eth again,
and here are some of the thing, that we could store, in his ens name.

-->

---

<h1>So how does this work?</h1>

<!--
So, how does this work?

ENS has a set of (core contracts)
-->

---

<div class="flex gap-4">
    <div>
        <h3>Core Contracts</h3>
        <div class="mt-2 w-full max-w-7xl bg-white p-4 rounded-md shadow-md text-xs flex flex-col gap-3">
            <div v-click>
                <p><b>Name:</b> Lucemans.eth</p>
                <p><b>Registrant:</b> 0x225...c3b5</p>
                <p><b>Expires:</b> November 18, 2025</p>
                <p><b>Resolver:</b> 0x497...Ba41</p>
            </div>
            <div v-click>
                <p><b>Name:</b> Nick.eth</p>
                <p><b>Registrant:</b> 0xb8c...67d5</p>
                <p><b>Expires:</b> October 24, 2023</p>
                <p><b>Resolver:</b> 0x497...Ba41</p>
            </div>
            <div v-click>
                <p><b>Name:</b> Vitalik.eth</p>
                <p><b>Registrant:</b> 0xd8d...6045</p>
                <p><b>Expires:</b> May 4, 2034</p>
                <p><b>Resolver:</b> 0x497...Ba41</p>
            </div>
            <div class="flex gap-1 justify-center" v-click>
                <div class="bg-neutral-800 w-1 h-1 rounded-full"/>
                <div class="bg-neutral-800 w-1 h-1 rounded-full"/>
                <div class="bg-neutral-800 w-1 h-1 rounded-full"/>
            </div>
        </div>
    </div>
    <div>
        <img src="/assets/lookingfornick.png" class="w-128" v-click>
    </div>
</div>

<!--
our core contracts store the name, who owns it, when it expires, and where to resolve the data from.

So then when I come in and ask -click- "hey, im looking for nick.eth"
-->

---

<div class="bg-white rounded-md p-4 shadow-md">
    <p><b>Name:</b> Nick.eth</p>
    <p><b>Registrant:</b> 0xb8c...67d5</p>
    <p><b>Expires:</b> October 24, 2023</p>
    <p><b>Resolver:</b> 0x497...Ba41</p>
</div>

---

<div class="flex gap-4 items-center">
    <div class="bg-white rounded-md p-4 shadow-md">
        <p><b>Name:</b> Nick.eth</p>
        <p><b>Registrant:</b> 0xb8c...67d5</p>
        <p><b>Expires:</b> October 24, 2023</p>
        <p class="text-white px-2" style="background: #5298FF"><b>Resolver:</b> 0x497...Ba41</p>
    </div>
    <img src="/assets/arrow.png" class="w-4 h-4" v-click />
    <div class="flex flex-col items-center gap-2" v-click>
        <img src="/assets/register_0.png" class="w-8 h-8" />
        <p class="text-white px-2" style="background: #5298FF">0x497...Ba41</p>
    </div>
    <img src="/assets/arrow.png" class="w-4 h-4" v-click />
    <div class="bg-white rounded-md p-4 shadow-md text-xs" v-click>
        <table class="">
            <tr>
                <td>ETH</td>
                <td>
                    0xb8c...d5
                </td>
            </tr>
            <tr>
                <td>DOGE</td>
                <td>DQ5...</td>
            </tr>
            <tr>
                <td>BTC</td>
                <td>
                    bc1...
                </td>
            </tr>
            <tr>
                <td>LTC</td>
                <td>
                    ltc1...
                </td>
            </tr>
            <tr>
                <td>Website</td>
                <td>https://ens.domains/</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>nick@ens.domains</td>
            </tr>
            <tr>
                <td>Discord</td>
                <td>nickjohnson#0001</td>
            </tr>
            <tr>
                <td>Twitter</td>
                <td>nicksdjohnson</td>
            </tr>
            <tr>
                <td>Reddit</td>
                <td>nickjohnson</td>
            </tr>
            <tr>
                <td>Telegram</td>
                <td>nicksdjohnson</td>
            </tr>
            <tr>
                <td>Github</td>
                <td>arachnid</td>
            </tr>
            <tr>
                <td class="h-full flex items-center">ENS Delegate</td>
                <td class="w-64">https://discuss.ens.domains/t/ens-dao-delegate-applications/815/716</td>
            </tr>
            <tr>
                <td>Avatar</td>
                <td>
                    eip155:1/erc1155:0x49...
                </td>
            </tr>
        </table>
    </div>
</div>

<!--
this is what it would give me, and right there, is the resolver.

the resolver is another contract address.

which means i can just reach out to it, and call all these functions on it

and the beauty of the resolver is that you can choose to use the ens written resolver (which is by default), or to use your own resolver. which means u can hack it :smirk:

sow hat does this resolver actually output. the resolver outputs metadata of the name. such as multicoin addresses, avatar records, and practically any text record you can imagine.

and this is a smart contract, so you can overwrite the behaviour, which i think is super cool.
-->

---

<div class="flex gap-4 items-center">
    <div class="bg-white rounded-md p-4 shadow-md">
        <p><b>Name:</b> Nick.eth</p>
        <p><b>Registrant:</b> 0xb8c...67d5</p>
        <p><b>Expires:</b> October 24, 2023</p>
        <p class="text-white px-2" style="background: #5298FF"><b>Resolver:</b> 0x497...Ba41</p>
    </div>
    <img src="/assets/arrow.png" class="w-4 h-4" />
    <div class="flex flex-col items-center gap-2">
        <img src="/assets/register_0.png" class="w-8 h-8" />
        <p class="text-white px-2" style="background: #5298FF">0x497...Ba41</p>
        <p class="text-white px-2" style="background: #5298FF">Public Resolver</p>
    </div>
    <img src="/assets/arrow.png" class="w-4 h-4" />
    <div class="bg-white rounded-md p-4 shadow-md text-xs">
        <table class="">
            <tr>
                <td>ETH</td>
                <td>
                    0xb8c...d5
                </td>
            </tr>
            <tr>
                <td>DOGE</td>
                <td>DQ5...</td>
            </tr>
            <tr>
                <td>BTC</td>
                <td>
                    bc1...
                </td>
            </tr>
            <tr>
                <td>LTC</td>
                <td>
                    ltc1...
                </td>
            </tr>
            <tr>
                <td>Website</td>
                <td>https://ens.domains/</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>nick@ens.domains</td>
            </tr>
            <tr>
                <td>Discord</td>
                <td>nickjohnson#0001</td>
            </tr>
            <tr>
                <td>Twitter</td>
                <td>nicksdjohnson</td>
            </tr>
            <tr>
                <td>Reddit</td>
                <td>nickjohnson</td>
            </tr>
            <tr>
                <td>Telegram</td>
                <td>nicksdjohnson</td>
            </tr>
            <tr>
                <td>Github</td>
                <td>arachnid</td>
            </tr>
            <tr>
                <td class="h-full flex items-center">ENS Delegate</td>
                <td class="w-64">https://discuss.ens.domains/t/ens-dao-delegate-applications/815/716</td>
            </tr>
            <tr>
                <td>Avatar</td>
                <td>
                    eip155:1/erc1155:0x49...
                </td>
            </tr>
        </table>
    </div>
</div>

<!--
so this by default is the public resolver, a contract we wrote and 
its being used your ENS address by default.

public resolver allows us to modify records through the ENS manager.

However you can always point this to your own smart contract and then it could look like
-->

---

<div class="flex gap-4 items-center">
    <div class="bg-white rounded-md p-4 shadow-md">
        <p><b>Name:</b> Nick.eth</p>
        <p><b>Registrant:</b> 0xb8c...67d5</p>
        <p><b>Expires:</b> October 24, 2023</p>
        <p class="text-white px-2" style="background: #49B393"><b>Resolver:</b> 0x497...Ba41</p>
    </div>
    <img src="/assets/arrow.png" class="w-4 h-4" />
    <div class="flex flex-col items-center gap-2">
        <img src="/assets/register_0.png" class="w-8 h-8" />
        <p class="text-white px-2" style="background: #49B393">Your Contract</p>
    </div>
    <img src="/assets/arrow.png" class="w-4 h-4" />
    <div class="bg-white rounded-md p-4 shadow-md text-xs" v-click>
        <table class="">
            <tr>
                <td>ETH</td>
                <td>
                    0xb8c...d5
                </td>
            </tr>
            <tr>
                <td>Avatar</td>
                <td>
                    ipfs://XXXXXXXXXXXXX
                </td>
            </tr>
        </table>
    </div>
</div>

<!--
But if this was your contract...

You could have it return custom data, like the current price of ETH/USD, or how many NFTs you own, the latest NFT, the day of the week, anything essentially. its programmable.
-->

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

<h1>Cross Chain Interoperability Protcol</h1>
<h2 v-click>(CCIP)</h2>

<!--
Introducing, the cross chain interoperability protcol.

A protocol that allows us to point our ENS records to resolvers on mainnet that say "oop, you gotta be on optimism to read dis"
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

<h1>Libraries</h1>

<!--
NExt lets talk about libraries

ENS works together with all your favourite EVM libraries you probably are already using.

so you might want top check their documentation
-->

---

<ul class="text-xl flex gap-4 font-bold">
<li>Ethers</li>
<li>Wagmi</li>
<li>ENS.js</li>
<li>Web3.js</li>
<li>Web3j</li>
<li>KEthereum</li>
<li>web3.py</li>
<li>go-ens</li>
</ul>

<!--
And here are just some of the libraries that support ENS out of the box
-->

---

<h1 class="mb-4">Forward Resolution</h1>

<img src="/assets/lib_for_res.png" class="max-w-xl" />

---

<h1 class="mb-4">Reverse Resolution</h1>

<img src="/assets/lib_rev_res.png" class="max-w-xl" />

---

<h1 class="mb-4">and more</h1>

<!--
and more

(And I havent even had time to talk about subdomains)
-->

---

<h1 class="mb-4">Subdomains</h1>

<!--
And I havent even had time to talk about subdomains, that you can put in your resolver, yup, tons or more features

, so if you wanna find out more about this make sure to check our (documentation)
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
<h3>@lucemansnl</h3>

<!--

-->


---

<div class="flex items-center flex-col">
    <img src="/assets/happy_hacking.png" class="max-w-xl">
    <h1 class="flex gap-4 items-center mt-4">
    Happy Hacking!
    </h1>
</div>
