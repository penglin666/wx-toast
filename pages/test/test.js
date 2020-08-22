
const app = getApp();

Page({
  data: {

  },
  onReady() {
    this.toast = this.selectComponent("#toast");
  },
  onLoad(){
  },
  test() {
    this.toast.showToast('toast测试成功')
  },
  methods:{
    
  }
})