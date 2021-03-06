// pages/databind/databind.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    testText: "数据绑定",
    testPrice: 2000,
    testIsStar: false,
    score: 90,
    info: [
      {title: "first", count: 99, _id: 0},
      {title: "second", count: 88, _id: 1},
      {title: "third", count: 77, _id: 2}
    ],
    switch: [
      "a",
      "b",
      "c"
    ]
  },

  _addSwitch: function() {
    this.data.switch.unshift("new")
    this.setData({
      info: this.data.switch
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(()=>{
      // this.data.info.unshift({title: "fourth", count: 66, _id: 3})
      this.setData({
        info: this.data.info.unshift({title: "fourth", count: 66, _id: 3})
      })
      console.log(this.data.info)
    }, 3000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})