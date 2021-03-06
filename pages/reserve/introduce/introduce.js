Page({
  data: {
    hotelName: 'OYO8005 莲之乡酒店',
    hotelAddress: '',
    hotelInfo: '',
    winHeight: "",//窗口高度,
    winWidth: '',
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 2) {
      this.setData({
        scrollLeft: this.data.winWidth / 3
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function (options) {
    console.log(options)
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 440;
        console.log(calc)
        that.setData({
          winHeight: calc,
          winWidth: clientWidth
        });
      }
    });

    that.setData({
      hotelName: options.hotelName,
      hotelAddress: options.hotelAddress,
 
      hotelInfo: options.hotelInfo,
    }); 

  },
  // footerTap: app.footerTap
})