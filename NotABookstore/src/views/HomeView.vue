<template>
  <div class="container">
    <div class="wrapper">
      <div class="row">
        <div class="col-md-6">
          <div class="landing-box">
            <h1>Capturing Books reflections was never this easy!</h1>
            <p>Experience the effortless way to capture your book reflections. This platform makes it simple to jot down
              your thoughts as you read. No more struggling to remember key points or favorite quotes. Sign up today and
              start recording your reading journey with ease and convenience.</p>
            <router-link to="/register" class="btn btn-primary">Sign Up</router-link>
            <router-link to="/books" class="btn btn-outline-primary">Books</router-link>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/reading-book.jpg" alt="reading book illustration" class="landing-img">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 25px auto;
  padding-top: 2.5rem;

}

.landing-box h1 {
  margin-top: 10%;
  color: rebeccapurple;
}

.landing-box p {
  margin: 1.25rem auto;
}

.landing-img {
  width: 100%;
  padding: 1.25rem;
}

.landing-box a {
  border-radius: 30px;
  padding: 10px 20px;
  margin-right: 30px;
}
</style>