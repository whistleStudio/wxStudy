// components/FoodCard/FoodCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    foodItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isSelect: false,
    isPreDel: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _select() {
      this.data.isSelect = !this.data.isSelect
      this.setData({isSelect: this.data.isSelect})     
    },
    _del() {
      this.setData({isPreDel: true})
      wx.showModal({
        title: '提示',
        content: '这是一个模态弹窗',
        success: res => {
          this.setData({isSelect: false, isPreDel: false})
          if (res.confirm) {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })            
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })      
    }
  }
})
