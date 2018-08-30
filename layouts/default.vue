<template>
  <div class="blog">
    <section class="cocoa-header">
      <div class="cocoa-container">
        <div class="cocoa-content">
          <a href="https://themes.gohugo.io/theme/cocoa/">
          <!--<img class="avatar" src="./Arthur Dent_files/profile.png" srcset="https://themes.gohugo.io/theme/cocoa/img/profile.png 1x,https://themes.gohugo.io/theme/cocoa/img/profile-2x.png 2x,https://themes.gohugo.io/theme/cocoa/img/profile-3x.png 3x,https://themes.gohugo.io/theme/cocoa/img/profile-4x.png 4x">-->
          </a>
          <a href="https://themes.gohugo.io/theme/cocoa/">
            <div class="cocoa-name">Arthur Dent</div>
          </a>
          <nav>
            <ul>
              <li class="nav-blog"><a href="https://themes.gohugo.io/blog/"><span>Blog</span></a></li>
              <li class="nav-about"><a href="https://themes.gohugo.io/about/"><span>About</span></a></li>
              <li class="nav-code"><a href="https://themes.gohugo.io/code/"><span>Code</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="cocoa-icons">
      <div class="cocoa-container">
        <div class="cocoa-content">
          <a href="https://github.com/you" target="_blank" rel="noopener">
            <i class="fab fa-weibo"></i>asasas
          </a>
          <a href="https://twitter.com/you" target="_blank" rel="noopener">
            <font-awesome-icon icon="dollar-sign" />
          </a>
          <a href="https://example.com/@you" target="_blank" rel="noopener">
            <fa :icon="['fab', 'github']"/>
          </a>
          <a href="https://linkedin.com/in/you" target="_blank" rel="noopener">
            <fa :icon="['fab', 'weibo']"/>
          </a>
          <a href="https://instagram.com/you" target="_blank" rel="noopener">
            <i class="fab fa-weibo"></i>
          </a>
          <a href="https://500px.com/username" target="_blank" rel="noopener">
            <i class="fab fa-weibo"></i>
          </a>
          <a href="mailto:you@example.space">
            <i class="fab fa-weibo"></i>
          </a>
          <a href="https://themes.gohugo.io/theme/cocoa/index.xml">
            <i class="fab fa-weibo"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="cocoa-main">
      <div class="cocoa-container">
        <div class="cocoa-content">
          <nuxt/>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
