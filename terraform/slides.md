---
theme: ./theme/
title: Terraform from Zero to Hero
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

FROM <span class="pink">ZERO</span> TO <span class="blue">HERO</span>
# TERRAFORM

---
layout: speaker
color: terraform
name: LUCEMANS
bio: CREATE EPIC SHIT
avatar: /assets/avatar.png
tip: TERRAFORM
website: luc.computer
handle: lucemansnl
---

# SPEAKER PAGE


---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img v-click src="/assets/wheniwokeup.jpg" style="width: 800px;object-fit:contain;"/>
<h1 style="position:absolute;left: 540px;top:185px;color: white;" v-click>Terraform</h1>
<h3 style="color: var(--terraform);font-size:2rem;position:absolute;left: 550px;top:240px; -webkit-text-fill-color: white;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;" v-click>IN LESS THEN 24 HOURS</h3>

<!--
So this is what my face looked like when I woke up yesterday morning and was told I would be doing the lunch and learn.

Do you see the regret in my eyes?

Well regardless, I accepted the challenge, and here is
-click- terraform, -click- in less then 24 hours

(Lets go)
-->

---
layout: head
color: terraform
tip: TERRAFORM
website: luc.computer
handle: lucemansnl
---

## AGENDA

<ul>
    <li v-click>Infrastructure as Code</li>
    <li v-click>Providers</li>
    <li v-click>Multi-Cloud</li>
    <li v-click>HCL</li>
    <li v-click>Demo</li>
</ul>

<!--
The agenda is as follows
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

FROM <span class="pink">ZERO</span> TO <span class="blue">HERO</span>
# TERRAFORM

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/linkedin.svg" style="width: 180px"/>

<!--
So I was on linkedin the other day and I saw a connection of mine congratulate another connection of theirs
with their (terraform hashicorp cloud engineer certification)
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/terraform.png" style="width: 240px;"/>

<!--
terraform hashicorp cloud engineer certification. well isnt that a mouth full,
And i was like ("well I can do terraform")
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/icandoterraform.png" style="width: 500px;object-fit:contain;"/>

<!--
"well I can do terraform", so allow me to give this a go
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<h3>Lets go</h3>

<!--
Lets go

(Terraform is a tool written in go, the programming language)
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/go.svg" width="200" v-click/>

<!--
Terraform is a tool written in go,
the programming language,
(go)
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/go2.svg" width="200" />

<!--
Go
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/terraform.svg" />

<!--
So terraform lets us do, what we used to let the (ops guy do)
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/ops.jpg" />

<!--
Ops guy do, so (what does the ops guy do?)
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<h2>What?</h2>
<p v-click>Does the ops guy do?</p>

<!--
So what does the ops guy do?

(Well you know our favorite javascript and typescript)
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<div class="flex gap-4">
    <img src="/assets/javascript.svg" width="140" />
    <img src="/assets/typescript.svg" width="140" v-click/>
    <img src="/assets/node.svg" width="140" v-click/>
</div>

<!-- 
Well you know our favorite javascript and typescript, and just deploying a node server somewhere.
But the real question most of us dont really think about that often is where the hell is it even deployed

So lets talk about (Infrastructure Orchestration)
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<h2>Infrastructure</h2>
<h4>Orchestration</h4>

<!--
Infrastructure Orchestration, which is a fancy word for, "hocus spocus my code drives a ford focus"
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/focus.jpg" width="800" />

<!--
Yup, this is a slide
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<h2>Infrastructure</h2>
<h4>Orchestration</h4>

<!--
So infrastructure orchestration lets us do a variety of things, where traditionally the entire ops guy comes in
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/ops.jpg" />

<!--
See here, the ops guy
So the ops guy's (OG) goal is to get the systems running and keep them running.
Over the course of time op-viously makers/developers have ended up in ops positions and have made efforts to automate all the things.
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<h1>Traditionally</h1>
<ul>
    <li v-click>Create a ticket 🎫</li>
    <li v-click>Have Lunch 🍔</li>
    <li v-click>Entertainment 😭</li>
</ul>

<!--
Traditionally however we would have to, put in a ticket with the ops guy, patiently wait, have lunch in the meanwhile, and watch the ops guy cry as the hours on the clock click away and he is running around with servers
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<p style="font-size: 6rem">🤷</p>

<!--
So how do we make their life easier, how do we streamline it.
So along with a variety of other tools, terraform aims to help solve part of tedious unmaintainable ops landscape
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<h2 v-click>Infrastructure</h2>
<h4 v-click>As Code</h4>

<!--
We call it, -click- infrastructure as code
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<h3>IaC</h3>
<h5 v-click>(for short)</h5>

<!--
or I a C for short
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<h2 v-click>Infrastructure</h2>
<h4 v-click>As Code</h4>

<!--
-enter coke dealer-
So this, infrastructure of code thing im talking about, can I get a couple grams of that?
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<div class="flex items-center gap-4" style="font-size: 4rem">
    <svg aria-hidden="true" height="64" width="64" viewBox="0 0 16 16" version="1.1" data-view-component="true">
        <path fill="white" fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
    ></svg>
    <span style="color: var(--blue)">hashicorp</span>
    <span v-click>/ hcl</span>
</div>

<!--
Aight here u go, Hashicorp, HCL
-->
---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/hydrochloric.jpg" />

<!--
No, not hydrochloric acid
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<h1>HCL</h1>

<ul>
    <li v-click>Describe Infrastructure</li>
    <li v-click>Interconnects</li>
    <li v-click>Takes Action</li>
</ul>


<!--
So terraform allows us to write in HCL, and -click- describe our infrastructure and how it  -click- interconnects and then reaches out to -click- the appropriate authorities to make it happen.
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/button.png" v-click/>

<!--
Picture this. -click- I press a button, and out of nowhere, 
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/jenkins.svg" style="position: absolute; left: 200px" />
<img src="/assets/jenkins.svg" style="position: absolute; right: 200px" />

<!--
multiple servers spin up, and... euhm....
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/server.svg" style="position: absolute; left: 300px" width="120" />
<img src="/assets/server.svg" style="position: absolute; right: 300px" width="120" />
<v-click>
    <img src="/assets/porkbun.svg" style="position: absolute; left: 340px; top: 150px; transform: rotate(10deg)" width="180" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/cloudflare.svg" style="position: absolute; left: 400px; top: 110px; transform: rotate(-20deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <div style="position: absolute; font-size: 10rem; top: 240px; left: 180px; transform: rotate(5deg)">📜</div>
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/kubernetes.svg" style="position: absolute; left: 450px; top: 240px; transform: rotate(-20deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/aws.svg" style="position: absolute; left: 350px; top: 240px; transform: rotate(13deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/azure.svg" style="position: absolute; left: 450px; top: 60px; transform: rotate(-2deg)" width="340" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/gcloud.svg" style="position: absolute; left: 150px; top: 280px; transform: rotate(-13deg)" width="340" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/linode.svg" style="position: absolute; left: 550px; top: 0px; transform: rotate(0deg)" width="400" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/ad.svg" style="position: absolute; left: 550px; top: 140px; transform: rotate(-10deg);max-width:none;max-height:none;" width="500" height="500" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/vmware.svg" style="position: absolute; left: 150px; top: 20px; transform: rotate(-13deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/datadog.svg" style="position: absolute; left: 350px; top: 40px; transform: rotate(13deg)" width="440" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/digitalocean.svg" style="position: absolute; left: 180px; top: 240px; transform: rotate(-8deg)" width="440" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/gitlab.svg" style="position: absolute; left: 550px; top: 140px; transform: rotate(3deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/grafana.svg" style="position: absolute; left: 350px; top: 240px; transform: rotate(13deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/fortinet.svg" style="position: absolute; left: 250px; top: 20px; transform: rotate(-23deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/github.svg" style="position: absolute; left: 600px; top: 240px; transform: rotate(13deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/mongodb.svg" style="position: absolute; left: 550px; top: 40px; transform: rotate(13deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/redis.svg" style="position: absolute; left: 250px; top: 240px; transform: rotate(3deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/ovh.svg" style="position: absolute; left: 450px; top: 140px; transform: rotate(13deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/bitwarden.svg" style="position: absolute; left: 30px; top: 140px; transform: rotate(9deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/oracle.svg" style="position: absolute; left: 600px; top: 140px; transform: rotate(0deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/vultr.svg" style="position: absolute; left: 350px; top: 240px; transform: rotate(-8deg)" width="240" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/vercel.svg" style="position: absolute; left: 300px; top: 80px; transform: rotate(0deg)" width="140" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/vault.svg" style="position: absolute; left: 30px; top: 280px; transform: rotate(0deg)" width="400" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/nomad.svg" style="position: absolute; left: 500px; top: 80px; transform: rotate(5deg)" width="400" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/boundary.svg" style="position: absolute; left: 520px; top: 360px; transform: rotate(-3deg)" width="400" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/consul.svg" style="position: absolute; left: 100px; top: 80px; transform: rotate(-5deg)" width="400" />
</v-click>
<v-click>
    <div class="darkenout"></div>
    <img src="/assets/andmore.png" style="position: absolute; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%);border-radius: 1rem;" width="400" />
</v-click>

<!--
much better,

automatically start running our code, and the dns records on our domains are altered accordingly.

the ssl records, kubernetes, ....  and many many more

(now that is epic)
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<h3 style="color: var(--pink)"><span v-click>NOW</span> <span v-click style="color: var(--green)">THAT</span></h3>
<h3><span v-click style="color: var(--blue)">is</span> <span v-click>Epic</span></h3>

<!--
Now THAT IS EPIC

(lets have a look at the code)
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/lookatcode.gif" />

<!--
Lets have a look at the code
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
terraform {
  required_providers {
    hcloud = {
      source = "hetznercloud/hcloud"
      version = "1.33.1"
    }
  }
}

provider "hcloud" {
  token = "***************************"
}

resource "hcloud_server" "web" {
  name        = "server"
  server_type = "cx11"
  image       = "ubuntu-20.04"
  location    = "nbg1"
}
```

<!--
Let me break that down for ya
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
terraform {
      
}
```

<!--
This top section here is the setup of the file, here we define what we providers we want to use and allows us to setup the appropriate credentials or pre-runtime variables.
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
terraform {
  required_providers {

  }
}
```

<!--
Then we add the required providers section
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/registry.png" />

<!--
So we are going to go to the registry
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/registry2.png" />

<!--
Click on providers, admire them for a moment, then pick the `hcloud` provider, for interfacing with hetzner
-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/provider.png" />

<!--
We click on use
-->
---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/provider2.png" />

<!--
And it shows us exactly what code to use
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
terraform {
  required_providers {
    hcloud = {
      source = "hetznercloud/hcloud"
      version = "1.33.1"
    }
  }
}

provider "hcloud" {

}
```

<!--
Copy it over
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
terraform {
  required_providers {
    hcloud = {
      source = "hetznercloud/hcloud"
      version = "1.33.1"
    }
  }
}

provider "hcloud" {
  token = "***************************"
}
```

<!--
Add our token.

Now we have our basic stuff set up, now we can add our VM, 
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
terraform {
  required_providers {
    hcloud = {
      source = "hetznercloud/hcloud"
      version = "1.33.1"
    }
  }
}

provider "hcloud" {
  token = "***************************"
}

resource "hcloud_server" "steve" {
  # Add stuff here
}
```

<!--
Voila, and then setup the basic information about it
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl {all|2|3|4|5}
resource "hcloud_server" "steve" {
  name        = "steve"
  server_type = "cx11"
  image       = "ubuntu-20.04"
  location    = "nbg1"
}
```

<!--
So here we set the name, I decided to call this box steve

The server type, in this case cx11, is just a hetzner specific thing pertaining to this product

An image, so the iso we would like to use for our vm, a list of these are available in the documentation

And last but not least the location, in this case nbg1
-->


---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```bash
terraform init
```

<!--
Causing it to install the providers etc
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```sh
terraform apply
```


<!--
Now we can run this file
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/apply.png" />

<!--
Now we type 'yes', and voila
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/apply2.png" />

<img src="/assets/apply3.png" v-click />

<!--
After a couple seconds we see our infrastructure appear

That might seem simple, but under the hood terraform keeps track of the current state of the infrastructure, and then looks at the file and detects what has been changed, and decides on the best strategy to make these changes.

-reflect on two slides ago-

Lets try adding dns records, you know the drill
-->
---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<img src="/assets/cloudflare.png" >

<!--
Cloudflare provider
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
terraform {
  required_providers {
    hcloud = {
      source = "hetznercloud/hcloud"
      version = "1.33.1"
    }
  }
}

provider "hcloud" {
  token = "***************************"
}
```

<!--
So here is our file
-->


---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
terraform {
  required_providers {
    hcloud = {
      source = "hetznercloud/hcloud"
      version = "1.33.1"
    }
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "3.12.0"
    }
  }
}

provider "hcloud" {
  token = "***************************"
}

provider "cloudflare" {
  email = "**************"
  api_key = "************"
}
```

<!--
Lets add it
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
resource "cloudflare_zone" "stevethezone" {
  zone = "luc.show"
  plan = "free"
}
```


<!--
Lets add it
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

```hcl
resource "cloudflare_zone" "stevethezone" {
  zone = "luc.show"
  plan = "free"
}

resource "cloudflare_record" "stevetherecord" {
  zone_id = cloudflare_zone.stevethezone.zone_id
  name    = "@"
  value   = hcloud_server.steve.ip
  type    = "A"
  ttl     = 3600
}
```

<!--
And then we set all our steve the record stuff to match w our zone, and our previously defined server

So terraform will now provision these resources and at runtime try and estimate what values will end up in what spot.

Super sweet!
-->

---
layout: head
color: terraform
website: luc.computer
handle: lucemansnl
---

<h1 v-click>CLI</h1>

<ul>
    <li v-click>terraform fmt</li>
    <li v-click>terraform validate</li>
    <li v-click>terraform taint</li>
    <li v-click>terraform import</li>
    <li v-click>terraform workspace</li>
    <li v-click>terraform state</li>
    <li v-click>terraform destroy</li>
</ul>

<!--
So there is a lot more cool stuff where that came from

fmt - format code

fmt - basically the tsc compiler

taint - deprecate resources, same way w trees n spraypaint

import - to tell terraform to use already existing resources

workspace - to keep multiple states for the same log, staging, prod, etc

state - view the state

destroy - to destroy all your mighty creations

-->

---
layout: cover
color: terraform
website: luc.computer
handle: lucemansnl
---

FROM <span class="pink">ZERO</span> TO <span class="blue">HERO</span>
# TERRAFORM
<div v-click>(IN 24 HOURS)</div>

---
layout: speaker
color: terraform
name: LUCEMANS
bio: CREATE EPIC SHIT
avatar: /assets/avatar.png
tip: TERRAFORM
website: luc.computer
handle: lucemansnl
---

# SPEAKER PAGE


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
