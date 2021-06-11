<template>
  <!-- 手写签名组件 -->
  <div class="page sign-page">
    <div class="content">
      <div class="sign-wrap" id="signWrap">
        <canvas id="myCanvas" width="100%" height="100%"></canvas>
      </div>
    </div>
    <div class="con-btn">
      <span class="staging-btn size14" @click="clearArea()">清除签名</span>
      <span class="submit-btn size14" @click="saveSign()">确认签名</span>
    </div>
    <div class="img">
      <img class="myimg" >
    </div>
    <div class="imgPreview">
      <ul>
          <viewer class="infoImg" :images="imgList">
            <li v-for="src in imgList">
              <span>{{src.title}}</span>
              <img  :src="src.url" :key="src.title">
            </li>
          </viewer>
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "signature",
  data() {
    return {
      image: "",
      mousePressed: false,
      c: "",
      ctx: "",
      lastX: 0,
      lastY: 0,
      $img:'',
      imgList:[
        {
          url:'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title:'红霞',
          preview: '1'
        },
        {
          url:'https://images.pexels.com/photos/6758350/pexels-photo-6758350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title:'床品',
          preview: '1'
        },
        {
          url:'https://images.pexels.com/photos/4011876/pexels-photo-4011876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title:'人物',
          preview: '1'
        },
        {
          url:'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title:'cat',
          preview: '1'
        },
      ]
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.$img = document.getElementsByClassName('myimg')[0]
    });
    this.image = "";
    this.mousePressed = false;
    // var lastX, lastY;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.c = document.getElementById("myCanvas");
    var signWrap = document.getElementById("signWrap");
    this.c.width = signWrap.clientWidth; // 设置宽度
    this.c.height = signWrap.clientHeight; // 设置高度
    // 监听touchstart事件，touchmove事件，touchend事件等事件
    this.InitThis();
  },
  methods: {
    InitThis() {
      // 触摸屏
      var that = this;
      this.c.addEventListener(
        "touchstart",
        function (event) {
          if (event.targetTouches.length == 1) {
            event.preventDefault(); // 阻止浏览器默认事件，重要
            var touch = event.targetTouches[0];
            this.mousePressed = true;
            that.Draw(
              touch.pageX - this.offsetLeft,
              touch.pageY - this.offsetTop,
              false
            );
          }
        },
        false
      );
      this.c.addEventListener(
        "touchmove",
        function (event) {
          if (event.targetTouches.length == 1) {
            event.preventDefault(); // 阻止浏览器默认事件，重要
            var touch = event.targetTouches[0];
            if (this.mousePressed) {
              that.Draw(
                touch.pageX - this.offsetLeft,
                touch.pageY - this.offsetTop,
                true
              );
            }
          }
        },
        false
      );
      this.c.addEventListener(
        "touchend",
        function (event) {
          if (event.targetTouches.length == 1) {
            event.preventDefault(); // 阻止浏览器默认事件，防止手写的时候拖动屏幕，重要
            this.mousePressed = false;
          }
        },
        false
      );
      // 鼠标
      this.c.onmousedown = function (event) {
        this.mousePressed = true;
        that.Draw(
          event.pageX - this.offsetLeft,
          event.pageY - this.offsetTop,
          false
        );
      };
      this.c.onmousemove = function (event) {
        if (this.mousePressed) {
          that.Draw(
            event.pageX - this.offsetLeft,
            event.pageY - this.offsetTop,
            true
          );
        }
      };
      this.c.onmouseup = function (event) {
        this.mousePressed = false;
      };
    },
    Draw(x, y, isDown) {
      if (isDown) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#000"; // 颜色
        this.ctx.lineWidth = 3; // 线宽
        this.ctx.lineJoin = "round";
        this.ctx.lineMax = 10; // 设置画笔最大线宽
        this.ctx.lineMin = 3; // 设置画笔最小线宽
        this.ctx.linePressure = 1.2; // 设置画笔笔触压力
        this.ctx.smoothness = 30; // 设置画笔笔触大小变化的平滑度
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(x, y);
        this.ctx.closePath();
        this.ctx.stroke();
      }
      this.lastX = x;
      this.lastY = y;
    },
    // 清空画板
    clearArea() {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.$img.src = "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=0522dd202e2eb938ec3872f6e052a903/21a4462309f79052c9e799ff0df3d7ca7acbd573.jpg";
    },
    // 提交签名
    saveSign() {
      this.checkEmpty(); // 调用 表单非空验证
    },
    checkEmpty() {
      var c = document.getElementById("myCanvas"); // 获取html的canvas对象，我这个id="myCanvas"
      if (this.isCanvasBlank(c)) {
        alert("请在签名区域签名后再次确认");
        return;
      } else {
        var image = this.c.toDataURL("image/png"); // 得到生成后的签名base64位  url 地址
        // console.log(image); // 打印图片base64 url
        this.$img.src = image;
      }
    },
    // 验证canvas画布是否为空函数
    isCanvasBlank(canvas) {
      var blank = document.createElement("canvas"); // 系统获取一个空canvas对象
      blank.width = canvas.width;
      blank.height = canvas.height;
      return canvas.toDataURL() == blank.toDataURL(); // 比较值相等则为空
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 50%;
  .content {
    width: 100%;
    height: 40%;
    background: url('https://www.pexels.com/zh-cn/@padrinan') no-repeat center center;
    background-size: contain;
    .sign-wrap {
      width: 100%;
      height: 100%;
    }
  }
  .con-btn {
    width: 100%;
    height: 10%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    opacity: 0.75;
    span {
      width: 50%;
      font-size: 0.14rem;
      // height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }
    .staging-btn {
      color: #4154ff;
      background: #ccc;
    }
    .submit-btn {
      color: #fff;
      background: #4154ff;
    }
  }
  .img {
    width: 100%;
    height: 40%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .imgPreview {
    ul {
      list-style: none;
      display: flex;
      .infoImg {
        display: flex;
        flex-wrap: wrap;
        li {
          position: relative;

          img {
            position: relative;
            width: 100px;
            height: 50px;
            opacity: 0;
          }
          span {
            // width: 100%;
            // height: 100%;
            // text-align: center;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            border: 1px solid #ccc;
            padding: 3px 5px;
            border-radius: 3px;
          }
        }
      }
    }
  }
}

</style>