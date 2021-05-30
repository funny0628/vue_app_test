<template>
  <div>
    <p>more</p>
    <button @click="startRecord">开始录音</button>
    <button @click="stopRecord">结束录音</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      r:null
    }
  },
  created () {
    if(window.plus){
      this.onPlusReady()
    }else{
      document.addEventListener( "plusready", this.onPlusReady, false );
    }
  },
  methods: {
    // 扩展API加载完毕，现在可以正常调用扩展API 
    onPlusReady() { 
      this.r = plus.audio.getthis.ecorder(); 
      console.log(this.r,'this.r');
    },
    startRecord() {
      if ( this.r == null ) {
        alert( "Device not ready!" );
        return; 
      } 
      this.r.record( {filename:"_doc/audio/"}, function () {
        alert( "Audio record success!" );
      }, function ( e ) {
        alert( "Audio record failed: " + e.message );
      } );
    },
    stopRecord() {
      this.r != null && this.r.stop(); 
    }
  }
}
</script>

<style>

</style>