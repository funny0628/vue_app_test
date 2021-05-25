<template>
  <div class="goodslist">
      <ul>
          <li>
              <div class="img"></div>
              <div class="introduction">
                  <p class="title">232321323232132323213232321323232132323213</p>
                  <p class="shipping">weqweqw</p>
                  <p class="money_num">
                      <span class="money">123</span>
                      <span class="number">adasd</span>
                      <span class="fightorder">
                          <img src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
                      </span>
                  </p>
              </div>
          </li>
          <li>
              <div class="img"></div>
              <div class="introduction">
                  <p class="title">2323213</p>
                  <p class="shipping">weqweqw</p>
                  <p class="money_num">
                      <span class="money">¥ 123</span>
                      <span class="number">adasd</span>
                      <span class="fightorder">
                          <img src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
                      </span>
                  </p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Goodslist'

}
</script>

<style lang="less"  scoped>
.goodslist {
    width: 100%;
    ul {
        display: flex;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: red;
        padding-bottom: 3px;
        box-sizing: border-box;
        li {
            width: 49.5%;
            background-color: yellow;
            display: flex;
            flex-direction: column;
            align-items: center;
            .img {
                width: 100%;
                height: 6.25rem;
                background:url('https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500') no-repeat center center;
            }
            .introduction {
                width: 100%;
                padding: .3125rem;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                p {
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: left;
                }
                .title {
                    font-size: 1.125rem;
                }
                .shipping {
                    font-size: 1rem;
                    color: #ccc;
                    // text-align: left;
                }
                .money_num {
                    font-size: .875rem;
                    display: flex;
                    .fightorder {
                        img {
                            margin-right: .3125rem;
                        }
                    }
                }
            }
        }
    }
}
</style>