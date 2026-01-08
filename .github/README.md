<h1 align="center">Personal Security Checklist</h1>

<p align="center">
<b><i>The ultimate list of tips to secure your digital life</i></b>
<br />
<b>🌐 <a href="https://amni.at/">amni.at</a></b><br />
<br />
<a href="https://amni.at/"><img src="https://i.ibb.co/Rb6P6h6/shield.png" width="64" /><br /></a>
<br />
<kbd><br />👉 <a href="https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/CHECKLIST.fa.md"><b>چک‌لیست فارسی</b></a> · <a href="https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/CHECKLIST.md"><b>English Checklist</b></a> 👈<br /><br /></kbd>
<br />
</p>

---

## معرفی (فارسی)

این مخزن نسخه فارسی «چک‌لیست امنیت شخصی» است که نسخه اصلی آن توسط **[Alicia Sykes](https://github.com/Lissy93/personal-security-checklist)** تهیه شده.  
نسخه فارسی و وب‌سایت تعاملی در **[amni.at](https://amni.at/)** در دسترس است.

- چک‌لیست فارسی: [`CHECKLIST.fa.md`](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/CHECKLIST.fa.md)
- چک‌لیست انگلیسی: [`CHECKLIST.md`](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/CHECKLIST.md)

<details>
    <summary><b>Contents</b></summary>
    
- [The Checklist](#the-checklist)
- [The Website](#the-website)
- [The API](#the-api)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

</details>

---

## The Checklist

You can read the full checklist in [`CHECKLIST.fa.md`](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/CHECKLIST.fa.md) (Farsi) or [`CHECKLIST.md`](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/CHECKLIST.md) (English).<br>
<sub>To view/edit the raw data, see [`personal-security-checklist.yml`](https://github.com/hamid-k/personal-security-checklist-FA/blob/master/personal-security-checklist.yml)</sub>

---

## The Website

The easiest method for consuming the checklist is via our website: **[amni.at](https://amni.at/)**

Here you can browse lists, filter by your threat model and tick items off once complete (plus, there are pretty charts to make you feel good about your progress ☺️).


<p align="center">
<img width="1293" height="1487" alt="image" src="https://github.com/user-attachments/assets/2fef351a-e246-472b-b890-c243dc4a0db8" />
<img width="600" src="https://i.ibb.co/jzKn05H/digital-defense.png" />
</p>



### About
The source for the website is in [`web/`](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/web).<br />
The site is built with Qwik, using TypeScript and some components from DaisyUI.

### Developing
To run the app locally, or to make code changes, you'll need Node and Git installed.

1. Grab the code: `git clone git@github.com:hamid-k/personal-security-checklist-FA.git`
2. Navigate into the source: `cd personal-security-checklist-FA/web`
3. Install dependencies: `yarn`
4. Start the development server: `yarn dev`

Alternatively, just open this repo in Code Spaces, where everything is already configured and ready to go.

### Deploying
To deploy the app, follow the developing steps above, then run `yarn build`, `yarn build.static`. You can then deploy it by copying the `dist/` directory to any CDN, web server or static hosting provider of your choice.

Alternatively, fork the repo and import it into your providers' dashboard. Or use the link below for an easy 1-click deployment 😉

---

## The API

We also make all the data available via a free API, which you can use however you wish.

### Usage
All endpoints are documented in our OpenAPI spec, you can view these and try them out via our [Swagger docs]().

Base: hamid-k.github.io/personal-security-checklist-FA/api

/api/checklists
/api/checklists/[name-or-index]
/api/checklists/[name]/[point-index]
/api/search/[searchterm]

## Contributing
All checklist data is stored in [`personal-security-checklist.yml`](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/personal-security-checklist.yml). This is pulled in the website at build-time and referenced by the API, and is also dynamically inserted into the markdown [Checklist page](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/CHECKLIST.md).

So if you only wish to make changes to the data, this is the only file you need to edit.

Important: When submitting your pull request, provide references backing up any information that you're adding/amending/removing.

For modifying the website or API source, see the developing sections above for instructions on running locally.

Before submitting an issue or PR, please ensure you've followed the [community guidelines](https://github.com/hamid-k/personal-security-checklist-FA/blob/master/.github/CONTRIBUTING.md) and followed the [Code of Conduct](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/.github/CODE_OF_CONDUCT.md).

---


## Credits

### Sponsors

![sponsors badge](https://readme-contribs.as93.net/sponsors/hamid-k?avatarSize=80&perRow=10)

### Contributors

![contributors badge](https://readme-contribs.as93.net/contributors/hamid-k/personal-security-checklist-FA?perRow=16&limit=96)


### Stargzers

![stargazers badge](https://readme-contribs.as93.net/stargazers/hamid-k/personal-security-checklist-FA?perRow=16&limit=64)


## Credits

Thank you to all who have contributed to, or sponsored this project!

Farsi translation maintained by Hamid K (https://github.com/hamid-k).

### Sponsors


If you've found this repository helpful, consider sponsoring me on GitHub if you're able 💜

### Contributors


---


## License

> _**[hamid-k/personal-security-checklist-FA](https://github.com/hamid-k/personal-security-checklist-FA)** is licensed under [MIT](https://github.com/hamid-k/personal-security-checklist-FA/blob/HEAD/LICENSE) © Alicia Sykes 2024._<br>
> <sup align="right">For information, see <a href="https://tldrlegal.com/license/mit-license">TLDR Legal > MIT</a></sup>

<details>
<summary>Expand License</summary>

```
The MIT License (MIT)
Copyright (c) Alicia Sykes <alicia@omg.com> 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included install 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>




<!-- License + Copyright -->
<p  align="center">
  <i>© Alicia Sykes 2024</i><br>
  <i>Licensed under <a href="https://opensource.org/license/mit">MIT</a></i><br>
  <sup>Thanks for visiting :)</sup>
</p>

<!-- Dinosaurs are Awesome -->
<!-- 
                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
-->
