<template>
  <div>
    <nuxt-link to="/test">テストへ</nuxt-link>

    <h1>v-removeWhitespace なし</h1>
    <div>
      お問い合わせは
      <a href="#">こちらから</a>
      お願いします
    </div>

    <br />

    <h1>v-removeWhitespace あり</h1>
    <div v-removeWhitespace>
      お問い合わせは
      <a href="#">こちらから</a>
      お願いします
    </div>
  </div>
</template>
