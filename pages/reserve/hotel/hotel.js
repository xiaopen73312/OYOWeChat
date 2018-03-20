// pages/reserve/hotel/hotel.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
     inMoth:0,
     outMoth:0,
     inDay:0,
     outDay:0,
     totalDay:1,

    /**
          * 页面配置
          */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    numberArray: [1, 2, 3, 4,5,6,7,8,9,10],
    objectArray: [
   
      { id: 3, name: 'OYO8004',price:400 },
      { id: 2, name: 'OYO8003', price: 300},
      { id: 1, name: 'OYO8002', price: 200},
      { id: 0, name: 'OYO8001', price: 100},
    ],
  },
  hotelDetail:function() {
    wx.navigateTo({
      url: '../details/details'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onGetDayInfo(options);
    // app.func.req('get','/ws/district/v1/getchildren',
    //  { 
    //   id:440305,
    //   key: app.globalData.tencentMapKey
    //   }, 
    //   function (res) {
    //   console.log(res)
    // }); 
    // app.func.req('get', '/wechat/token',
    //   {
         
    //   },
    //   function (res) {
    //     console.log(res)
    //   }); 


    var that = this;
    /**
   * 获取系统信息
   */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  /**
      * 滑动切换tab
      */
  bindChange: function (e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /**
   * 点击tab切换
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    
    wx.setNavigationBarTitle({
      title: '酒店列表'
    })
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
  
  },
 
  onGetDayInfo: function (options){
    // options.begin.getFullYear();
    this.setData({
      inMoth: new Date(options.begin).getMonth() + 1,
      outMoth: new Date(options.end).getMonth() + 1,
      inDay: new Date(options.begin).getDate(),
      outDay: new Date(options.end).getDate(),
      totalDay: options.totalDay
    })
     
  }
})