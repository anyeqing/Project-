$(function () {

//TODO 头部区域，获取所有的li标签,当我点击对应的li的时候，移除原有的li的class属性,给点击的li标签添加active属性
  var $navList=$('.nav ul li');
  //内容区ul
  var $contentList=$('.contentList');

  var now=0
  //求出一个内容区li的高度
  var $contentLiH=$contentList.first().height();
  $navList.each(function (index,item) {

  }).bind('click',function (event) {
    $navList.removeClass('active');
    $(this).addClass('active');
    //this的方法求取当前的index
    var $index=$(this).index();
    //获取小圆点的所有元素
    $navLi.removeClass('active')
    $navLi.eq($index).addClass('active')
    //TODO 将高度设置给内容区的高度
    $contentList.animate({top:-$index*$contentLiH+'px'},'slow')
  })

//小圆点关联
//   获取所有的小圆点，并遍历,给所有的li绑定监听事件，获取当前小圆定的索引
  var $navLi=$('.sideNav li');

  $navLi.each(function (index,item) {
  }).bind('click',function (event) {
    //删除所有li的class属性
    $navLi.removeClass('active');

    var $index=$(this).index();

//          $('#wrap .header .headerContent .nav ul li:eq('+$index+')').attr('id','active')
    $navList.removeClass('active')
    $navList.eq($index).addClass('active')
    $(this).addClass('active');
    //TODO 将高度设置内容区的top值
    $contentList.animate({top:-$index*$contentLiH+'px'},'slow')
  })

//滚动事件，滚动到第一张就定格到第一张，滚动到最后一张就定格到最后一张

// jquery 兼容的滚轮事件
  $(document).on("mousewheel DOMMouseScroll", function (e) {

    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
      (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox


    if (delta > 0) {

      // 向上滚
      // console.log("wheelup");
      now--
      

    } else if (delta < 0) {
      // 向下滚
      console.log("wheeldown");
      console.log(event.y)
    }
  });



})