---
layout: cover
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
---

# როგორ მუშაობს WEB-ი

---

# Front-end vs Back-end

<img src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works/simple-client-server.png">

---

# DNS: Domain Name System

- IP მისამართი: `192.0.2.172`
- დომეინის სახელი: `google.com`

## HTTP(S): Hyper-Text Transfer Protocol (Secure)

`https://google.com/`

---

# რას გვიბრუნებს სერვერი?

ფაილებს!

<img src="https://cdn.dribbble.com/users/269922/screenshots/1008644/files.jpg">

---

# ჩვენი ენები

### Hyper-Text Markup Language (`.html`)

```html
<h1>I am a title!</h1>
<p>And this is a paragraph!</p>
```

### Cascading Style Sheets (`.css`)

```css
h1 {
  color: red;
  text-align: center;
}
```

### JavaScript (`.js`)

```js
const heading = document.querySelector("h1");
heading.addEventListener("mouseenter", () => {
  heading.textContent = "wow so interactive";
});
```

---
 layout: center
---

# შევქმნათ ვებ-გვერდი!
