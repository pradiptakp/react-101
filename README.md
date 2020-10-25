# Kuy Belajar React JS!

[**React JS**](https://reactjs.org/) adalah sebuah framework JavaScript yang dibuat untuk membangun aplikasi front-end berbasis web. Dalam tutorial kalian bisa mempelajari semua hal dasar yang perlu diketahui untuk membangun aplikasi front-end web menggunakan **React JS**.

## References

Sebelum masuk ke komponen dan koding, ada beberapa link referensi yang berisi informasi perihal apa itu **React JS** dan mengapa belajar **React JS ** dapat bermanfaat untuk kalian:

- [Tutorial Resmi React JS](https://reactjs.org) (dokumentasi)
- [What Is React (React js) & Why Is It So Popular?](https://www.youtube.com/watch?v=N3AkSS5hXMA) (video)
- [React Tutorial For Beginners](https://www.youtube.com/watch?v=dGcsHMXbSOA) (video)

## Roadmap

![React JS roadmap](https://roadmap.sh/roadmaps/react.png)
Eits, jangan keburu pusing dulu setelah melihat gambar ini, meskipun terlihat banyak sekali yang perlu dipelajari untuk bisa membangun aplikasi web menggunakan **React JS**, tapi sebenarnya hal itu justru mempermudah developer dalam mengembangkan aplikasi, karena banyak sekali library atau komponen yang dapat digunakan untuk membangun aplikasi web dengan praktis.

## Fundamental Topics

Sebelum masuk ke **React JS**, kita harus lebih dulu memahami bahasa pemrograman JS atau **JavaScript**. Bahasa pemrograman **JavaScript** dapat dipelajari dengan cepat karena bersifat sederhana dan fleksibel. Kalian dapat mempelajari dasar dasar pemrograman JavaScript disini:
[# A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

Apabila sudah memahami JavaScript, sekarang waktunya kita masuk ke **Fundamental React JS**

### 1. Instalasi dan Create App

- Install npm and Node JS: https://www.npmjs.com/get-npm
- Run `npx create-react-app` atau clone starter dari sini:
  - [**react-basic**](https://github.com/pradiptakp/react-101/tree/master/react-basic): Setup React sederhana yang mencakup routing, autentikasi dasar dan fetching data.
- Apabila melakukan clone, run `npm install` untuk melakukan install _node modules_ atau kumpulan dari library yang terdaftar di package.json
- Untuk run debug bisa gunakan `npm start`

> Referensi: [Learn React In 30 Minutes](https://www.youtube.com/watch?v=hQAHSlTtcmY)

### 2. JSX

**JSX** adalah bahasa yang digunakan untuk menulis view komponen dari **React JS**, syntax **JSX** sendiri tidak jauh berbeda dengan HTML. Contoh dari penulisan **JSX** dapat dilihat di App.js.

> Referensi:
>
> - https://www.w3schools.com/react/react_jsx.asp
> - https://reactjs.org/docs/introducing-jsx.html

### 3. Functional vs Class  (Pakai functional saja :D)

Pengunaan function dan class dalam penulisan koding memiliki perbedaan syntax dan fungsional yang mempengaruhi pengolahan data dalam React

> Referensi:
> https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108

### 4. Props vs State

Props & State adalah komponen yang dapat digunakan untuk menyimpan dan mengolah data dalam **React JS**

> Referensi:
> https://flaviocopes.com/react-state-vs-props/

### 5. Conditional Rendering

Dengan menggunakan data dari props atau state, developer dapat melakukan conditional rendering yaitu dengan melakukan rendering komponen **JSX** menyesuaikan dengan kondisi dari data baik menggunakan state atau props

> Referensi:
> https://linguinecode.com/post/4-techniques-conditional-render-react-props-state

### 6. Component Life Cycle

**Component Life Cycle** adalah siklus dari komponen yang digunakan untuk me-render tampilan dari web. Siklus ini memang terlihat agak rumit, beruntung nya sekarang sudah ada hooks yang salah satu kegunaannya adalah untuk menyederhanakan life cycle dari **React JS**. Life cycle ini sangat dipermudah dengan pengunaan hooks.

> https://medium.com/codeacademia/apa-itu-component-lifecycle-di-react-bfcb64f64e0e

### 7. List & Keys

Dengan List & Keys developer dapat menampilkan tampilan berulang secara mudah menggunakan fungsi `.map`

> Referensi:
> https://reactjs.org/docs/lists-and-keys.html

### 8. Composition vs Inheritance

Ini adalah salah satu komponen yang membuat **React JS** populer. Komposisi memungkinkan developer untuk membungkus komponen dalam komponen yang membuat tampilan web mudah untuk dirancang dan membuat kode menjadi lebih rapi.

> Referensi:
> https://reactjs.org/docs/composition-vs-inheritance.html

### 9. Basic Hooks

React Hooks mempermudah developer dalam melakukan manajemen _Life Cycle_ dari komponen react dan juga mengolah data. Sebelum hooks syntax syntax bawaan dari React seperti `this.setState` dan `this.state` serta fungsi _Life Cycle_ dari React seperti `componentWillMount` dan `componentDidMount` masih sering digunakan. Namun dengan adanya Hooks, semua itu dapat di handle oleh beberapa fungsi dasar seperti `useState` dan `useEffect`. 

Fungsi `useEffect` dipanggil saat layar pertama kali di mount, fungsi ini juga dapat melakukan listen pada perubahan suatu state atau data pada layar. Fungsi `useState` dapat digunakan untuk mengolah data pada screen dengan mudah, anggap variabel yang menggunakan `useState` sebagai variabel yang hanya dimiliki layar tersebut dan developer dapat menggunakan data dalam state untuk melakukan berbagai hal seperti conditional rendering, looping view, dll.

> Referensi:
https://reactjs.org/docs/hooks-intro.html
https://www.valentinog.com/blog/hooks/
>
> Link Belajar
https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A

### 10. React Routing
Digunakan untuk routing pada applikasi
> https://reactrouter.com/web/guides/quick-start
> https://www.youtube.com/watch?v=Law7wfdg_ls&t=795s

## Useful Libraries
Berikut adalah beberapa library yang sangat berguna dan sering digunakan oleh developer untuk mengembangkan aplikasi *React JS*

### 1. Axios
Digunakan untuk fetch API calls
> https://www.digitalocean.com/community/tutorials/react-axios-react

### 2. React UI KIT (Bootstrap, Material UI, dll)
Banyak pilihan UI kit yang bisa dipakai untuk membantu membuat komponen view dari *React JS*. yang dicontohkan di repo ini pakai react bootstrap
> https://github.com/lucianomlima/react-ui-kits (list lengkap React UI Kits)
> https://blog.logrocket.com/top-7-ui-libraries-and-kits-for-react/
> https://react-bootstrap.github.io/getting-started/introduction/
> https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b
https://medium.com/@byciikel/konfigurasi-tailwind-css-di-react-js-1c70a86fa359 (be'e pengen nggae tailwind)

### 3. Formik
Digunakan untuk mempermudah membuat form
> https://formik.org/docs/overview

### 4. Moment JS
Digunakan untuk mempermudah mengolah format waktu
> https://momentjs.com/

## Link link berguna:
- https://github.com/adam-golab/react-developer-roadmap (roadmap)
- https://github.com/enaqx/awesome-react (list sinau React JS terluengkap sejagat raya)
- https://github.com/brillout/awesome-react-components
