// pages/eventbind/eventbind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /*自定义事件*/
  // _tapFirst: function() {
  //   console.log("1")
  // },
  // _tapSecond: function() {
  //   console.log("2")
  // },
  // _tapThird: function() {
  //   console.log("3")
  // },
  // _longpress: function() {
  //   console.log("longpress")
  // },
  _tap: function(evt) {
    console.log("tap", evt)
  },
  // _touchstart: function() {
  //   console.log("touchstart")
  // },
  // _touchmove: function() {
  //   console.log("touchmove")
  // },
  // _touchcancel: function() {
  //   console.log("touchcancel")
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // setTimeout(() => {
    //   wx.showModal({
    //     title: '我是一个不起眼的模态窗',
    //     cancelColor: 'cancelColor',
    //   })
    // }, 3000)
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